extends Node3D
const R=preload("res://scripts/rules.gd")
const C=preload("res://scripts/catalog.gd")
const A=preload("res://scripts/actor.gd")
const W=preload("res://scripts/arena.gd")
const UI=preload("res://scripts/ui.gd")
var bot_navigation:BotNavigation
var bot_agents={}
var bot_attack_site=0
var options=R.default_options()
var players={}
var actors={}
var devices={}
var device_nodes={}
var fields=[]
var drops=[]
var reconnects={}
var arena:Arena
var ui:CanvasLayer
var clock=0.0
var phase="menu"
var remaining=0.0
var scores=[0,0]
var losses=[0,0]
var tickets=[0,0]
var spectator_target=0
var spectator_camera:Camera3D
var spectator_yaw=0.0
var spectator_pitch=-.12
var trigger_seq=0
var preview:Node3D
var round_no=0
var next_device=1
var zone_owner=[-1,-1,-1]
var zone_capture=[0.0,0.0,0.0]
var bomb={"planted":false,"site":-1,"time":0.0,"actor":0,"progress":0.0,"position":Vector3.ZERO}
var server=false
var dedicated=false
var local_id=1
var profile={"nick":"Player","token":"","sensitivity":.0023,"ads_sensitivity":.75,"volume":.65,"window":true}
var pending_loadout={"role":0,"primary":"a1","secondary":"pistol","armor":0,"team":-1,"gadget":0}
var snapshot_timer=0.0
var input_timer=0.0
var discovery:PacketPeerUDP
var browser:PacketPeerUDP
var discover_timer=0.0
var rooms={}
var sounds={}
var ping_ms=0
var ping_timer=0.0
var test_mode=false
var smoke_visuals=[]
var world_timer=0.0
var step_events=0.0
var wall_marks=[]
var drop_nodes={}
var incoming_at={}
var cli_args=[]
var snapshot_sequence=0
var received_sequence=-1
var received_parts={}
var expected_parts=0
func _ready():
	C.load_all();load_profile();setup_input()
	for s in ["shot","heavy","hit","confirm","reload","step","heal"]:sounds[s]=load("res://assets/audio/"+s+".wav")
	ui=UI.new();ui.game=self;add_child(ui);ui.menu();save_profile()
	multiplayer.peer_disconnected.connect(disconnected)
	multiplayer.connected_to_server.connect(connected)
	multiplayer.connection_failed.connect(func():ui.notice("서버에 연결하지 못했습니다. IP·방화벽을 확인하세요."))
	multiplayer.server_disconnected.connect(func():leave_game("서버 연결이 종료되었습니다."))
	cli_args=OS.get_cmdline_user_args()
	for s in cli_args:
		if s.begins_with("--nick="):profile.nick=s.trim_prefix("--nick=");profile.token=profile.nick.sha256_text()
	if "--server" in cli_args:
		dedicated=true;options.bots=4 if "--training" in cli_args else 0;host_game()
		if "--auto-start" in cli_args:start_match()
	elif "--training" in cli_args:
		options.bots=7;host_game();start_match()
	elif "--host-test" in cli_args:
		test_mode=true;options.bots=0;host_game();start_match()
	for s in cli_args:
		if s.begins_with("--connect="):test_mode=true;join_game(s.trim_prefix("--connect="))
	if "--screenshot" in cli_args:
		await get_tree().create_timer(4).timeout
		get_viewport().get_texture().get_image().save_png("/tmp/relaystrike-game.png")
	if "--quit-test" in cli_args:
		await get_tree().create_timer(12).timeout;print("TEST_EXIT players=",players.size()," phase=",phase);get_tree().quit()
func load_profile():
	var cfg=ConfigFile.new()
	var loaded=cfg.load("user://settings.cfg")
	# Preserve the previous title's local preferences and player identity.
	if loaded!=OK:
		var previous=OS.get_user_data_dir().get_base_dir().path_join("RelayStrike LAN/settings.cfg")
		if FileAccess.file_exists(previous):loaded=cfg.load(previous)
	if loaded==OK:
		for k in profile:profile[k]=cfg.get_value("player",k,profile[k])
	if str(profile.token).is_empty():profile.token=Crypto.new().generate_random_bytes(16).hex_encode()
func save_profile():
	var cfg=ConfigFile.new()
	for k in profile:cfg.set_value("player",k,profile[k])
	cfg.save("user://settings.cfg")
	AudioServer.set_bus_volume_db(0,linear_to_db(maxf(.001,float(profile.volume))))
func setup_input():
	var binds={"left":KEY_A,"right":KEY_D,"forward":KEY_W,"back":KEY_S,"sprint":KEY_SHIFT,"crouch":KEY_CTRL,"jump":KEY_SPACE,"reload":KEY_R,"use":KEY_E,"skill":KEY_F,"gadget":KEY_G,"gear":KEY_B,"score":KEY_TAB,"primary":KEY_1,"secondary":KEY_2,"medical":KEY_Q,"gadget_mode":KEY_V,"item3":KEY_3,"item4":KEY_4}
	for k in binds:
		if not InputMap.has_action(k):InputMap.add_action(k)
		var ev=InputEventKey.new();ev.physical_keycode=binds[k];InputMap.action_add_event(k,ev)
func build_world():
	if arena:arena.queue_free()
	arena=W.new();add_child(arena);arena.build(int(options.map))
	bot_navigation=BotNavigation.new();bot_navigation.build(arena);bot_agents.clear()
	if not is_instance_valid(spectator_camera):
		spectator_camera=Camera3D.new();spectator_camera.near=.1;spectator_camera.far=350;add_child(spectator_camera)
func host_game():
	if phase!="menu":return
	var peer=ENetMultiplayerPeer.new();var err=peer.create_server(R.PORT,32,3)
	if err!=OK:ui.notice("방을 만들 수 없습니다. 다른 서버가 실행 중인지 확인하세요. 코드 "+str(err));return
	multiplayer.multiplayer_peer=peer;multiplayer.server_relay=false;server=true;local_id=1;phase="lobby";build_world()
	discovery=PacketPeerUDP.new();discovery.set_broadcast_enabled(true)
	if discovery.bind(R.DISCOVERY)!=OK:discovery=null
	if not dedicated:add_player(1,profile.nick,profile.token)
	for i in range(mini(int(options.bots),int(options.max_players)-(0 if dedicated else 1))):add_player(-i-1,"BOT %02d"%(i+1),"bot"+str(i))
	ui.lobby();broadcast_state(true);print("SERVER_READY port=",R.PORT)
func join_game(ip:String):
	if phase!="menu":return
	var peer=ENetMultiplayerPeer.new();var err=peer.create_client(ip.strip_edges(),R.PORT,3)
	if err!=OK:ui.notice("연결을 시작할 수 없습니다.");return
	multiplayer.multiplayer_peer=peer;server=false;ui.notice("서버에 연결 중…")
func connected():
	local_id=multiplayer.get_unique_id();register.rpc_id(1,profile.nick,profile.token,options.password,R.VERSION)
@rpc("any_peer","call_remote","reliable",0)
func register(nick:String,token:String,password:String,version:String):
	if not server:return
	var id=multiplayer.get_remote_sender_id()
	if players.has(id):return
	var reason=""
	if version!=R.VERSION:reason="게임 버전이 다릅니다. 모두 같은 배포 파일을 사용하세요."
	elif password!=options.password:reason="방 비밀번호가 다릅니다."
	elif players.size()>=int(options.max_players):reason="방이 가득 찼습니다."
	elif phase!="lobby" and int(options.join)==0:reason="진행 중 참가가 금지된 방입니다."
	elif token.length()<16 or token.length()>80:reason="플레이어 식별 정보가 올바르지 않습니다."
	if not reason.is_empty():reject.rpc_id(id,reason);return
	for p in players.values():
		if p.token==token:reject.rpc_id(id,"같은 플레이어가 이미 접속해 있습니다.");return
	add_player(id,nick.left(20),token)
	configure.rpc_id(id,public_options());broadcast_state(true)
	print("JOIN ",id," count=",players.size())
@rpc("authority","call_remote","reliable",0)
func reject(message:String):
	leave_game(message)
func public_options() -> Dictionary:
	var d=options.duplicate();d.erase("password");return d
@rpc("authority","call_remote","reliable",0)
func configure(opts:Dictionary):
	options=opts;build_world();phase="lobby";ui.lobby()
