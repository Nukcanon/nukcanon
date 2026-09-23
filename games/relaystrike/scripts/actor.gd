extends CharacterBody3D
class_name Actor
const Weapon=preload("res://scripts/weapon_visual.gd")
var pid=0
var game:Node
var camera:Camera3D
var body_mesh:Node3D
var head_mesh:Node3D
var limbs:Node3D
var tag:Label3D
var shape:CollisionShape3D
var gun:Node3D
var item_model:Node3D
var view_weapon:WeaponVisual
var world_weapon:WeaponVisual
var render_root:Node3D
var legs=[]
var arms=[]
var team_material:StandardMaterial3D
var input_state={"x":0.0,"z":0.0,"yaw":0.0,"pitch":0.0,"ads":false,"sprint":false,"crouch":false,"fire":false,"alt":false,"use":false,"jump":false,"trigger_seq":0}
var aim_yaw=0.0
var aim_pitch=0.0
var sprint_release=0.0
var last_sprint=false
var target_pos=Vector3.ZERO
var local=false
var bob=0.0
var step_clock=0.0
var grounded_jump=false
var shown_weapon=""
var recoil=0.0
var hit_recoil=0.0
var hit_side=0.0
var old_visual_pos=Vector3.ZERO
func _ready():
	collision_layer=2;collision_mask=1|4
	shape=CollisionShape3D.new();var cap=CapsuleShape3D.new();cap.radius=.34;cap.height=1.8;shape.shape=cap;shape.position.y=.9;add_child(shape)
	render_root=Node3D.new();add_child(render_root)
	body_mesh=game.arena.box(Vector3(0,1.09,0),Vector3(.48,.58,.29),Color("359dc4"),false,render_root)
	team_material=StandardMaterial3D.new();team_material.albedo_color=Color("359dc4");body_mesh.get_child(0).material_override=team_material
	game.arena.box(Vector3(0,1.09,-.17),Vector3(.37,.42,.09),Color("273f4c"),false,render_root)
	game.arena.box(Vector3(0,.8,0),Vector3(.46,.12,.32),Color("1d303d"),false,render_root)
	head_mesh=game.arena.box(Vector3(0,1.58,0),Vector3(.38,.35,.37),Color("435e70"),false,render_root)
	game.arena.box(Vector3(0,.005,-.194),Vector3(.3,.115,.022),Color("6babb6"),false,head_mesh)
	limbs=Node3D.new();render_root.add_child(limbs)
	for x in [-.145,.145]:
		var leg=Node3D.new();leg.position=Vector3(x,.76,0);limbs.add_child(leg);legs.append(leg)
		game.arena.box(Vector3(0,-.22,0),Vector3(.19,.4,.22),Color("344c59"),false,leg)
		game.arena.box(Vector3(0,-.57,.015),Vector3(.18,.34,.22),Color("263c47"),false,leg)
		game.arena.box(Vector3(0,-.7,-.055),Vector3(.21,.13,.34),Color("182c37"),false,leg)
		var arm=Node3D.new();arm.position=Vector3(x*2,1.3,0);limbs.add_child(arm);arms.append(arm)
		game.arena.box(Vector3(0,-.16,-.06),Vector3(.17,.3,.2),Color("607e8e"),false,arm)
		game.arena.box(Vector3(0,-.25,-.24),Vector3(.14,.15,.29),Color("354b58"),false,arm)
	tag=Label3D.new();tag.position.y=2.;tag.font_size=24;tag.pixel_size=.004;tag.billboard=BaseMaterial3D.BILLBOARD_ENABLED;add_child(tag)
	camera=Camera3D.new();camera.position.y=1.62;camera.fov=82;camera.far=350;camera.near=.025;add_child(camera)
	gun=Node3D.new();camera.add_child(gun)
	item_model=Node3D.new();gun.add_child(item_model)
	game.arena.box(Vector3(0,-.035,-.14),Vector3(.14,.18,.18),Color("506d77"),false,item_model)
	game.arena.box(Vector3(0,.06,-.14),Vector3(.095,.035,.13),Color("70d5bf"),false,item_model)
	game.arena.box(Vector3(.04,-.14,.04),Vector3(.1,.1,.25),Color("c4ab8a"),false,item_model)
	game.arena.box(Vector3(.015,-.075,-.03),Vector3(.12,.09,.12),Color("35454a"),false,item_model)
