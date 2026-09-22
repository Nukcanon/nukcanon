extends CanvasLayer
var game:Node
var root:Control
var panel:PanelContainer
var stack:VBoxContainer
var hud:Control
var status:Label
var stats:Label
var health:Label
var ammo:Label
var banner:Label
var crosshair:Label
var info:Label
var score:Label
var score2:Label
var flash_overlay:ColorRect
var roster:Label
var notice_label:Label
var notice_until=0
var hit_until=0
var room_list:VBoxContainer
var gear_primary:OptionButton
var gear_class:OptionButton
var gear_armor:OptionButton
var gear_gadget:OptionButton
var gear_repair:CheckBox
var weapon_ids=[]
var theme:Theme
var perf_clock=0.0
func _ready():
	root=Control.new();root.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT);root.mouse_filter=Control.MOUSE_FILTER_IGNORE;add_child(root)
	theme=Theme.new();theme.default_font_size=18
	if ResourceLoader.exists("res://assets/Korean.ttf"):
		var font=FontVariation.new();font.base_font=load("res://assets/Korean.ttf");font.variation_opentype={"wght":550};font.variation_embolden=.35;theme.default_font=font
	var style=StyleBoxFlat.new();style.bg_color=Color("142435");style.border_color=Color("34536a");style.set_border_width_all(1);style.set_corner_radius_all(9);style.content_margin_left=18;style.content_margin_right=18;style.content_margin_top=12;style.content_margin_bottom=12
	theme.set_stylebox("panel","PanelContainer",style)
	var btn=style.duplicate();btn.bg_color=Color("24435a");theme.set_stylebox("normal","Button",btn)
	var hov=btn.duplicate();hov.bg_color=Color("326680");theme.set_stylebox("hover","Button",hov)
	var pressed=btn.duplicate();pressed.bg_color=Color("227f82");theme.set_stylebox("pressed","Button",pressed)
	theme.set_color("font_color","Label",Color("e8f2f3"));theme.set_color("font_color","Button",Color("e8f2f3"));root.theme=theme
func clear_panel():
	if panel:panel.queue_free();panel=null
func make_panel(title:String,width=780):
	clear_panel();Input.mouse_mode=Input.MOUSE_MODE_VISIBLE
	panel=PanelContainer.new();panel.set_anchors_and_offsets_preset(Control.PRESET_CENTER);panel.position=Vector2(-width/2.,-300);panel.custom_minimum_size=Vector2(width,0);root.add_child(panel)
	var scroll=ScrollContainer.new();scroll.custom_minimum_size=Vector2(width,590);panel.add_child(scroll)
	stack=VBoxContainer.new();stack.size_flags_horizontal=Control.SIZE_EXPAND_FILL;stack.add_theme_constant_override("separation",12);scroll.add_child(stack)
	var eyebrow=Label.new();eyebrow.text="NUKCANON  /  INTERNAL N CRUSH";eyebrow.add_theme_color_override("font_color",Color("5ce1c3"));eyebrow.add_theme_font_size_override("font_size",14);stack.add_child(eyebrow)
	label(title,30)
func label(text:String,size=18,parent:Node=null) -> Label:
	var l=Label.new();l.text=text;l.add_theme_font_size_override("font_size",size);l.autowrap_mode=TextServer.AUTOWRAP_WORD_SMART;(parent if parent else stack).add_child(l);return l
func button(text:String,callback:Callable,parent:Node=null) -> Button:
	var b=Button.new();b.text=text;b.custom_minimum_size.y=42;b.pressed.connect(callback);(parent if parent else stack).add_child(b);return b
func option(title:String,items:Array,selected:int,callback:Callable=Callable(),parent:Node=null) -> OptionButton:
	var row=HBoxContainer.new();(parent if parent else stack).add_child(row);var l=Label.new();l.text=title;l.custom_minimum_size.x=200;row.add_child(l)
	var b=OptionButton.new();b.size_flags_horizontal=Control.SIZE_EXPAND_FILL
	for s in items:b.add_item(str(s))
	b.select(selected);row.add_child(b)
	if callback.is_valid():b.item_selected.connect(callback)
	return b