func add_player(id:int,nick:String,token:String):
	var t=0;var counts=[0,0]
	for p in players.values():counts[p.team]+=1
	t=randi()%2 if counts[0]==counts[1] else 0 if counts[0]<counts[1] else 1
	var role=0 if id>0 else absi(id)%6
	if role==5 and medic_count(t)>=R.medic_cap(counts[t]+1):role=0
	var p={"id":id,"nick":nick,"token":token,"team":t,"role":role,"primary":C.first(role),"secondary":R.SECONDARIES[role],"slot":0,"hp":100.,"armor":0.,"armor_max":0,"alive":false,"kills":0,"deaths":0,"assists":0,"objective":0,"healed":0.,"played":0.,"cash":800,"lives":int(options.lives),"respawn":0.,"mag":{},"reserve":{},"reload":0.,"reload_weapon":"","fire_ready":0.,"heal_ready":0.,"heal_mag":3,"heal_reserve":3,"energy":180.,"repair_energy":100.,"skill_ready":0.,"gadget_count":1,"gadget":0,"protect":0.,"shield":0.,"slow":0.,"dash":0.,"mark":0.,"flash":0.,"last_hit":-20.,"contributors":{},"input_time":clock,"gadget_ready":0.,"last_pos":Vector3.ZERO,"spectator":false,"round_bonus":0,"can_respawn":true,"smoke":2,"flash_count":1}
	if reconnects.has(token):
		p=reconnects[token].duplicate(true);p.id=id;p.nick=nick;p.alive=false;p.respawn=clock+3;reconnects.erase(token)
	elif phase!="lobby":
		p.spectator=int(options.join)==1
		p.alive=false;p.respawn=clock+3 if int(options.join)==2 and int(options.mode)!=4 else 1e12
	p.bloom=0.;p.shot_time=-100.;p.spray_index=0;p.bot_action=""
	p.pending_loadout={};p.trigger_seen=0;p.fire_prev=false;p.burst_left=0;p.trigger_until=0.;p.reload_started=0.;p.switch_until=0.
	if id<0 and p.role==3:p.secondary="repair"
	players[id]=p;ensure_actor(id);equip_ammo(p)
	if phase=="lobby":spawn(id)
	if id<0:
		var brain=BotAgent.new();brain.setup(self,id);bot_agents[id]=brain
func ensure_actor(id:int):
	if actors.has(id):return
	var a=A.new();a.pid=id;a.game=self;a.name="Player_"+str(id);add_child(a);actors[id]=a;a.set_local(id==local_id and not dedicated);a.set_team(int(players[id].team));a.target_pos=Vector3.ZERO
func equip_ammo(p:Dictionary):
	for id in [p.primary,p.secondary]:
		var w=C.get_weapon(id);p.mag[id]=int(w.mag);p.reserve[id]=int(w.reserve)
func spawn(id:int):
	var p=players[id];var a=actors[id]
	if not p.get("pending_loadout",{}).is_empty():
		var requested=p.pending_loadout.duplicate();p.pending_loadout={};commit_loadout(id,requested)
	var pts=arena.ffa_spawns if int(options.mode)==1 else arena.spawn_points[int(p.team)]
	var best=pts[0];var safest=-1.
	for pos in pts:
		var distance=200.
		for other in players:
			if other!=id and players[other].alive and enemies(p,players[other]):distance=minf(distance,pos.distance_to(actors[other].position))
		distance+=randf()*5
		if distance>safest:safest=distance;best=pos
	a.collision_layer=2;a.position=best;a.target_pos=best;a.velocity=Vector3.ZERO;p.alive=true;p.hp=100.;p.armor=p.armor_max;p.reload=0.;p.protect=clock+2.;p.energy=180.;p.heal_mag=3;p.heal_reserve=3;p.repair_energy=100.;p.gadget_count=2 if p.role==3 else 3 if p.role==4 else 1;p.smoke=1 if p.role==4 and p.gadget==1 else 2;p.flash_count=2 if p.role==4 and p.gadget==1 else 1;p.last_hit=clock;p.contributors={};p.spectator=false
	a.reset_view(0. if p.team==1 else PI);p.fire_ready=clock+.3;p.burst_left=0;p.fire_prev=false;p.trigger_until=0.;p.trigger_seen=int(a.input_state.get("trigger_seq",0));p.slot=0;p.bloom=0.;p.spray_index=0;p.shot_time=-100.;p.switch_until=clock+.3;equip_ammo(p)
	if id==local_id:Input.mouse_mode=Input.MOUSE_MODE_CAPTURED
func disconnected(id:int):
	if not players.has(id):return
	if server:
		var p=players[id];p.alive=false;reconnects[p.token]=p.duplicate(true)
		for did in devices.keys():
			if devices[did].owner==id:remove_device(did)
	players.erase(id);bot_agents.erase(id)
	if actors.has(id):actors[id].queue_free();actors.erase(id)
	if server:call_deferred("broadcast_state",true)
func leave_game(message:String=""):
	if multiplayer.multiplayer_peer:multiplayer.multiplayer_peer.close()
	multiplayer.multiplayer_peer=OfflineMultiplayerPeer.new()
	server=false;phase="menu"
	for a in actors.values():a.queue_free()
	actors.clear();players.clear();bot_agents.clear();bot_navigation=null
	for n in device_nodes.values():n.queue_free()
	device_nodes.clear();devices.clear();fields.clear();drops.clear();reconnects.clear()
	for node in drop_nodes.values():node.queue_free()
	drop_nodes.clear()
	for node in wall_marks:
		if is_instance_valid(node):node.queue_free()
	wall_marks.clear()
	if arena:arena.queue_free();arena=null
	if discovery:discovery.close();discovery=null
	Input.mouse_mode=Input.MOUSE_MODE_VISIBLE;ui.menu();ui.notice(message)
func search_rooms():
	rooms.clear()
	if browser:browser.close()
	browser=PacketPeerUDP.new();browser.bind(0);browser.set_broadcast_enabled(true);browser.set_dest_address("255.255.255.255",R.DISCOVERY);browser.put_packet("RELAYSTRIKE_DISCOVER".to_utf8_buffer())
	browser.set_dest_address("127.0.0.1",R.DISCOVERY);browser.put_packet("RELAYSTRIKE_DISCOVER".to_utf8_buffer())
func network_discovery():
	if discovery:
		while discovery.get_available_packet_count()>0:
			var msg=discovery.get_packet().get_string_from_utf8();var ip=discovery.get_packet_ip();var port=discovery.get_packet_port()
			if msg=="RELAYSTRIKE_DISCOVER":
				discovery.set_dest_address(ip,port);discovery.put_packet(JSON.stringify({"game":"RelayStrike","name":options.room,"count":players.size(),"max":options.max_players,"mode":R.MODES[int(options.mode)],"version":R.VERSION}).to_utf8_buffer())
	if browser:
		while browser.get_available_packet_count()>0:
			var raw=browser.get_packet();var ip=browser.get_packet_ip()
			if raw.size()>2048:continue
			var d=JSON.parse_string(raw.get_string_from_utf8())
			if d is Dictionary and d.get("game")=="RelayStrike":rooms[ip]=d;ui.update_rooms()
func _unhandled_input(event):
	if event is InputEventKey and event.pressed and event.keycode==KEY_ESCAPE:
		if phase!="menu":ui.toggle_pause();get_viewport().set_input_as_handled()
	if not actors.has(local_id) or Input.mouse_mode!=Input.MOUSE_MODE_CAPTURED:return
	var a=actors[local_id]
	if event is InputEventMouseMotion:
		var sensitivity=float(profile.sensitivity)*(float(profile.ads_sensitivity) if a.input_state.ads and players[local_id].alive else 1.)
		if players[local_id].alive:
			a.input_state.yaw-=event.relative.x*sensitivity;a.input_state.pitch=clampf(a.input_state.pitch-event.relative.y*sensitivity,-1.45,1.45)
		else:
			spectator_yaw-=event.relative.x*sensitivity;spectator_pitch=clampf(spectator_pitch-event.relative.y*sensitivity,-1.2,1.2)
	if event is InputEventMouseButton and event.pressed and event.button_index==MOUSE_BUTTON_LEFT and players[local_id].alive:
		trigger_seq+=1;a.input_state.trigger_seq=trigger_seq
	for index in range(3,5):
		if event.is_action_pressed("item"+str(index)):command("slot",{"slot":index-1})
	if event.is_action_pressed("reload"):command("reload",{})
	if event.is_action_pressed("primary"):command("slot",{"slot":0})
	if event.is_action_pressed("secondary"):command("slot",{"slot":1})
	if event.is_action_pressed("skill"):command("skill",{})
	if event.is_action_pressed("gadget"):command("gadget",{})
	if event.is_action_pressed("gear"):ui.gear()
	if event.is_action_pressed("gadget_mode"):command("gadget_mode",{})
	if event is InputEventMouseButton and event.pressed and event.button_index==MOUSE_BUTTON_LEFT and not players[local_id].alive:cycle_spectator()