func build_gun(wid:String):
	if is_instance_valid(view_weapon):view_weapon.queue_free()
	if is_instance_valid(world_weapon):world_weapon.queue_free()
	var w=Catalog.get_weapon(wid)
	view_weapon=Weapon.new();gun.add_child(view_weapon);view_weapon.build(w);view_weapon.scale=Vector3.ONE*.85
	world_weapon=Weapon.new();render_root.add_child(world_weapon);world_weapon.build(w,false);world_weapon.position=Vector3(.16,1.17,-.34);world_weapon.scale=Vector3.ONE*.8
func set_local(on:bool):
	local=on;camera.current=on;render_root.visible=not on;tag.visible=not on;gun.visible=on
func set_team(t:int):team_material.albedo_color=Color("359dc4") if t==0 else Color("e18b56")
func reset_view(yaw:float):
	camera.top_level=false;camera.transform=Transform3D(Basis.IDENTITY,Vector3(0,1.62,0))
	input_state.yaw=yaw;input_state.pitch=0.;input_state.crouch=false;input_state.sprint=false;input_state.fire=false;input_state.ads=false;input_state.x=0.;input_state.z=0.;input_state.jump=false
	aim_yaw=yaw;aim_pitch=0.;rotation=Vector3(0,yaw,0);last_sprint=false;sprint_release=0.;old_visual_pos=global_position
	if local:camera.current=true
func eye() -> Vector3:return global_position+Vector3(0,1.05 if input_state.crouch else 1.62,0)
func direction() -> Vector3:return Basis(Vector3.UP,aim_yaw)*Basis(Vector3.RIGHT,aim_pitch)*Vector3.FORWARD
func muzzle_world() -> Vector3:
	var desired=eye()+Basis(Vector3.UP,aim_yaw)*Vector3(.2,-.23,0)+direction()*.55
	var hit=game.ray(eye(),desired,[get_rid()],1|4)
	return hit.position+hit.normal*.03 if not hit.is_empty() else desired
func visual_muzzle() -> Vector3:
	return view_weapon.muzzle.global_position if is_instance_valid(view_weapon) and view_weapon.visible else muzzle_world()
func react_hit(push:Vector3):
	hit_recoil=1.;hit_side=clampf(global_basis.x.dot(push),-1,1)
func simulate(dt:float,now:float,can_move:bool):
	aim_yaw=float(input_state.yaw);aim_pitch=clampf(float(input_state.pitch),-1.45,1.45);rotation.y=aim_yaw
	var crouch=bool(input_state.crouch)
	if not crouch and shape.shape.height<1.8:
		var q=PhysicsRayQueryParameters3D.create(global_position+Vector3.UP,global_position+Vector3.UP*1.85,1|4);q.exclude=[get_rid()]
		crouch=not get_world_3d().direct_space_state.intersect_ray(q).is_empty()
	shape.shape.height=1.15 if crouch else 1.8;shape.position.y=shape.shape.height*.5
	
	var sprint=bool(input_state.sprint) and not crouch and not input_state.ads and not input_state.fire
	if last_sprint and not sprint:sprint_release=now+.5
	last_sprint=sprint
	var speed=11.2 if sprint else 3.1 if crouch else 4.4 if input_state.ads else 7.4
	if game.arena and game.arena.wading(global_position):speed*=.72
	if game.players.has(pid):
		var p=game.players[pid]
		if p.get("slow",0)>now:speed*=.6
		if p.get("shield",0)>now:speed*=.6
		if p.get("dash",0)>now:speed*=2
		if Catalog.get_weapon(p.primary).role==2:speed*=.9
	var wish=Vector3(float(input_state.x),0,float(input_state.z)).limit_length(1)
	wish=Basis(Vector3.UP,aim_yaw)*wish
	velocity.x=wish.x*speed if can_move else 0;velocity.z=wish.z*speed if can_move else 0
	if not is_on_floor():velocity.y-=22*dt
	elif input_state.jump and not grounded_jump and can_move:velocity.y=6
	grounded_jump=bool(input_state.jump)
	move_and_slide()
	global_position.x=clampf(global_position.x,-98,98);global_position.z=clampf(global_position.z,-88,88)
	if global_position.y< -4:global_position.y=.2;velocity.y=0