func check(title:String,value:bool,callback:Callable) -> CheckBox:
	var b=CheckBox.new();b.text=title;b.button_pressed=value;b.toggled.connect(callback);stack.add_child(b);return b
func edit(title:String,value:String,callback:Callable,secret=false) -> LineEdit:
	var row=HBoxContainer.new();stack.add_child(row);var l=Label.new();l.text=title;l.custom_minimum_size.x=200;row.add_child(l);var e=LineEdit.new();e.text=value;e.secret=secret;e.size_flags_horizontal=Control.SIZE_EXPAND_FILL;e.text_changed.connect(callback);row.add_child(e);return e
func menu():
	if not root:return
	if hud:hud.queue_free();hud=null
	make_panel("함께 지키고, 함께 돌파하세요.")
	label("오프라인 내부망 FPS · 최대 32명 · 개발 버전 0.1.0",16)
	edit("플레이어 이름",game.profile.nick,func(t):game.profile.nick=t.left(20);game.save_profile())
	button("방 만들기",host_settings)
	button("내부망 방 찾기 / IP로 접속",join_menu)
	button("혼자 연습 · 봇 7명",func():game.options=Rules.default_options();game.options.bots=7;game.host_game();game.start_match())
	button("환경 설정 / 조작법",settings)
	button("게임 종료",func():game.get_tree().quit())
	notice_label=label("인터넷 계정·Python 설치 없이 실행됩니다.",15)
func host_settings():
	make_panel("방 설정")
	edit("방 이름",game.options.room,func(t):game.options.room=t.left(40))
	edit("비밀번호 (선택)",game.options.password,func(t):game.options.password=t,true)
	option("게임 모드",Rules.MODES,game.options.mode,func(i):game.options.mode=i)
	option("맵",["TIDAL YARD · 얕은 수로","DRY DOCK · 건조 전장"],game.options.map,func(i):game.options.map=i)
	option("최대 참가 인원",["8","16","24","32"],[8,16,24,32].find(game.options.max_players),func(i):game.options.max_players=[8,16,24,32][i])
	check("병과 사용",game.options.classes,func(v):game.options.classes=v)
	check("특수 스킬 사용 · 의료 무기/가젯에는 영향 없음",game.options.skills,func(v):game.options.skills=v)
	check("무한 공격 탄약 · 재장전 필요",game.options.infinite,func(v):game.options.infinite=v)
	check("아군 피해",game.options.friendly,func(v):game.options.friendly=v)
	check("무한 부활 모드의 체력 자동 회복",game.options.autoheal,func(v):game.options.autoheal=v)
	option("진행 중 참가",["접속 금지","관전만","참가 허용 · 폭탄은 다음 라운드"],game.options.join,func(i):game.options.join=i)
	option("처음 팀 배치",["자동 배치","직접 팀 선택"],game.options.teams,func(i):game.options.teams=i)
	option("다음 경기 팀",["같은 팀 유지","무작위 재편성","기록 기반 균형 편성"],game.options.next_teams,func(i):game.options.next_teams=i)
	check("제한 부활: 팀 공용 부활 횟수 사용",game.options.shared_lives,func(v):game.options.shared_lives=v)
	option("제한 부활 목숨",["1","3","5","10"],[1,3,5,10].find(game.options.lives),func(i):game.options.lives=[1,3,5,10][i])
	option("경기 시간",["5분","10분","15분","20분"],[5,10,15,20].find(game.options.minutes),func(i):game.options.minutes=[5,10,15,20][i])
	option("목표 점수",["30","60","100","200"],[30,60,100,200].find(game.options.target),func(i):game.options.target=[30,60,100,200][i])
	option("연습 봇",["없음","3명","7명","15명"],[0,3,7,15].find(game.options.bots),func(i):game.options.bots=[0,3,7,15][i])
	button("이 설정으로 방 만들기",func():game.host_game())
	button("뒤로",menu)