func command(action:String,data:Dictionary):
	if server:handle_command(local_id,action,data)
	else:request_command.rpc_id(1,action,data)
@rpc("any_peer","call_remote","reliable",0)
func request_command(action:String,data:Dictionary):
	if server:handle_command(multiplayer.get_remote_sender_id(),action,data)
func rate_limit(id:int,key:String,interval:float) -> bool:
	var k=str(id)+key
	if incoming_at.get(k,-100.)+interval>clock:return false
	incoming_at[k]=clock;return true
@rpc("any_peer","call_remote","unreliable_ordered",1)
func send_input(data:Dictionary):
	if not server:return
	var id=multiplayer.get_remote_sender_id()
	if not players.has(id) or not rate_limit(id,"input",.015):return
	var a=actors[id]
	for k in ["x","z","yaw","pitch"]:
		if not data.has(k) or not (data[k] is float or data[k] is int) or not is_finite(float(data[k])):return
	if absf(data.yaw)>1e8:return
	a.input_state={"x":clampf(data.x,-1,1),"z":clampf(data.z,-1,1),"yaw":wrapf(data.yaw,-PI,PI),"pitch":clampf(data.pitch,-1.45,1.45),"ads":bool(data.get("ads",false)),"sprint":bool(data.get("sprint",false)),"crouch":bool(data.get("crouch",false)),"fire":bool(data.get("fire",false)),"alt":bool(data.get("alt",false)),"jump":bool(data.get("jump",false)),"use":bool(data.get("use",false)),"trigger_seq":maxi(0,int(data.get("trigger_seq",0)))}
	players[id].input_time=clock
func collect_input():
	if not actors.has(local_id):return
	var a=actors[local_id];var on=Input.mouse_mode==Input.MOUSE_MODE_CAPTURED and players[local_id].alive
	a.input_state.x=Input.get_axis("left","right") if on else 0.;a.input_state.z=Input.get_axis("forward","back") if on else 0.
	for k in ["sprint","crouch","jump","use"]:a.input_state[k]=on and Input.is_action_pressed(k)
	a.input_state.ads=on and Input.is_mouse_button_pressed(MOUSE_BUTTON_RIGHT);a.input_state.fire=on and Input.is_mouse_button_pressed(MOUSE_BUTTON_LEFT);a.input_state.alt=on and Input.is_action_pressed("medical")
	if server:players[local_id].input_time=clock
	else:send_input.rpc_id(1,a.input_state)
func _physics_process(dt:float):
	clock+=dt;network_discovery()
	if phase=="menu":return
	input_timer-=dt
	if input_timer<=0:collect_input();input_timer=1./30
	if server:
		server_tick(dt)
		snapshot_timer-=dt
		if snapshot_timer<=0:broadcast_state(false);snapshot_timer=1./15
	else:
		if actors.has(local_id) and players[local_id].alive:
			actors[local_id].simulate(dt,clock,phase=="combat" or phase=="lobby")
		ping_timer-=dt
		if ping_timer<=0:ping_request.rpc_id(1,Time.get_ticks_msec());ping_timer=1.
	for id in actors:
		if players.has(id):actors[id].visual(dt,players[id],clock)
	update_world_visuals(dt)
	update_spectator();ui.refresh()
@rpc("any_peer","call_remote","unreliable",2)
func ping_request(sent:int):
	if server and rate_limit(multiplayer.get_remote_sender_id(),"ping",.5):ping_reply.rpc_id(multiplayer.get_remote_sender_id(),sent)
@rpc("authority","call_remote","unreliable",2)
func ping_reply(sent:int):ping_ms=maxi(0,Time.get_ticks_msec()-sent)
func server_tick(dt:float):
	if bot_navigation:bot_navigation.refresh(devices,clock)
	for id in players:
		var p=players[id];var a=actors[id]
		if id<0:bot_input(id,dt)
		elif clock-p.input_time> .5:
			a.input_state.x=0.;a.input_state.z=0.;a.input_state.fire=false;a.input_state.alt=false;a.input_state.use=false
		if not p.alive:
			if phase=="combat" and clock>=p.respawn and not p.spectator and int(options.mode)!=4 and (int(options.mode)!=2 or (p.can_respawn if options.shared_lives else p.lives>0)):spawn(id)
			continue
		a.simulate(dt,clock,phase in ["combat","lobby"])
		if phase!="combat":continue
		p.played+=dt
		var held_weapon=current_weapon(p)
		if clock-float(p.get("shot_time",-100.))>(.18 if int(p.get("spray_index",0))>8 else .09):p.bloom=maxf(0,float(p.get("bloom",0))-float(held_weapon.get("bloom_recovery",3.))*dt*(.55 if int(p.get("spray_index",0))>8 else 1.))
		if clock-float(p.get("shot_time",-100.))>.42:p.spray_index=0
		if p.reload>0 and clock>=p.reload:
			var wid=p.reload_weapon;var w=C.get_weapon(wid);var need=int(w.mag)-int(p.mag.get(wid,0));var got=need if options.infinite else mini(need,int(p.reserve.get(wid,0)))
			p.mag[wid]=int(p.mag.get(wid,0))+got
			if not options.infinite:p.reserve[wid]=int(p.reserve.get(wid,0))-got
			p.reload=0.;p.trigger_until=0.
		if options.autoheal and int(options.mode) in [0,1,3] and clock-p.last_hit>5:p.hp=minf(100,p.hp+10*dt)
		if int(options.mode) in [0,1,3]:
			p.energy=minf(180,p.energy+dt*5)
			if clock>=p.heal_ready+8 and p.heal_mag<3:p.heal_mag+=1;p.heal_ready=clock
		p.repair_energy=minf(100,p.repair_energy+dt*8 if not a.input_state.fire else p.repair_energy)
		process_trigger(id)
		if a.input_state.alt and p.role==5 and p.primary=="m2" and p.slot==0:heal_burst(id)
		if a.input_state.use:interact(id,dt)
		p.last_pos=a.position
	update_devices(dt);update_fields(dt);update_pickups()
	if phase in ["buy","combat","result","round_end"]:
		remaining-=dt
		if phase=="buy" and remaining<=0:phase="combat";remaining=150.;announce("라운드 시작")
		elif phase=="round_end" and remaining<=0:begin_round()
		elif phase=="result" and remaining<=0:next_match()
		elif phase=="combat":check_objectives(dt)
func bot_input(id:int,dt:float):
	if bot_agents.has(id):bot_agents[id].tick(dt)
func enemies(p:Dictionary,q:Dictionary) -> bool:return int(options.mode)==1 or p.team!=q.team
func medic_count(team:int) -> int:
	var n=0
	for p in players.values():
		if p.team==team and p.role==5:n+=1
	return n
func team_count(team:int) -> int:
	var n=0
	for p in players.values():
		if p.team==team:n+=1
	return n
func handle_command(id:int,action:String,data:Dictionary):
	if not players.has(id) or not rate_limit(id,"cmd_"+action,.08):return
	var p=players[id]
	match action:
		"start":
			if id==1 and phase=="lobby":start_match()
		"slot":
			var slot=clampi(int(data.get("slot",0)),0,3)
			if slot>=2 and not options.classes:return
			if slot==3 and p.role!=4:return
			if slot==4 and not options.skills:return
			if slot==p.slot:return
			p.slot=slot;p.reload=0.;p.burst_left=0;p.trigger_until=0.;p.fire_ready=maxf(p.fire_ready,clock+.32);p.switch_until=clock+.32
			if p.role==4 and slot in [2,3]:p.gadget=slot-2
		"reload":begin_reload(id)
		"loadout":apply_loadout(id,data)
		"team":
			if phase!="lobby" or int(options.teams)!=1:return
			var t=clampi(int(data.get("team",0)),0,1)
			if t!=p.team and team_count(t)>=team_count(p.team):feedback(id,"","팀 인원 차이가 너무 큽니다.");return
			p.team=t;actors[id].set_team(t);enforce_medics();spawn(id)
		"skill":use_skill(id)
		"gadget":use_gadget(id)
		"gadget_mode":
			if p.role==4:p.gadget=0 if p.gadget==1 else 1