func visual(dt:float,p:Dictionary,now:float):
	visible=p.alive
	var wid=p.primary if p.slot==0 else p.secondary
	if shown_weapon!=wid:shown_weapon=wid;build_gun(wid)
	var w=Catalog.get_weapon(wid)
	recoil=move_toward(recoil,0,dt*7);hit_recoil=move_toward(hit_recoil,0,dt*4)
	team_material.emission_enabled=hit_recoil>.05;team_material.emission=Color("ffd990");team_material.emission_energy_multiplier=hit_recoil*.7
	var speed=Vector2(velocity.x,velocity.z).length() if local or game.server else Vector2(global_position.x-old_visual_pos.x,global_position.z-old_visual_pos.z).length()/maxf(dt,.001)
	old_visual_pos=global_position
	bob+=dt*(13 if last_sprint else 9)
	var stride=minf(1,speed/5.7)
	for i in range(legs.size()):legs[i].rotation.x=sin(bob+i*PI)*.55*stride
	for i in range(arms.size()):arms[i].rotation.x=sin(bob+i*PI)*.08*stride-hit_recoil*.2
	render_root.position.y=-.5 if input_state.crouch else 0.
	render_root.rotation=Vector3(hit_recoil*-.12,0,hit_side*hit_recoil*.13)
	if is_instance_valid(world_weapon):
		world_weapon.rotation.x=aim_pitch-recoil*.07;world_weapon.visible=p.slot<2
		world_weapon.animate_reload(clampf((now-float(p.get("reload_started",0)))/maxf(.01,float(w.reload)),0,1) if p.reload>now else -1.,recoil)
	if not local:
		if not game.server:global_position=global_position.lerp(target_pos,minf(1,dt*14));rotation.y=lerp_angle(rotation.y,aim_yaw,minf(1,dt*15))
		shape.shape.height=1.15 if input_state.crouch else 1.8;shape.position.y=shape.shape.height*.5
		tag.visible=game.players.has(game.local_id) and (p.team==game.players[game.local_id].team or p.mark>now)
		tag.modulate=Color("ffd086") if p.mark>now else Color.WHITE;tag.text=p.nick
		return
	# Never reuse this camera for spectating. Its local X/Z stay exactly zero.
	camera.position.x=0.;camera.position.z=0.;camera.rotation=Vector3(aim_pitch,0,0);camera.position.y=lerpf(camera.position.y,1.05 if input_state.crouch else 1.62,minf(1,dt*14))
	var reloading=p.reload>now
	var ads=input_state.ads and p.slot<2 and not reloading
	var scoped=ads and float(w.zoom)<=38
	camera.fov=lerpf(camera.fov,float(w.zoom) if ads else 88. if last_sprint else 82.,minf(1,dt*12))
	var base=Vector3(0,-.16,-.52) if ads else Vector3(.24,-.24,-.46)
	if reloading:base+=Vector3(.055,-.045,.07)
	if last_sprint:base+=Vector3(.045,-.1,.04)
	var swap=clampf((float(p.get("switch_until",0))-now)/.32,0,1)
	base.y-=swap*.4
	if speed>1 and not ads:base+=Vector3(cos(bob*.5)*.009,sin(bob)*.006,0)
	base.z+=recoil*.045
	gun.position=gun.position.lerp(base,minf(1,dt*18))
	gun.rotation=Vector3(recoil*.07,-.12 if last_sprint else 0.,-(.22+int(w.get("model_index",0))%4*.025) if reloading else -.12*swap)
	view_weapon.visible=p.slot<2 and not scoped;item_model.visible=p.slot>=2
	var progress=clampf((now-float(p.get("reload_started",0)))/maxf(.01,float(w.reload)),0,1) if reloading else -1.
	view_weapon.animate_reload(progress,recoil)
	if speed>1 and is_on_floor():
		step_clock-=dt
		if step_clock<=0:step_clock=.32 if last_sprint else .48;game.local_step(global_position)