func join_menu():
	make_panel("내부망 접속")
	var ip=edit("서버 IP","192.168.0.10",func(_v):pass)
	edit("방 비밀번호",game.options.password,func(t):game.options.password=t,true)
	button("IP로 접속",func():game.join_game(ip.text))
	button("같은 내부망에서 방 검색",func():game.search_rooms())
	room_list=VBoxContainer.new();stack.add_child(room_list)
	label("검색되지 않으면 서버 IP로 접속하세요. UDP 27888·27889 사용.",15)
	notice_label=label("")
	button("뒤로",menu)
func update_rooms():
	if not is_instance_valid(room_list):return
	for n in room_list.get_children():n.queue_free()
	for ip in game.rooms:
		var d=game.rooms[ip];button(str(d.name)+"  "+str(d.count)+"/"+str(d.max)+"  "+ip,func():game.join_game(ip),room_list)
func lobby():
	make_panel("대기실 · "+str(game.options.room))
	label(Rules.MODES[int(game.options.mode)]+"  /  "+("스킬 ON" if game.options.skills else "스킬 OFF"),18)
	if game.server:
		var ips=[]
		for ip in IP.get_local_addresses():
			if "." in ip and not ip.begins_with("127."):ips.append(ip)
		label("서버 IP: "+", ".join(ips),16)
	roster=label("접속 정보 수신 중…",16)
	button("병과 / 장비 선택",gear)
	if int(game.options.teams)==1:
		button("BLUE 팀 선택",func():game.command("team",{"team":0}))
		button("ORANGE 팀 선택",func():game.command("team",{"team":1}))
	if game.server:button("경기 시작",func():game.start_match())
	else:label("방장이 시작하면 경기에 참여합니다.")
	button("방 나가기",func():game.leave_game())
	notice_label=label("")
func settings():
	make_panel("환경 설정 · 조작법")
	option("화면",["창 모드","전체 화면"],0 if game.profile.window else 1,func(i):game.profile.window=i==0;DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_WINDOWED if i==0 else DisplayServer.WINDOW_MODE_FULLSCREEN);game.save_profile())
	option("해상도",["1280 × 720","1600 × 900","1920 × 1080"],0,func(i):DisplayServer.window_set_size([Vector2i(1280,720),Vector2i(1600,900),Vector2i(1920,1080)][i]))
	var slider=HSlider.new();slider.min_value=.0005;slider.max_value=.006;slider.step=.0001;slider.value=game.profile.sensitivity;stack.add_child(slider);slider.value_changed.connect(func(v):game.profile.sensitivity=v;game.save_profile());label("위 슬라이더: 마우스 감도",15)
	var vol=HSlider.new();vol.min_value=0;vol.max_value=1;vol.step=.05;vol.value=game.profile.volume;stack.add_child(vol);vol.value_changed.connect(func(v):game.profile.volume=v;game.save_profile());label("위 슬라이더: 전체 음량",15)
	label("WASD 이동 · Shift 달리기 · Ctrl 앉기 · Space 점프\n왼쪽 클릭 발사 · 오른쪽 클릭 정조준 · R 재장전\n1/2 무기 전환 · F 의료 카빈 회복 발사 · E 상호작용\nQ 스킬/포탑 강화 · G 가젯 · V 가젯종류 · B 장비 · Tab 점수판 · Esc 메뉴\n설치·해체: 목표 구역에서 E 유지\n포탑 강화: 가까이에서 기존 포탑을 조준하고 Q",17)
	button("돌아가기",func():
		if game.phase=="menu":menu()
		else:clear_panel();Input.mouse_mode=Input.MOUSE_MODE_CAPTURED)