func valid_loadout(p:Dictionary,d:Dictionary) -> bool:
	var role=clampi(int(d.get("role",p.role)),0,5);var wid=str(d.get("primary",C.first(role)))
	if not C.weapons.has(wid) or C.get_weapon(wid).slot!=0:return false
	if options.classes and int(C.get_weapon(wid).role)!=role:return false
	if not options.classes and C.get_weapon(wid).kind!="gun":return false
	return true
func loadout_cost(p:Dictionary,d:Dictionary) -> int:
	if int(options.mode)!=4:return 0
	var cost=0;var wid=str(d.get("primary",p.primary));var role=int(d.get("role",p.role));var armor=clampi(int(d.get("armor",0)),0,2)*25
	if wid!=p.primary or not p.get("owned_primary",false):cost+=int(C.get_weapon(wid).price)
	if armor>p.armor:cost+=300 if armor==25 else 600
	if role==3:cost+=[300,600,1000][clampi(int(d.get("gadget",0)),0,2)]
	elif role==4:cost+=400
	return cost
func apply_loadout(id:int,d:Dictionary):
	var p=players[id]
	if not valid_loadout(p,d):feedback(id,"","이 병과에서 선택할 수 없는 무기입니다.");return
	if phase not in ["lobby","buy"]:
		p.pending_loadout=d.duplicate();feedback(id,"","선택 예약 완료 · 다음 부활"+(" / 다음 라운드 구매 시간" if int(options.mode)==4 else "")+"에 적용됩니다.");return
	commit_loadout(id,d)
func commit_loadout(id:int,d:Dictionary):
	var p=players[id]
	if not valid_loadout(p,d):return
	var role=clampi(int(d.get("role",p.role)),0,5)
	if role==5 and p.role!=5 and options.classes and medic_count(p.team)>=R.medic_cap(team_count(p.team)):feedback(id,"","메딕 정원이 차서 이전 장비를 유지합니다.");return
	var wid=str(d.get("primary",C.first(role)));var sec=R.SECONDARIES[role]
	if role==3 and d.get("repair",false):sec="repair"
	var armor=clampi(int(d.get("armor",0)),0,2)*25;var gadget=clampi(int(d.get("gadget",0)),0,2)
	var cost=loadout_cost(p,d) if phase=="buy" else 0
	if p.cash<cost:feedback(id,"","구매 실패 · 필요 %d / 보유 %d 크레딧"%[cost,p.cash]);return
	p.cash-=cost
	if p.role!=role:
		for did in devices.keys():
			if devices[did].owner==id:remove_device(did)
	p.role=role;p.primary=wid;p.secondary=sec;p.armor_max=armor;p.armor=armor;p.slot=0;p.gadget=gadget;p.gadget_count=2 if role==3 else 3 if role==4 else 1;p.smoke=1 if gadget==1 else 2;p.flash_count=2 if gadget==1 else 1;p.reload=0.;p.owned_primary=true;p.burst_left=0;p.trigger_until=0.;p.switch_until=clock+.32;p.fire_ready=clock+.32;equip_ammo(p)
	feedback(id,"","구매 완료 · %d 크레딧 사용"%cost if cost>0 else "장비 적용 완료")
func begin_reload(id:int):
	var p=players[id]
	if not p.alive or p.reload>0 or p.slot>1:return
	var wid=p.primary if p.slot==0 else p.secondary;var w=C.get_weapon(wid)
	if w.kind!="gun":return
	if int(p.mag.get(wid,0))<int(w.mag) and (options.infinite or int(p.reserve.get(wid,0))>0):
		p.reload=clock+float(w.reload);p.reload_started=clock;p.reload_weapon=wid;p.burst_left=0;feedback(id,"reload","")
func process_trigger(id:int):
	var p=players[id];var a=actors[id];var held=bool(a.input_state.fire);var seq=int(a.input_state.get("trigger_seq",0))
	var pressed=seq>int(p.get("trigger_seen",0)) or (held and not p.get("fire_prev",false))
	p.trigger_seen=maxi(seq,int(p.get("trigger_seen",0)));p.fire_prev=held
	if p.slot>=2:
		if pressed and clock>=p.fire_ready:
			if p.slot==4:use_skill(id)
			else:
				if p.role==4:p.gadget=p.slot-2
				use_gadget(id)
		return
	var w=current_weapon(p);var mode=w.get("fire_mode","auto")
	if pressed and p.reload<=0:p.trigger_until=clock+.55
	if mode=="auto":
		if held:fire(id)
		return
	if clock<p.fire_ready or p.reload>0 or clock<a.sprint_release or a.last_sprint:return
	if p.get("burst_left",0)==0 and p.get("trigger_until",0)>clock:
		p.trigger_until=0.;p.burst_left=3 if mode=="burst" else 1
	if p.get("burst_left",0)>0:
		var before=int(p.mag.get(p.primary if p.slot==0 else p.secondary,0));fire(id)
		if before>int(p.mag.get(p.primary if p.slot==0 else p.secondary,0)):
			p.burst_left=maxi(0,p.burst_left-1)
			if mode=="burst" and p.burst_left==0:p.fire_ready=clock+.3
func current_weapon(p:Dictionary) -> Dictionary:return C.get_weapon(p.primary if p.slot==0 else p.secondary)
func ray(from:Vector3,to:Vector3,exclude:Array=[],mask:int=7) -> Dictionary:
	var q=PhysicsRayQueryParameters3D.create(from,to,mask);q.exclude=exclude;return get_world_3d().direct_space_state.intersect_ray(q)
func clear_line(from:Vector3,to:Vector3,exclude:Array=[]) -> bool:return ray(from,to,exclude,1|4).is_empty()
func fire(id:int):
	var p=players[id];var a=actors[id]
	if p.slot>1 or not p.alive or clock<p.fire_ready or p.reload>0 or clock<a.sprint_release or a.last_sprint or p.shield>clock:return
	var wid=p.primary if p.slot==0 else p.secondary;var w=C.get_weapon(wid)
	if w.kind=="heal":continuous_heal(id);return
	if w.kind=="repair":repair(id);return
	if int(p.mag.get(wid,0))<=0:begin_reload(id);return
	p.mag[wid]-=1;p.fire_ready=clock+float(w.interval);p.protect=0.
	var spread=a.spread_angle
	var spray=AimModel.spray_offset(w,int(p.get("spray_index",0)))
	p.shot_time=clock;p.spray_index=int(p.get("spray_index",0))+1;p.bloom=minf(float(w.get("bloom_max",1.2)),float(p.get("bloom",0))+float(w.get("shot_bloom",.12)))
	var origin=a.muzzle_world();var eye=a.eye();var last_end=origin+a.direction()*200
	for pellet in range(int(w.pellets)):
		var forward=Basis(Vector3.UP,a.aim_yaw-deg_to_rad(spray.x))*Basis(Vector3.RIGHT,a.aim_pitch+deg_to_rad(spray.y))*Vector3.FORWARD
		var dir=AimModel.cone_direction(forward,spread,randf(),randf())
		var aim_hit=ray(eye,eye+dir*300,[a.get_rid()]);var aim_point=aim_hit.get("position",eye+dir*300)
		var hit=ray(origin,origin+(aim_point-origin).normalized()*minf(300,origin.distance_to(aim_point)+.15),[a.get_rid()]);last_end=hit.get("position",aim_point)
		if hit.is_empty():continue
		var dist=origin.distance_to(hit.position);var dmg=float(w.damage)*lerpf(1.,.4,clampf((dist-float(w.reach))/maxf(float(w.reach),1),0,1))
		var collider=hit.collider
		if collider is Actor:
			var q=players[collider.pid]
			if not q.alive:continue
			var head=hit.position.y-collider.position.y>(.86 if collider.input_state.crouch else 1.38)
			if head:dmg*=1.5
			dmg*=R.damage_water(arena.submerged(hit.position),arena.wading(a.position),not arena.wading(collider.position))
			damage(collider.pid,dmg,id,head)
		elif collider.has_meta("device"):damage_device(int(collider.get_meta("device")),dmg,id)
		elif pellet==0:wall_mark.rpc(hit.position,hit.normal)
	effect.rpc("shot",origin,last_end,id)
	if int(p.mag[wid])==0:begin_reload(id)
