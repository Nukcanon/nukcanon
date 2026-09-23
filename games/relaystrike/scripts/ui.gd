extends CanvasLayer
const Reticle=preload("res://scripts/reticle.gd")
var reticle:Control
var background:Control
var slots=[]
var slot_panels=[]
var weapon_title:Label
var skill_label:Label
var health_bar:ColorRect
var armor_bar:ColorRect
var gear_detail:Label
var gear_price:Label
var gear_submit:Button
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
	theme=Theme.new();theme.default_font_size=17
	if ResourceLoader.exists("res://assets/Korean.ttf"):
		var font=FontVariation.new();font.base_font=load("res://assets/Korean.ttf");font.variation_opentype={"wght":550};font.variation_embolden=.35;theme.default_font=font
	var style=StyleBoxFlat.new();style.bg_color=Color("101f2c");style.border_color=Color("2c4554");style.set_border_width_all(1);style.set_corner_radius_all(5);style.content_margin_left=18;style.content_margin_right=18;style.content_margin_top=12;style.content_margin_bottom=12
	theme.set_stylebox("panel","PanelContainer",style)
	var btn=style.duplicate();btn.bg_color=Color("203746");theme.set_stylebox("normal","Button",btn)
	var hov=btn.duplicate();hov.bg_color=Color("305664");theme.set_stylebox("hover","Button",hov)
	var pressed=btn.duplicate();pressed.bg_color=Color("227f82");theme.set_stylebox("pressed","Button",pressed)
	theme.set_color("font_color","Label",Color("e8f2f3"));theme.set_color("font_color","Button",Color("e8f2f3"));root.theme=theme
func clear_panel():
	if is_instance_valid(background):background.queue_free();background=null
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
	if not items.is_empty():b.select(clampi(selected,0,items.size()-1))
	row.add_child(b)
	if callback.is_valid():b.item_selected.connect(callback)
	return b
func check(title:String,value:bool,callback:Callable) -> CheckBox:
	var b=CheckBox.new();b.text=title;b.button_pressed=value;b.toggled.connect(callback);stack.add_child(b);return b
func edit(title:String,value:String,callback:Callable,secret=false) -> LineEdit:
	var row=HBoxContainer.new();stack.add_child(row);var l=Label.new();l.text=title;l.custom_minimum_size.x=200;row.add_child(l);var e=LineEdit.new();e.text=value;e.secret=secret;e.size_flags_horizontal=Control.SIZE_EXPAND_FILL;e.text_changed.connect(callback);row.add_child(e);return e
func menu():
	if not root:return
	if hud:hud.queue_free();hud=null
	clear_panel();Input.mouse_mode=Input.MOUSE_MODE_VISIBLE
	background=Control.new();background.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT);root.add_child(background)
	var bg=ColorRect.new();bg.color=Color("0b1722");bg.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT);background.add_child(bg)
	for i in range(8):
		var stripe=ColorRect.new();stripe.color=Color(.12,.23,.28,.22);stripe.position=Vector2(60+i*150,-150);stripe.size=Vector2(65,1100);stripe.rotation=.28;background.add_child(stripe)
	var brand=Label.new();brand.text="NUKCANON   /   LAN MULTIPLAYER";brand.position=Vector2(78,95);brand.add_theme_font_size_override("font_size",15);brand.modulate=Color("6dd7c6");background.add_child(brand)
	var title=Label.new();title.text="INTERNAL
N CRUSH";title.position=Vector2(72,175);title.add_theme_font_size_override("font_size",65);background.add_child(title)
	var intro=Label.new();intro.text="같은 공간에서, 함께 플레이하세요.