func gear():
	if not game.players.has(game.local_id):return
	var p=game.players[game.local_id];make_panel("장비 선택 · "+str(p.cash)+" 크레딧")
	label("폭탄 모드: 구매 시간에 적용 / 다른 모드: 대기실·탈락 후 적용",15)
	gear_class=option("병과",Rules.CLASSES,p.role,func(_i):refresh_weapons())
	gear_primary=option("주무기",[],0)
	gear_armor=option("방어구",["없음","경량 +25 · 300","중량 +50 · 600"],int(p.armor_max)/25)
	gear_gadget=option("가젯 옵션",["기본 / 연막 / 경량 엄폐물","섬광 / 표준 엄폐물","강화 엄폐물"],p.gadget)
	gear_repair=check("공병: 권총 대신 수리 도구 선택",p.secondary=="repair",func(_v):pass)
	refresh_weapons()
	label("메딕: LINK 지속 회복 / PIPER 공격 + F로 2초 간격 회복\n공병: 엄폐물 300·600·1000 / 포탑 Q 충전 30초, 최대 4단계",15)
	button("장비 적용",func():
		if weapon_ids.is_empty():return
		game.command("loadout",{"role":gear_class.selected,"primary":weapon_ids[gear_primary.selected],"armor":gear_armor.selected,"gadget":gear_gadget.selected,"repair":gear_repair.button_pressed})
		if game.phase=="lobby":lobby()
		else:clear_panel();Input.mouse_mode=Input.MOUSE_MODE_CAPTURED)
	button("돌아가기",func():
		if game.phase=="lobby":lobby()
		else:clear_panel();Input.mouse_mode=Input.MOUSE_MODE_CAPTURED)
	notice_label=label("")
func refresh_weapons():
	gear_primary.clear();weapon_ids=[]
	for id in Catalog.list_for(gear_class.selected,game.options.classes):
		var w=Catalog.get_weapon(id)
		if not game.options.classes and w.kind!="gun":continue
		weapon_ids.append(id);gear_primary.add_item(w.name+" · "+str(int(w.price)))
func toggle_pause():
	if is_instance_valid(panel):clear_panel();Input.mouse_mode=Input.MOUSE_MODE_CAPTURED;return
	make_panel("일시 메뉴 · 경기는 계속 진행됩니다.",680)
	button("게임으로 돌아가기",func():clear_panel();Input.mouse_mode=Input.MOUSE_MODE_CAPTURED)
	button("장비 선택",gear);button("환경 설정",settings);button("방 나가기",func():game.leave_game())
func hud_label(text:String,pos:Vector2,size:int=20) -> Label:
	var l=Label.new();l.text=text;l.position=pos;l.add_theme_font_size_override("font_size",size);l.add_theme_color_override("font_shadow_color",Color(0,0,0,.8));l.add_theme_constant_override("shadow_offset_x",1);l.add_theme_constant_override("shadow_offset_y",2);hud.add_child(l);return l
func show_hud():
	clear_panel()
	if hud:hud.queue_free()
	hud=Control.new();hud.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT);hud.mouse_filter=Control.MOUSE_FILTER_IGNORE;root.add_child(hud)
	stats=hud_label("",Vector2(1090,16),14)
	status=hud_label("",Vector2(440,20),24)
	health=hud_label("",Vector2(30,620),26)
	ammo=hud_label("",Vector2(930,620),25)
	banner=hud_label("",Vector2(32,100),18)
	crosshair=hud_label("+",Vector2(628,340),26)
	info=hud_label("",Vector2(30,666),14)
	score=hud_label("",Vector2(90,160),16);score.visible=false
	score2=hud_label("",Vector2(680,160),16);score2.visible=false
	flash_overlay=ColorRect.new();flash_overlay.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT);flash_overlay.color=Color(.055,.065,.08,0);flash_overlay.mouse_filter=Control.MOUSE_FILTER_IGNORE;hud.add_child(flash_overlay)
	Input.mouse_mode=Input.MOUSE_MODE_CAPTURED
func notice(message:String):
	if message.is_empty():return
	notice_until=Time.get_ticks_msec()+3500
	if is_instance_valid(notice_label):notice_label.text=message
	if is_instance_valid(banner):banner.text=message