func damage(target:int,amount:float,source:int,critical:bool=false):
	if not players.has(target) or not players[target].alive:return
	var p=players[target]
	if p.protect>clock:return
	if players.has(source) and target!=source and not enemies(players[source],p) and not options.friendly:return
	if p.shield>clock and actors.has(source):
		var dir=(actors[source].position-actors[target].position).normalized()
		if actors[target].direction().dot(dir)>.4:amount*=.15
	var armored=p.armor>0
	var absorb=minf(p.armor,amount);p.armor-=absorb;p.hp-=amount-absorb;p.last_hit=clock
	if target<0 and bot_navigation:bot_navigation.danger(actors[target].position)
	var push=(actors[target].position-actors[source].position).normalized() if actors.has(source) and source!=target else Vector3.FORWARD
	impact.rpc(actors[target].eye()-Vector3.UP*.35,push,false,int(p.team))
	hit_reaction.rpc(target,push)
	if source!=target:p.contributors[source]=clock
	if source>0:feedback(source,"hit",("정밀 명중" if critical else "방어구 명중" if armored else "명중")+" · "+str(int(round(amount))))
	if p.hp<=0:
		impact.rpc(actors[target].position,push,true,int(p.team),int(p.role))
		p.hp=0;p.alive=false;p.deaths+=1;p.lives-=1;p.respawn=clock+4.;
		p.can_respawn=p.lives>0
		if int(options.mode)==2 and options.shared_lives:
			p.can_respawn=tickets[p.team]>0
			if p.can_respawn:tickets[p.team]-=1
		p.owned_primary=false
		actors[target].collision_layer=0
		var wid=p.primary;drops.append({"pos":actors[target].position+Vector3.UP*.25,"amount":int(p.mag.get(wid,0))+int(p.reserve.get(wid,0)),"weapon":wid,"until":clock+40})
		if players.has(source) and source!=target:
			players[source].kills+=1
			if int(options.mode)==0:scores[players[source].team]+=1
			var reward=mini(100,600-int(players[source].round_bonus));players[source].cash=mini(8000,players[source].cash+reward);players[source].round_bonus+=reward
			feedback(source,"confirm","처치 확인")
		for aid in p.contributors:
			if aid!=source and players.has(aid) and clock-p.contributors[aid]<8:players[aid].assists+=1
		announce(p.nick+" 탈락")
func damage_device(did:int,amount:float,source:int):
	if not devices.has(did):return
	var d=devices[did]
	if players.has(source) and d.team==players[source].team and int(options.mode)!=1 and not options.friendly:return
	d.hp-=amount;d.last_hit=clock
	if d.hp<=0:remove_device(did)
func aim_player(id:int,range_m:float,ally:bool) -> int:
	var a=actors[id];var hit=ray(a.eye(),a.eye()+a.direction()*range_m,[a.get_rid()])
	if hit.is_empty() or not hit.collider is Actor:return 0
	var tid=hit.collider.pid
	if not players[tid].alive:return 0
	return tid if enemies(players[id],players[tid])!=ally else 0
func heal_target(id:int,tid:int,amount:float):
	if tid==0:return
	var p=players[id];var q=players[tid];var healed=minf(100-q.hp,amount*(.5 if clock-q.last_hit<2 else 1.))
	if q.get("healing_until",0)>clock and q.get("healer",id)!=id:return
	q.hp+=healed;q.healing_until=clock+.12;q.healer=id;p.healed+=healed
	if healed>0:effect.rpc("heal",actors[id].eye(),actors[tid].eye(),id)
func continuous_heal(id:int):
	var p=players[id];p.fire_ready=clock+.1
	if p.energy<2.4:return
	var tid=aim_player(id,10,true)
	if tid==0 or players[tid].hp>=100:return
	if players[tid].get("healing_until",0)>clock and players[tid].get("healer",id)!=id:return
	p.energy-=2.4;heal_target(id,tid,2.4)
func heal_burst(id:int):
	var p=players[id];var a=actors[id]
	if clock<p.heal_ready or clock<p.fire_ready or p.reload>0 or a.last_sprint or clock<a.sprint_release:return
	if p.heal_mag<=0:
		if p.heal_reserve>0:p.heal_mag=mini(3,p.heal_reserve);p.heal_reserve-=p.heal_mag;p.heal_ready=clock+2
		return
	var tid=aim_player(id,15,true)
	if tid==0 or players[tid].hp>=100:return
	if players[tid].get("healing_until",0)>clock and players[tid].get("healer",id)!=id:return
	p.heal_mag-=1;p.heal_ready=clock+2;p.fire_ready=maxf(p.fire_ready,clock+.2);heal_target(id,tid,20)
func repair(id:int):
	var p=players[id];var a=actors[id];p.fire_ready=clock+.1
	if p.repair_energy<2:return
	var hit=ray(a.eye(),a.eye()+a.direction()*4,[a.get_rid()])
	if hit.is_empty() or not hit.collider.has_meta("device"):return
	var did=int(hit.collider.get_meta("device"))
	if not devices.has(did):return
	var d=devices[did]
	if d.team!=p.team or d.hp>=d.max_hp or d.get("repair_until",0)>clock:return
	d.hp=minf(d.max_hp,d.hp+(2 if clock-d.last_hit<2 else 8));d.repair_until=clock+.09;p.repair_energy-=2;effect.rpc("heal",a.eye(),d.pos+Vector3.UP,id)
func placement(id:int) -> Vector3:
	var a=actors[id];var forward=a.direction();forward.y=0;forward=forward.normalized();return a.position+forward*3
func valid_placement(pos:Vector3,yaw:float=0.) -> bool:
	if absf(pos.x)>94 or absf(pos.z)>71 or arena.wading(pos):return false
	for s in arena.sites:
		if s.distance_to(pos)<5:return false
	var query=PhysicsShapeQueryParameters3D.new();var shape=BoxShape3D.new();shape.size=Vector3(3.4,1.1,1.2);query.shape=shape;query.transform=Transform3D(Basis(Vector3.UP,yaw),pos+Vector3(0,.7,0));query.collision_mask=7
	return get_world_3d().direct_space_state.intersect_shape(query,1).is_empty()
func add_device(kind:String,pos:Vector3,id:int,hp:float) -> int:
	var did=next_device;next_device+=1
	devices[did]={"id":did,"kind":kind,"pos":pos,"yaw":actors[id].aim_yaw,"owner":id,"team":players[id].team,"hp":hp,"max_hp":hp,"level":1,"next_fire":clock+1,"target":0,"lock":0.,"last_hit":-100.,"disabled":0.,"expires":clock+180 if kind=="cover" and int(options.mode)!=4 else 1e12}
	return did
func use_skill(id:int):
	var p=players[id];var a=actors[id]
	if not options.skills or not options.classes or not p.alive or phase!="combat":return
	if clock<p.skill_ready:feedback(id,"","스킬 충전 중: "+str(int(ceil(p.skill_ready-clock)))+"초");return
	match int(p.role):
		0:p.dash=clock+.28;p.fire_ready=clock+.6;p.skill_ready=clock+18
		1:
			for qid in players:
				if players[qid].alive and enemies(p,players[qid]) and a.position.distance_to(actors[qid].position)<30:players[qid].mark=clock+3
			p.skill_ready=clock+30;announce(p.nick+" · 감지 파동")
		2:p.shield=clock+4;p.skill_ready=clock+30
		3:
			var existing=0
			for did in devices:
				if devices[did].owner==id and devices[did].kind=="turret":existing=did
			if existing and a.position.distance_to(devices[existing].pos)<5:
				var hit=ray(a.eye(),a.eye()+a.direction()*6,[a.get_rid()])
				if not hit.is_empty() and int(hit.collider.get_meta("device",0))==existing:
					var d=devices[existing]
					if d.level>=4:feedback(id,"","이미 최대 4단계입니다.");return
					d.level+=1;d.max_hp+=50;d.hp+=50;d.disabled=clock+2;p.skill_ready=clock+30;feedback(id,"heal","포탑 %d단계 업그레이드"%d.level);return
			var pos=placement(id)
			if not valid_placement(pos,a.aim_yaw):feedback(id,"","설치 공간이 부족하거나 제한 구역입니다.");return
			if existing:remove_device(existing)
			var did=add_device("turret",pos,id,200);devices[did].disabled=clock+2;p.skill_ready=clock+30
		4:
			fields.append({"kind":"slow","pos":placement(id)+a.direction()*5,"until":clock+8,"team":p.team,"owner":id});p.skill_ready=clock+25
		5:
			var tid=aim_player(id,15,true)
			if tid==0:tid=id
			players[tid].slow=0.;players[tid].mark=0.;players[tid].flash=0.;players[tid].cleanse=clock+4;p.skill_ready=clock+20
	feedback(id,"heal",["기동 스킬 사용","감지 파동 · 3초","방호 활성 · 4초","포탑 설치 완료 · 재충전 30초","둔화 구역 전개 · 8초","상태 정화 · 4초"][int(p.role)])