최대 32명  ·  6개 병과  ·  내부망 전용";intro.position=Vector2(80,395);intro.add_theme_font_size_override("font_size",18);intro.modulate=Color("9cb5c3");background.add_child(intro)
	var chip=Label.new();chip.text="WINDOWS   /   v"+Rules.VERSION+"   /   PLAYTEST";chip.position=Vector2(80,624);chip.add_theme_font_size_override("font_size",14);chip.modulate=Color("6c8799");background.add_child(chip)
	panel=PanelContainer.new();panel.position=Vector2(720,90);panel.custom_minimum_size=Vector2(475,545);root.add_child(panel)
	stack=VBoxContainer.new();stack.add_theme_constant_override("separation",15);panel.add_child(stack)
	label("플레이",29)
	var nick=LineEdit.new();nick.text=game.profile.nick;nick.placeholder_text="플레이어 이름";nick.custom_minimum_size.y=42;nick.text_changed.connect(func(t):game.profile.nick=t.left(20);game.save_profile());stack.add_child(nick)
	button("방 만들기",host_settings)
	button("내부망 방 찾기 / IP 접속",join_menu)
	button("봇 연습 · 난이도 선택",practice_menu)
	button("설정 · 감도 / 화면 / 조작법",settings)
	button("종료",func():game.get_tree().quit())
	notice_label=label("계정 없이 연결합니다.
같은 버전의 게임으로 접속하세요.",14);notice_label.modulate=Color("92adbc")
func practice_menu():
	make_panel("봇 연습")
	game.options.bots=maxi(3,int(game.options.bots))
	option("난이도",["하 · 반응과 조준을 완화","중 · 목표와 지원 역할 수행","상 · 빠른 반응, 사격·후퇴 판단 강화"],game.options.get("bot_difficulty",1),func(i):game.options.bot_difficulty=i)
	option("봇 인원",["3명","7명","15명","31명"],maxi(0,[3,7,15,31].find(game.options.bots)),func(i):game.options.bots=[3,7,15,31][i])
	option("게임 모드",Rules.MODES,game.options.mode,func(i):game.options.mode=i)
	option("맵",["TIDAL YARD · 항구","DRY DOCK · 창고"],game.options.map,func(i):game.options.map=i)
	label("장애물 우회 · 목표 수행 · 회복/수리 · 가젯/스킬 사용\n체력, 탄약, 최근 교전 상황에 따라 행동을 바꿉니다.",16)
	button("연습 시작",func():game.options.max_players=32;game.host_game();game.start_match())
	button("돌아가기",menu)
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
	option("연습 봇",["없음","3명","7명","15명","31명"],[0,3,7,15,31].find(game.options.bots),func(i):game.options.bots=[0,3,7,15,31][i])
	option("봇 난이도",["하 · 느린 반응","중 · 균형","상 · 빠른 판단"],game.options.get("bot_difficulty",1),func(i):game.options.bot_difficulty=i)
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
	sensitivity_control("마우스 감도",float(game.profile.sensitivity)/.0023,.15,4.,func(v):game.profile.sensitivity=v*.0023;game.save_profile())
	sensitivity_control("정조준 감도 배율",float(game.profile.ads_sensitivity),.2,1.5,func(v):game.profile.ads_sensitivity=v;game.save_profile())
	label("감도는 즉시 적용되고 다음 실행에도 유지됩니다.",14)
	var vol=HSlider.new();vol.min_value=0;vol.max_value=1;vol.step=.05;vol.value=game.profile.volume;stack.add_child(vol);vol.value_changed.connect(func(v):game.profile.volume=v;game.save_profile());label("위 슬라이더: 전체 음량",15)
	label("WASD 이동 · Shift 달리기 · Ctrl 앉기 · Space 점프\n왼쪽 클릭 발사 · 오른쪽 클릭 정조준 · R 재장전\n1 주무기 · 2 보조무기 · 3 가젯 · 4 추가 가젯(통제병)\nF 스킬/포탑 강화 · Q 의료 카빈 회복 · E 상호작용\nG 가젯 즉시 사용 · B 장비 · Tab 점수판 · Esc 메뉴\n설치·해체: 목표 구역에서 E 유지\n포탑 강화: 가까이에서 기존 포탑을 조준하고 F",17)
	button("돌아가기",func():
		if game.phase=="menu":menu()
		else:clear_panel();Input.mouse_mode=Input.MOUSE_MODE_CAPTURED)
func sensitivity_control(title:String,value:float,low:float,high:float,callback:Callable):
	var row=HBoxContainer.new();stack.add_child(row)
	var l=Label.new();l.text=title;l.custom_minimum_size.x=200;row.add_child(l)
	var slider=HSlider.new();slider.min_value=low;slider.max_value=high;slider.step=.05;slider.value=value;slider.size_flags_horizontal=Control.SIZE_EXPAND_FILL;row.add_child(slider)
	var number=SpinBox.new();number.min_value=low;number.max_value=high;number.step=.05;number.value=value;number.custom_minimum_size.x=125;row.add_child(number)
	slider.value_changed.connect(func(v):number.set_value_no_signal(v);callback.call(v))
	number.value_changed.connect(func(v):slider.set_value_no_signal(v);callback.call(v))
func gear():
	if not game.players.has(game.local_id):return
	var p=game.players[game.local_id];var queued=p.get("pending_loadout",{});var chosen=queued.get("role",p.role)
	make_panel("장비 준비",900)
	label("폭탄 모드 · 구매 시간에 크레딧 사용 / 전투 중 선택은 다음 라운드 구매 예약" if game.options.mode==4 else "크레딧 없이 장비 선택 · 전투 중 변경은 다음 부활에 적용",15)
	gear_class=option("병과",Rules.CLASSES,chosen,func(_i):refresh_weapons())
	gear_primary=option("주무기",[],0,func(_i):refresh_gear_detail())
	gear_armor=option("방어구",["없음","경량 +25"+(" · 300" if game.options.mode==4 else ""),"중량 +50"+(" · 600" if game.options.mode==4 else "")],int(queued.get("armor",int(p.armor_max)/25)),func(_i):refresh_gear_detail())
	gear_gadget=option("가젯 구성",[],0,func(_i):refresh_gear_detail())
	gear_repair=check("보조무기: 권총 대신 FIX 수리 도구",queued.get("repair",p.secondary=="repair"),func(_v):refresh_gear_detail())
	gear_detail=label("",15);gear_detail.modulate=Color("a8c5d3")
	gear_price=label("",18)
	gear_submit=button("선택 적용",func():
		if weapon_ids.is_empty():return
		game.command("loadout",selected_loadout()))
	button("게임으로 돌아가기" if game.phase!="lobby" else "대기실로",func():
		if game.phase=="lobby":lobby()
		else:clear_panel();Input.mouse_mode=Input.MOUSE_MODE_CAPTURED)
	notice_label=label("",14);notice_label.modulate=Color("6bdbbc")
	refresh_weapons()
	var wanted=queued.get("primary",p.primary)
	if wanted in weapon_ids:gear_primary.select(weapon_ids.find(wanted))
	gear_gadget.select(mini(gear_gadget.item_count-1,int(queued.get("gadget",p.gadget))))
	refresh_gear_detail()
func selected_loadout() -> Dictionary:
	return {"role":gear_class.selected,"primary":weapon_ids[gear_primary.selected],"armor":gear_armor.selected,"gadget":gear_gadget.selected,"repair":gear_repair.button_pressed}
func refresh_weapons():
	gear_primary.clear();weapon_ids=[]
	for id in Catalog.list_for(gear_class.selected,game.options.classes):
		var w=Catalog.get_weapon(id)
		if not game.options.classes and w.kind!="gun":continue
		weapon_ids.append(id);gear_primary.add_item(w.name)
	if is_instance_valid(gear_gadget):
		gear_gadget.clear()
		var items=["기본 가젯"]
		if gear_class.selected==3:items=["경량 엄폐물 · 250 내구도","표준 엄폐물 · 500 내구도","강화 엄폐물 · 800 내구도"]
		elif gear_class.selected==4:items=["연막 2 + 섬광 1","연막 1 + 섬광 2"]
		else:items=[Rules.GADGETS[gear_class.selected]]
		for item in items:gear_gadget.add_item(item)
		gear_repair.visible=gear_class.selected==3
	refresh_gear_detail()
func refresh_gear_detail():
	if not is_instance_valid(gear_detail) or weapon_ids.is_empty():return
	var w=Catalog.get_weapon(weapon_ids[gear_primary.selected]);var role=gear_class.selected
	var mode={"auto":"연발","semi":"단발","burst":"3점사"}.get(w.get("fire_mode","auto"),"")
	var secondary="FIX" if role==3 and gear_repair.button_pressed else Catalog.get_weapon(Rules.SECONDARIES[role]).name
	gear_detail.text="%s  ·  피해 %d%s  ·  탄창 %d  ·  재장전 %.1f초\n2 보조무기: %s\n3 가젯: %s\nF 스킬: %s"%[mode,w.damage," × "+str(int(w.pellets)) if w.pellets>1 else "",w.mag,w.reload,secondary,Rules.GADGET_HELP[role],Rules.SKILL_HELP[role]]
	if not game.options.skills:gear_detail.text+=" (이 방에서는 스킬 OFF)"
	if not game.options.classes:gear_detail.text+="\n병과 OFF · 가젯/스킬 없이 공격 무기 사용"
	var p=game.players[game.local_id];var cost=game.loadout_cost(p,selected_loadout())
	gear_price.text="예상 비용 %d / 보유 %d 크레딧"%[cost,p.cash] if game.options.mode==4 else "장비 선택 무료 · 기본 체력 100 / 기본 방어구 없음"
	gear_submit.text="구매하기" if game.phase=="buy" else "장비 적용" if game.phase=="lobby" else "다음 부활에 적용 예약" if game.options.mode!=4 else "다음 라운드 구매 예약"
func toggle_pause():
	if is_instance_valid(panel):clear_panel();Input.mouse_mode=Input.MOUSE_MODE_CAPTURED;return
	make_panel("일시 메뉴 · 경기는 계속 진행됩니다.",680)
	button("게임으로 돌아가기",func():clear_panel();Input.mouse_mode=Input.MOUSE_MODE_CAPTURED)
	button("장비 선택",gear);button("환경 설정",settings);button("방 나가기",func():game.leave_game())
func hud_label(text:String,pos:Vector2,size:int=20) -> Label:
	var l=Label.new();l.text=text;l.position=pos;l.add_theme_font_size_override("font_size",size);l.add_theme_color_override("font_shadow_color",Color(0,0,0,.8));l.add_theme_constant_override("shadow_offset_x",1);l.add_theme_constant_override("shadow_offset_y",2);hud.add_child(l);return l
func hud_plate(pos:Vector2,size:Vector2) -> Panel:
	var plate=Panel.new();plate.position=pos;plate.size=size;var style=StyleBoxFlat.new();style.bg_color=Color(.035,.075,.1,.86);style.set_corner_radius_all(4);plate.add_theme_stylebox_override("panel",style);plate.mouse_filter=Control.MOUSE_FILTER_IGNORE;hud.add_child(plate);return plate
func hud_bar(pos:Vector2,color:Color) -> ColorRect:
	var bg=ColorRect.new();bg.color=Color("344752");bg.position=pos;bg.size=Vector2(220,5);bg.mouse_filter=Control.MOUSE_FILTER_IGNORE;hud.add_child(bg)
	var bar=ColorRect.new();bar.color=color;bar.position=pos;bar.size=Vector2(220,5);bar.mouse_filter=Control.MOUSE_FILTER_IGNORE;hud.add_child(bar);return bar
func show_hud():
	clear_panel()
	if hud:hud.queue_free()
	hud=Control.new();hud.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT);hud.mouse_filter=Control.MOUSE_FILTER_IGNORE;root.add_child(hud)
	hud_plate(Vector2(406,15),Vector2(468,49))
	status=hud_label("",Vector2(422,24),21);status.custom_minimum_size.x=436;status.horizontal_alignment=HORIZONTAL_ALIGNMENT_CENTER
	stats=hud_label("",Vector2(1090,18),13)
	hud_plate(Vector2(22,595),Vector2(259,98));health=hud_label("",Vector2(40,607),22)
	health_bar=hud_bar(Vector2(40,648),Color("68dcc0"));armor_bar=hud_bar(Vector2(40,665),Color("7aafdc"))
	hud_plate(Vector2(995,577),Vector2(263,116));weapon_title=hud_label("",Vector2(1012,589),16);ammo=hud_label("",Vector2(1012,615),30)
	banner=hud_label("",Vector2(34,96),17)
	info=hud_label("",Vector2(305,686),13)
	skill_label=hud_label("",Vector2(313,590),16)
	slots=[];slot_panels=[]
	for i in range(4):
		var plate=hud_plate(Vector2(305+i*169,622),Vector2(161,54));slot_panels.append(plate)
		var l=hud_label("",Vector2(317+i*169,631),14);slots.append(l)
	crosshair=hud_label("",Vector2(0,0),1)
	reticle=Reticle.new();reticle.game=game;reticle.ui=self;reticle.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT);reticle.mouse_filter=Control.MOUSE_FILTER_IGNORE;hud.add_child(reticle)
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
	health.text="%d HP    %d 방어구"%[p.hp,p.armor] if p.alive else "관전" if game.options.mode==4 or p.spectator else "부활 %.0f초"%maxf(0,p.respawn-game.clock)
	health_bar.size.x=220*clampf(p.hp/100.,0,1);armor_bar.size.x=220*clampf(p.armor/50.,0,1)
	var fire_mode={"auto":"AUTO","semi":"SEMI","burst":"BURST"}.get(w.get("fire_mode","auto"),"")
	weapon_title.text=w.name+"   /   "+fire_mode
	ammo.text=str(int(p.mag.get(wid,0)))+" / "+("∞" if game.options.infinite else str(int(p.reserve.get(wid,0))))
	if w.kind=="heal":ammo.text="%d / 180"%p.energy;weapon_title.text="LINK  /  회복 에너지"
	if w.kind=="repair":ammo.text="%d / 100"%p.repair_energy;weapon_title.text="FIX  /  수리 에너지"
	if p.slot>=2:weapon_title.text=Rules.GADGETS[p.role] if p.role!=4 else "섬광탄" if p.slot==3 else "연막탄";ammo.text="클릭하여 사용"
	if p.reload>game.clock:ammo.text="재장전 %.1f"%(p.reload-game.clock)
	var skill="준비" if p.skill_ready<=game.clock else "%.0f초"%ceil(p.skill_ready-game.clock)
	skill_label.text="F  "+Rules.SKILLS[p.role]+"  ·  "+skill if game.options.skills and game.options.classes else "특수 스킬 OFF"
	if p.primary=="m2":skill_label.text+="     Q 회복 %d  ·  2초 간격"%p.heal_mag
	if p.get("mounted",0)>game.clock:skill_label.text+="     거치대 %.0f초"%(p.mounted-game.clock)
	if p.shield>game.clock:skill_label.text+="     방호 활성"
	var labels=["1  "+Catalog.get_weapon(p.primary).name,"2  "+Catalog.get_weapon(p.secondary).name,"3  "+(Rules.GADGETS[p.role] if p.role!=4 else "연막탄")+" ×"+str(p.gadget_count if p.role!=4 else p.smoke),"4  "+("섬광탄 ×"+str(p.flash_count) if p.role==4 else "—")]
	for i in range(4):
		slots[i].text=labels[i];slots[i].modulate=Color("6eebc7") if p.slot==i else Color("b6cbd4")
		slot_panels[i].self_modulate=Color("75cebb") if p.slot==i else Color.WHITE
		if i>=2 and not game.options.classes:slots[i].text=str(i+1)+"  사용 안 함"
	info.text="B 장비 선택   ·   E 상호작용   ·   TAB 기록   ·   ESC 설정"
	if game.options.mode==4:info.text+="   ·   %d 크레딧"%p.cash
	if not p.get("pending_loadout",{}).is_empty():info.text+="   ·   다음 부활 장비 예약됨"
	if not p.alive:info.text="마우스: 관전 시점   ·   클릭: 관전 대상 변경   ·   B 다음 장비 선택"
	reticle.queue_redraw()
	flash_overlay.color.a=clampf((p.flash-game.clock)/2.5,0,.96)
	if p.flash>game.clock:banner.text="섬광 · 시야 회복 중"
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