func refresh():
	if game.phase=="lobby" and is_instance_valid(roster):
		var rows=[]
		for p in game.players.values():rows.append(("BLUE  " if p.team==0 else "ORANGE  ")+p.nick+"  ·  "+Rules.CLASSES[p.role])
		roster.text="\n".join(rows)
	if not is_instance_valid(hud) or not game.players.has(game.local_id):return
	var p=game.players[game.local_id];var a=game.actors[game.local_id];var wid=p.primary if p.slot==0 else p.secondary;var w=Catalog.get_weapon(wid)
	stats.text="%d FPS  ·  %s"%[Engine.get_frames_per_second(),"HOST" if game.server else str(game.ping_ms)+" ms"]
	var secs=maxi(0,int(game.remaining));status.text="BLUE %d    %02d:%02d    %d ORANGE"%[game.scores[0],secs/60,secs%60,game.scores[1]]
	health.text="HP %d  /  ARMOR %d"%[p.hp,p.armor] if p.alive else "탈락 · "+("관전 중" if game.options.mode==4 or p.spectator or p.lives<=0 else str(maxi(0,int(ceil(p.respawn-game.clock))))+"초 후 부활")
	ammo.text=str(int(p.mag.get(wid,0)))+" / "+("∞" if game.options.infinite else str(int(p.reserve.get(wid,0))))+"   "+w.name
	if w.kind=="heal":ammo.text="회복 에너지 %d / 180"%p.energy
	if w.kind=="repair":ammo.text="수리 에너지 %d / 100"%p.repair_energy
	var skill="준비" if p.skill_ready<=game.clock else str(int(ceil(p.skill_ready-game.clock)))+"초"
	info.text="%s · Q %s · G 장비 %d · B 장비선택 · E 상호작용 · TAB 점수판 · %d 크레딧"%[Rules.CLASSES[p.role],skill,p.gadget_count,p.cash]
	if p.role==4:info.text+=" · V 선택: "+("섬광" if p.gadget==1 else "연막")
	if game.options.mode==2 and game.options.shared_lives:info.text+=" · 팀 부활 %d"%game.tickets[p.team]
	if p.primary=="m2":info.text+=" · F 회복 %d+%d"%[p.heal_mag,p.heal_reserve]
	if p.reload>game.clock:ammo.text="재장전 %.1f초"%(p.reload-game.clock)
	crosshair.text="×" if Time.get_ticks_msec()<hit_until else "·" if a.input_state.ads else "[     ]" if a.input_state.sprint else "[  ]" if a.velocity.length()>1 else "+"
	crosshair.position.x=640-crosshair.get_minimum_size().x/2
	crosshair.modulate=Color("ffbf67") if Time.get_ticks_msec()<hit_until else Color.WHITE
	flash_overlay.color.a=clampf((p.flash-game.clock)/2.5,0,.96)
	if p.flash>game.clock:crosshair.text="";banner.text="섬광 · 시야 회복 중"
	elif game.phase=="buy":banner.text="구매 시간 · B로 무기·방어구·가젯 구매"
	elif game.bomb.planted:banner.text="장치 작동까지 %.1f초 · 해체 E 유지"%game.bomb.time
	elif game.bomb.actor==game.local_id:banner.text="상호작용 %.1f초"%game.bomb.progress
	elif Time.get_ticks_msec()>notice_until:banner.text=""
	score.visible=Input.is_action_pressed("score") or game.phase=="result";score2.visible=score.visible
	if score.visible:
		var rows=["플레이어                  K    D    A    목표    회복"]
		var rows2=["플레이어                  K    D    A    목표    회복"]
		var i=0
		for q in game.players.values():
			var text="%-18s   %d    %d    %d      %d      %d"%[q.nick,q.kills,q.deaths,q.assists,q.objective,q.healed]
			if i<16:rows.append(text)
			else:rows2.append(text)
			i+=1
		score.text="\n".join(rows);score2.text="\n".join(rows2)