func use_gadget(id:int):
	var p=players[id];var a=actors[id]
	if not options.classes or not p.alive or phase!="combat" or p.gadget_count<=0 or clock<p.gadget_ready:return
	match int(p.role):
		0:
			if p.armor>=50:feedback(id,"","방어구가 이미 가득 찼습니다.");return
			p.armor=minf(50,p.armor+25)
		1:
			var tid=aim_player(id,160,false)
			if tid==0:feedback(id,"","표식할 상대를 조준하세요.");return
			players[tid].mark=clock+4
		2:
			if not a.input_state.crouch:feedback(id,"","앉아서 거치대를 사용하세요.");return
			p.mounted=clock+15
		3:
			var count=0
			for d in devices.values():
				if d.owner==id and d.kind=="cover":count+=1
			if count>=2:feedback(id,"","동시 엄폐물 한도는 2개입니다.");return
			var pos=placement(id)
			if not valid_placement(pos,a.aim_yaw):feedback(id,"","여기에는 엄폐물을 설치할 수 없습니다.");return
			add_device("cover",pos,id,[250,500,800][int(p.gadget)])
		4:
			var end=a.eye()+a.direction()*18;var hit=ray(a.eye(),end,[a.get_rid()],1|4)
			if not hit.is_empty():end=hit.position
			end.y=.3
			if p.gadget==1:
				if p.flash_count<=0:feedback(id,"","섬광탄 없음 · V로 연막탄 선택");return
				p.flash_count-=1
				for qid in players:
					if players[qid].alive and actors[qid].position.distance_to(end)<15 and clear_line(end+Vector3.UP,actors[qid].eye(),[actors[qid].get_rid()]):players[qid].flash=clock+2.5
				for d in devices.values():
					if d.pos.distance_to(end)<15:d.disabled=clock+3
				effect.rpc("flash",end,end,id)
			else:
				if p.smoke<=0:feedback(id,"","연막탄 없음 · V로 섬광탄 선택");return
				p.smoke-=1;fields.append({"kind":"smoke","pos":end,"until":clock+12,"team":p.team,"owner":id})
		5:
			var tid=aim_player(id,4,true)
			if tid==0:tid=id
			if players[tid].hp>=100:feedback(id,"","체력이 이미 가득 찼습니다.");return
			heal_target(id,tid,25)
	p.gadget_count-=1;p.gadget_ready=clock+.6
	feedback(id,"heal",["방어구 +25","상대 표식 · 4초","거치대 활성 · 15초 동안 정지 사격 정확도 증가","엄폐물 설치 완료","섬광탄 사용" if p.gadget==1 else "연막탄 전개 · 12초","응급 회복 +25"][int(p.role)])
func remove_device(did:int):
	devices.erase(did)
	if device_nodes.has(did):device_nodes[did].queue_free();device_nodes.erase(did)
func in_smoke_line(from:Vector3,to:Vector3) -> bool:
	for f in fields:
		if f.kind=="smoke" and Geometry3D.get_closest_point_to_segment(f.pos+Vector3.UP*2,from,to).distance_to(f.pos+Vector3.UP*2)<5:return true
	return false
func update_devices(dt:float):
	for did in devices.keys():
		var d=devices[did]
		if clock>d.expires:remove_device(did);continue
		if d.kind!="turret" or clock<d.disabled or phase!="combat":continue
		var origin=d.pos+Vector3.UP*1.75;var target=0;var best=25.+(d.level-1)*5
		for id in players:
			var p=players[id]
			if not p.alive or id==d.owner or (p.team==d.team and int(options.mode)!=1):continue
			var distance=origin.distance_to(actors[id].eye())
			if distance<best and not in_smoke_line(origin,actors[id].eye()) and clear_line(origin,actors[id].eye(),[actors[id].get_rid(),device_nodes[did].get_rid()] if device_nodes.has(did) else [actors[id].get_rid()]):best=distance;target=id
		if target!=int(d.target):d.target=target;d.lock=clock+.7
		if target!=0 and clock>=d.lock and clock>=d.next_fire:
			d.next_fire=clock+.25;var damage_amount=(20.+(d.level-1)*4)*.25
			if arena.wading(d.pos) and not arena.wading(actors[target].position):damage_amount*=.5
			damage(target,damage_amount,int(d.owner));effect.rpc("shot",origin,actors[target].eye(),0)
func update_fields(dt:float):
	fields=fields.filter(func(f):return f.until>clock)
	for f in fields:
		if f.kind=="slow":
			for id in players:
				if players[id].alive and players[id].team!=f.team and players[id].get("cleanse",0)<clock and actors[id].position.distance_to(f.pos)<5:players[id].slow=clock+.2
func update_pickups():
	drops=drops.filter(func(d):return d.until>clock and d.amount>0)
	for id in players:
		var p=players[id]
		if not p.alive:continue
		var wid=p.primary if p.slot==0 else p.secondary;var w=C.get_weapon(wid)
		if w.kind!="gun":continue
		for supply in arena.supplies:
			if supply.ready<=clock and actors[id].position.distance_to(supply.pos)<1.8 and int(p.reserve[wid])<int(w.reserve):
				p.reserve[wid]=mini(int(w.reserve),int(p.reserve[wid])+R.ammo_pickup(int(w.reserve)));supply.ready=clock+30;feedback(id,"","탄약 보급 +25%")
func interact(id:int,dt:float):
	var p=players[id];var a=actors[id]
	for drop in drops:
		if drop.amount>0 and a.position.distance_to(drop.pos)<2.5:
			var wid=p.primary if p.slot==0 else p.secondary;var w=C.get_weapon(wid)
			if w.kind=="gun":
				var take=mini(int(w.reserve)-int(p.reserve[wid]),mini(R.ammo_pickup(int(w.reserve)),int(drop.amount)))
				p.reserve[wid]+=take;drop.amount-=take
	if int(options.mode)!=4 or phase!="combat":return
	var attackers=(round_no-1)/3%2
	if not bomb.planted and p.team==attackers:
		for i in range(arena.sites.size()):
			if a.position.distance_to(arena.sites[i])<5:
				if bomb.actor!=id:bomb.actor=id;bomb.progress=0
				bomb.last_touch=clock;bomb.progress+=dt
				if bomb.progress>=3:
					bomb.planted=true;bomb.site=i;bomb.position=arena.sites[i];bomb.time=40.;bomb.actor=0;bomb.progress=0;p.objective+=3
					for q in players.values():
						if q.team==p.team:q.cash=mini(8000,q.cash+300)
					announce("장치 설치 완료 · 40초 내 해체")
	elif bomb.planted and p.team!=attackers and a.position.distance_to(bomb.position)<5:
		if bomb.actor!=id:bomb.actor=id;bomb.progress=0
		bomb.last_touch=clock;bomb.progress+=dt
		if bomb.progress>=5:p.objective+=5;finish_round(p.team,"장치 해체")
func check_objectives(dt:float):
	match int(options.mode):
		0:
			if maxi(scores[0],scores[1])>=int(options.target) or remaining<=0:finish_match("무승부" if scores[0]==scores[1] else ("BLUE 승리" if scores[0]>scores[1] else "ORANGE 승리"))
		1:
			var best=0;var winner=""
			for p in players.values():
				if p.kills>=best:best=p.kills;winner=p.nick
			if best>=int(options.target) or remaining<=0:finish_match(winner+" 개인전 승리")
		2:
			var alive=[0,0]
			for p in players.values():
				if p.alive or (p.can_respawn if options.shared_lives else p.lives>0):alive[p.team]+=1
			if players.size()>1 and (alive[0]==0 or alive[1]==0):finish_match("BLUE 승리" if alive[0]>0 else "ORANGE 승리")
			elif remaining<=0:finish_match("시간 종료")
		3:
			for i in range(3):
				var counts=[0,0]
				for id in players:
					if players[id].alive and actors[id].position.distance_to(arena.zones[i])<7:counts[players[id].team]+=1
				if (counts[0]>0)!=(counts[1]>0):
					var team=0 if counts[0]>0 else 1;zone_capture[i]=clampf(zone_capture[i]+dt*(1 if team==0 else -1),-5,5)
					if absf(zone_capture[i])>=5 and zone_owner[i]!=team:
						zone_owner[i]=team
						for id in players:
							if players[id].team==team and actors[id].position.distance_to(arena.zones[i])<7:players[id].objective+=2
				if zone_owner[i]>=0:scores[zone_owner[i]]+=dt*.4
			if maxf(scores[0],scores[1])>=int(options.target) or remaining<=0:finish_match("BLUE 승리" if scores[0]>scores[1] else "ORANGE 승리")
		4:
			if bomb.actor!=0 and (not players.has(bomb.actor) or not players[bomb.actor].alive or not actors[bomb.actor].input_state.use or clock-bomb.get("last_touch",0)>.1):bomb.actor=0;bomb.progress=0
			var attackers=(round_no-1)/3%2;var alive=[0,0]
			for p in players.values():
				if p.alive:alive[p.team]+=1
			if bomb.planted:
				bomb.time-=dt
				if bomb.time<=0:finish_round(attackers,"장치 작동");return
				if alive[1-attackers]==0 and team_count(1-attackers)>0:finish_round(attackers,"수비팀 전원 탈락");return
			else:
				if remaining<=0:finish_round(1-attackers,"설치 시간 종료");return
				if alive[attackers]==0 and team_count(attackers)>0:finish_round(1-attackers,"공격팀 전원 탈락");return
				if alive[1-attackers]==0 and team_count(1-attackers)>0:finish_round(attackers,"수비팀 전원 탈락")
func start_match():
	if not server:return
	for p in players.values():
		p.kills=0;p.deaths=0;p.assists=0;p.objective=0;p.healed=0.;p.played=0.;p.lives=int(options.lives);p.cash=800;p.skill_ready=0.;p.spectator=false;p.can_respawn=true
		if int(options.mode)==4:p.owned_primary=false;p.armor_max=0;p.primary="pistol"
	enforce_medics();tickets=[int(options.lives),int(options.lives)];scores=[0,0];losses=[0,0];round_no=0;zone_owner=[-1,-1,-1];zone_capture=[0.,0.,0.]
	if int(options.mode)==4:begin_round()
	else:
		phase="combat";remaining=float(options.minutes)*60
		for id in players:spawn(id)
	ui.show_hud();broadcast_state(true)
func enforce_medics():
	for team in [0,1]:
		var n=0
		for p in players.values():
			if p.team==team and p.role==5:
				n+=1
				if n>R.medic_cap(team_count(team)):p.role=0;p.primary="a1";p.secondary="pistol";equip_ammo(p)
func begin_round():
	round_no+=1;bot_attack_site=randi()%2;phase="buy";remaining=20.;bomb={"planted":false,"site":-1,"time":0.,"actor":0,"progress":0.,"position":Vector3.ZERO}
	for did in devices.keys():remove_device(did)
	fields.clear();drops.clear()
	if round_no>1 and (round_no-1)%3==0:
		losses=[0,0]
		for p in players.values():p.cash=800;p.owned_primary=false;p.armor_max=0;p.primary="pistol"
	for id in players:
		var p=players[id];p.skill_ready=0.;p.round_bonus=0
		if not p.get("owned_primary",false):p.primary="pistol";p.slot=0;p.armor_max=0
		spawn(id)
	announce("구매 시간 · B 장비 선택")
func finish_round(winner:int,reason:String):
	if phase!="combat":return
	scores[winner]+=1;losses[winner]=maxi(0,losses[winner]-1);losses[1-winner]+=1
	for p in players.values():p.cash=mini(8000,p.cash+(3500 if p.team==winner else R.loss_reward(losses[p.team])))
	announce(reason+" · "+("BLUE" if winner==0 else "ORANGE")+" 승리")
	if scores[winner]>=int(options.rounds):finish_match("BLUE 승리" if winner==0 else "ORANGE 승리")
	else:phase="round_end";remaining=7
func finish_match(message:String):
	phase="result";remaining=12;announce(message+" · 다음 경기까지 12초")
func next_match():
	for did in devices.keys():remove_device(did)
	fields.clear();drops.clear()
	if int(options.next_teams)==2:
		var split=R.balanced_ids(players)
		for t in [0,1]:
			for id in split[t]:players[id].team=t;actors[id].set_team(t)
	elif int(options.next_teams)==1:
		var ids=players.keys();ids.shuffle()
		for i in range(ids.size()):players[ids[i]].team=i%2;actors[ids[i]].set_team(i%2)
	start_match()
func broadcast_state(force:bool):
	var list=[]
	for id in players:
		var p=players[id];var a=actors[id];var d=p.duplicate();d.erase("token");d.erase("contributors");d.pos=a.position;d.yaw=a.aim_yaw;d.pitch=a.aim_pitch;d.crouch=a.input_state.crouch;d.velocity=a.velocity;d.grounded=a.is_on_floor();d.sprint=a.last_sprint;d.ads=a.input_state.ads;d.spread_angle=a.spread_angle;list.append(d)
	var supplies=[]
	for s in arena.supplies:supplies.append(s.ready)
	var state={"clock":clock,"phase":phase,"remaining":remaining,"scores":scores,"tickets":tickets,"round":round_no,"players":list,"devices":devices,"fields":fields,"drops":drops,"zones":zone_owner,"supplies":supplies,"bomb":bomb}
	if multiplayer.get_peers().size()>0:
		var packed=var_to_bytes(state).compress(FileAccess.COMPRESSION_DEFLATE)
		snapshot_sequence+=1
		var parts=int(ceil(packed.size()/1000.0))
		for peer in multiplayer.get_peers():
			if not players.has(peer):continue
			var link=multiplayer.multiplayer_peer.get_peer(peer)
			if link.get_state()!=ENetPacketPeer.STATE_CONNECTED:continue
			if force:full_state.rpc_id(peer,state)
			else:
				for i in range(parts):snapshot_chunk.rpc_id(peer,snapshot_sequence,i,parts,packed.slice(i*1000,mini(packed.size(),(i+1)*1000)))
@rpc("authority","call_remote","unreliable_ordered",1)
func snapshot_chunk(seq:int,index:int,count:int,bytes:PackedByteArray):
	if seq<received_sequence or count<1 or count>128 or index<0 or index>=count or bytes.size()>1000:return
	if seq>received_sequence:received_sequence=seq;received_parts={};expected_parts=count
	if count!=expected_parts:return
	received_parts[index]=bytes
	if received_parts.size()==count:
		var joined=PackedByteArray()
		for i in range(count):joined.append_array(received_parts[i])
		var unpacked=joined.decompress_dynamic(512000,FileAccess.COMPRESSION_DEFLATE)
		var state=bytes_to_var(unpacked)
		if state is Dictionary:receive_state(state)
		received_parts.clear()
@rpc("authority","call_remote","reliable",0)
func full_state(s:Dictionary):receive_state(s)
@rpc("authority","call_remote","unreliable_ordered",1)
func snapshot(s:Dictionary):receive_state(s)
func receive_state(s:Dictionary):
	if server or arena==null:return
	clock=s.clock;var old_phase=phase;phase=s.phase;remaining=s.remaining;scores=s.scores;tickets=s.tickets;round_no=s.round;bomb=s.bomb;zone_owner=s.zones;fields=s.fields;drops=s.drops
	var present=[]
	for p in s.players:
		var id=int(p.id);var fresh=not players.has(id) or (not players[id].alive and p.alive);present.append(id);players[id]=p;ensure_actor(id);var a=actors[id];a.set_team(int(p.team));a.collision_layer=2 if p.alive else 0
		if id==local_id:
			if fresh:a.position=p.pos;a.velocity=Vector3.ZERO;a.reset_view(p.yaw)
			if a.position.distance_to(p.pos)>2 or not p.alive:a.position=p.pos
			else:a.position=a.position.lerp(p.pos,.25)
		else:a.target_pos=p.pos;a.aim_yaw=p.yaw;a.aim_pitch=p.pitch;a.input_state.crouch=p.crouch;a.net_velocity=p.get("velocity",Vector3.ZERO);a.net_grounded=p.get("grounded",true);a.net_sprint=p.get("sprint",false);a.remote_ads=p.get("ads",false)
	for id in players.keys():
		if not present.has(id):players.erase(id);actors[id].queue_free();actors.erase(id)
	devices=s.devices
	for i in range(mini(s.supplies.size(),arena.supplies.size())):arena.supplies[i].ready=s.supplies[i]
	if old_phase!=phase:
		if phase=="lobby":ui.lobby()
		elif phase in ["buy","combat"]:ui.show_hud();Input.mouse_mode=Input.MOUSE_MODE_CAPTURED
func update_world_visuals(dt:float):
	if arena==null:return
	for did in devices:
		var d=devices[did]
		if not device_nodes.has(did):
			var b=StaticBody3D.new();b.collision_layer=4;b.collision_mask=0;b.set_meta("device",did);add_child(b);device_nodes[did]=b
			var size=Vector3(3.4,1.25,.65) if d.kind=="cover" else Vector3(.8,1.9,.8)
			arena.box(Vector3(0,size.y/2,0),size,Color("365d73") if d.team==0 else Color("986343"),false,b)
			var c=CollisionShape3D.new();var sh=BoxShape3D.new();sh.size=size;c.shape=sh;c.position.y=size.y/2;b.add_child(c)
			if d.kind=="turret":arena.box(Vector3(0,1.7,-.5),Vector3(.22,.2,1.2),Color("233749"),false,b)
			var label=arena.text3d("",Vector3(0,2.4,0),Color.WHITE,40,b);label.name="Label"
		var node=device_nodes[did];node.position=d.pos;node.rotation.y=d.yaw;node.get_node("Label").text=("T"+str(d.level) if d.kind=="turret" else "COVER")+" · "+str(int(d.hp))
	for did in device_nodes.keys():
		if not devices.has(did):device_nodes[did].queue_free();device_nodes.erase(did)
	for s in arena.supplies:
		s.node.visible=s.ready<=clock
	world_timer-=dt
	if world_timer<=0:
		world_timer=.3
		for n in smoke_visuals:n.queue_free()
		smoke_visuals.clear()
		for f in fields:
			var n=MeshInstance3D.new();var m=SphereMesh.new();m.radius=5;m.height=6 if f.kind=="smoke" else .2;m.radial_segments=12;m.rings=5;n.mesh=m;n.position=f.pos+Vector3.UP*(2 if f.kind=="smoke" else .1);n.material_override=arena.mat(Color(.55,.64,.67,.92) if f.kind=="smoke" else Color(.7,.42,.2,.4));add_child(n);smoke_visuals.append(n)
	var live_drops={}
	for d in drops:
		var key=str(d.until)+str(d.pos)+d.weapon;live_drops[key]=true
		if not drop_nodes.has(key):
			var n=WeaponVisual.new();add_child(n);n.build(Catalog.get_weapon(d.weapon),false);n.position=d.pos;n.rotation=Vector3(0,0,PI/2);drop_nodes[key]=n
	for key in drop_nodes.keys():
		if not live_drops.has(key):drop_nodes[key].queue_free();drop_nodes.erase(key)
func feedback(id:int,sound:String,message:String):
	if id<0:return
	if id==local_id:personal(sound,message)
	else:personal.rpc_id(id,sound,message)
@rpc("authority","call_remote","reliable",0)
func personal(sound:String,message:String):
	if not sound.is_empty():play_sound(sound,Vector3.ZERO,false)
	ui.notice(message)
	if sound in ["hit","confirm"]:ui.hit_until=Time.get_ticks_msec()+180
func announce(message:String):
	announcement.rpc(message)
@rpc("authority","call_local","reliable",0)
func announcement(message:String):ui.notice(message)
@rpc("authority","call_local","unreliable",2)
func effect(kind:String,from:Vector3,to:Vector3,owner:int):
	if dedicated:return
	var sound="shot" if kind=="shot" else "heal" if kind=="heal" else "confirm"
	if kind=="shot" and players.has(owner) and current_weapon(players[owner]).role in [1,2,3]:sound="heavy"
	play_sound(sound,from,true)
	if kind in ["shot","heal"] and arena:
		if owner==local_id and actors.has(owner) and players[owner].alive and players[owner].slot<2:from=actors[owner].visual_muzzle()
		var length=from.distance_to(to)
		if length>.01:
			var n=arena.box((from+to)*.5,Vector3(.025,.025,length),Color("ffe2a0") if kind=="shot" else Color("63ecc6"),false)
			n.look_at(to);get_tree().create_timer(.045 if kind=="shot" else .09).timeout.connect(n.queue_free)
	if actors.has(owner) and kind=="shot":actors[owner].recoil=1.
func play_sound(kind:String,pos:Vector3,spatial:bool):
	if not sounds.has(kind) or dedicated:return
	var n:Node
	if spatial:
		n=AudioStreamPlayer3D.new();n.max_distance=100;n.unit_size=8;add_child(n);n.position=pos;n.volume_db=-8
	else:n=AudioStreamPlayer.new();add_child(n);n.volume_db=-8
	n.stream=sounds[kind];n.pitch_scale=randf_range(.95,1.05);n.finished.connect(n.queue_free);n.play()
func local_step(pos:Vector3):
	play_sound("step",Vector3.ZERO,false)
	if server:footstep.rpc(pos,local_id)
	else:step_request.rpc_id(1)
@rpc("any_peer","call_remote","unreliable",2)
func step_request():
	var id=multiplayer.get_remote_sender_id()
	if server and players.has(id) and players[id].alive and actors[id].velocity.length()>1 and rate_limit(id,"step",.25):footstep.rpc(actors[id].position,id)
@rpc("authority","call_remote","unreliable",2)
func footstep(pos:Vector3,id:int):
	if id!=local_id:play_sound("step",pos,true)

@rpc("authority","call_local","unreliable",2)
func impact(pos:Vector3,push:Vector3,eliminated:bool,team:int,role:int=0):
	if dedicated or arena==null:return
	if eliminated:
		var model=Node3D.new();add_child(model);model.position=pos
		var body=CharacterVisual.new();model.add_child(body);body.build(role,team);body.animator.play("death");body.animator.advance(0.)
		var pose=create_tween();pose.tween_method(func(t):
			if is_instance_valid(body):body.animator.seek(t,true),0.,.65,.65)
		var end=pos+push*1.2;end.y=.3
		var obstruction=ray(pos+Vector3.UP*.7,end+Vector3.UP*.7,[],1|4)
		if not obstruction.is_empty():end=pos
		model.rotation.y=atan2(push.x,push.z)
		var t=create_tween().set_parallel(true);t.tween_property(model,"position",end,.35).set_trans(Tween.TRANS_QUAD).set_ease(Tween.EASE_OUT)
		get_tree().create_timer(5).timeout.connect(func():
			if is_instance_valid(model):
				var fade=create_tween();fade.tween_property(model,"scale",Vector3.ZERO,1.);fade.tween_callback(model.queue_free))
	else:
		for i in range(4):
			var n=arena.box(pos,Vector3(.045,.045,.045),Color("c64b52"),false)
			var t=create_tween().set_parallel(true);t.tween_property(n,"position",pos+push*.25+Vector3(randf_range(-.3,.3),randf_range(-.2,.3),randf_range(-.3,.3)),.18);t.tween_property(n,"scale",Vector3.ZERO,.22);t.chain().tween_callback(n.queue_free)

func cycle_spectator():
	if not players.has(local_id) or players[local_id].alive:return
	var ids=[]
	for id in players:
		if id!=local_id and players[id].alive and (int(options.mode)==1 or players[id].team==players[local_id].team):ids.append(id)
	if ids.is_empty():spectator_target=0;return
	spectator_target=ids[(ids.find(spectator_target)+1)%ids.size()]
func update_spectator():
	if dedicated or not players.has(local_id) or not is_instance_valid(spectator_camera):return
	var local_actor=actors[local_id]
	if players[local_id].alive:
		local_actor.camera.current=true;return
	if not players.has(spectator_target) or not players[spectator_target].alive:cycle_spectator()
	var focus=actors[spectator_target].eye() if actors.has(spectator_target) else local_actor.eye()
	var facing=Basis(Vector3.UP,spectator_yaw)*Basis(Vector3.RIGHT,spectator_pitch)*Vector3.FORWARD
	var desired=focus-facing*3+Vector3.UP*.5
	var obstruction=ray(focus,desired,[],1|4)
	if not obstruction.is_empty():desired=obstruction.position+obstruction.normal*.2
	spectator_camera.global_position=desired;spectator_camera.rotation=Vector3(spectator_pitch,spectator_yaw,0);spectator_camera.current=true
@rpc("authority","call_local","unreliable",2)
func hit_reaction(id:int,push:Vector3):
	if actors.has(id):actors[id].react_hit(push)

@rpc("authority","call_local","unreliable",2)
func wall_mark(pos:Vector3,normal:Vector3):
	if dedicated or arena==null:return
	var mark=MeshInstance3D.new();var mesh=PlaneMesh.new();mesh.size=Vector2(.085,.085);mark.mesh=mesh
	var material=StandardMaterial3D.new();material.albedo_color=Color("3a4040");material.shading_mode=BaseMaterial3D.SHADING_MODE_UNSHADED;mark.material_override=material
	add_child(mark);mark.position=pos+normal*.009;mark.quaternion=Quaternion(Vector3.UP,normal.normalized());wall_marks.append(mark)
	if wall_marks.size()>100:
		var first=wall_marks.pop_front()
		if is_instance_valid(first):first.queue_free()
