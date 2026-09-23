extends Node3D
class_name CharacterVisual
const M=preload("res://scripts/mesh_factory.gd")
const ROLE_NAMES=["Vanguard","Pathfinder","Bulwark","Mechanic","Warden","Lifeline"]
const ROLE_ACCENTS=[Color("dfd3ae"),Color("89ab80"),Color("dbb765"),Color("e69d47"),Color("b0a0cd"),Color("62d4b4")]
static var templates={}
var rig:Node3D
var hips:Node3D
var chest:Node3D
var head:Node3D
var right_arm:Node3D
var left_arm:Node3D
var right_elbow:Node3D
var left_elbow:Node3D
var socket:Node3D
var animator:AnimationPlayer
var current_state=""
var role=0
var team=0
var hit_time=0.
var hit_sign=0.
var shot=0.
var airborne_time=0.
var motion_seed=0.
var motion_clock=0.
func build(which:int,side:int):
	role=which;team=side
	var key=str(role)+"_"+str(team)
	var path="res://assets/models/operator_"+key+".scn"
	if ResourceLoader.exists(path):rig=load(path).instantiate()
	else:
		if not templates.has(key):
			var source=make_rig(role,team);M.own_recursive(source,source);var packed=PackedScene.new();packed.pack(source);templates[key]=packed;source.free()
		rig=templates[key].instantiate()
	add_child(rig);hips=rig.get_node("Hips");chest=hips.get_node("Chest");head=chest.get_node("Head");right_arm=chest.get_node("RightArm");left_arm=chest.get_node("LeftArm");right_elbow=right_arm.get_node("Elbow");left_elbow=left_arm.get_node("Elbow");socket=chest.get_node("WeaponSocket");animator=rig.get_node("AnimationPlayer")
	animator.play("idle")
func react(direction:float):hit_time=.32;hit_sign=direction
func update_pose(dt:float,move:Vector3,sprint:bool,crouch:bool,grounded:bool,pitch:float,reloading:float,kick:float,gait_phase:float=-1.,turn:float=0.):
	var speed=Vector2(move.x,move.z).length();var next="idle"
	if not grounded:next="jump" if move.y>0 else "fall"
	elif crouch:next="crouch_walk" if speed>.25 else "crouch"
	elif speed>.25:next="run" if sprint else "walk"
	if next!=current_state:animator.play(next,.13);current_state=next
	animator.speed_scale=clampf(speed/(10. if next=="run" else 3.1 if next=="crouch_walk" else 6.),.65,1.6) if next in ["walk","run","crouch_walk"] else 1.
	motion_clock+=dt
	if gait_phase>=0 and next in ["walk","run","crouch_walk"]:animator.seek(fposmod(gait_phase,1.)*animator.current_animation_length,true)
	else:animator.advance(dt)
	# Locomotion clips own legs and pelvis; upper-body overlays retain a steady grip.
	var aiming=clampf(pitch,-.8,.8)
	chest.rotation.x=lerpf(chest.rotation.x,-aiming*.45,1.-exp(-dt*18))
	head.rotation.x=-aiming*.55
	socket.rotation.x=-aiming*.5-kick*.045
	right_arm.rotation.x=lerpf(right_arm.rotation.x,.65+aiming*.55,1.-exp(-dt*18));left_arm.rotation.x=lerpf(left_arm.rotation.x,.96+aiming*.55,1.-exp(-dt*18))
	right_elbow.rotation.x=.8;left_elbow.rotation.x=.55
	if sprint and speed>.25:
		var swing=sin(animator.current_animation_position/maxf(.01,animator.current_animation_length)*TAU)*.24
		right_arm.rotation.x=.35+swing;left_arm.rotation.x=.55-swing;socket.rotation.z=.2;socket.rotation.x=.25
	else:socket.rotation.z=0
	if reloading>=0:
		var reach=sin(reloading*PI);left_arm.rotation.x+=reach*.45;left_elbow.rotation.x-=reach*.7;left_arm.rotation.z=-reach*.25;socket.rotation.z=-reach*.18
	else:left_arm.rotation.z=0
	hit_time=maxf(0,hit_time-dt);var hit=sin(hit_time/.32*PI)*.2
	var strafe=to_local(global_position+move).x
	chest.rotation.z=hit*hit_sign-clampf(strafe/11.,-.1,.1)*.4;chest.rotation.x+=hit*.45;head.rotation.x-=hit*.4;right_arm.rotation.x-=kick*.06
	var phase=animator.current_animation_position/maxf(.01,animator.current_animation_length)*TAU
	var movement=clampf(speed/7.4,0,1) if grounded else 0.
	var breath=sin(motion_clock*(1.8+sin(motion_seed)*.12)+motion_seed)
	var shift=sin(motion_clock*.63+motion_seed)*sin(motion_clock*.27+motion_seed*.7)
	chest.rotation.y+=sin(phase)*movement*.055+shift*.012*(1.-movement)-turn*.018
	chest.rotation.z+=sin(phase)*movement*(.055 if sprint else .03)
	chest.rotation.x+=breath*.008*(1.-movement)
	head.rotation.y-=sin(phase)*movement*.028+shift*.018*(1.-movement)
	right_arm.rotation.z+=sin(phase)*movement*.045;left_arm.rotation.z-=sin(phase)*movement*.045
	right_arm.position.y=.13+cos(phase)*movement*.016;left_arm.position.y=.13-cos(phase)*movement*.016
	socket.rotation.y=-turn*.012+breath*.004*(1.-movement)
	socket.rotation.z+=sin(phase)*movement*.025

static func joint(parent:Node,name:String,pos:Vector3) -> Node3D:
	var n=Node3D.new();n.name=name;n.position=pos;parent.add_child(n);return n
static func make_rig(which:int,side:int) -> Node3D:
	var root=Node3D.new();root.name=ROLE_NAMES[which]
	var team_color=Color("17baff") if side==0 else Color("ff931f")
	var cloth=Color("197dd4") if side==0 else Color("df7026")
	var plate=Color("c9d2cd") if which==5 else Color("788b8e") if which==3 else team_color.darkened(.16)
	var dark=Color("243844");var accent=ROLE_ACCENTS[which];var skin=Color("be987e")
	var h=joint(root,"Hips",Vector3(0,.94,0));var torso=joint(h,"Chest",Vector3(0,.3,0))
	M.tapered(h,Vector3(0,.005,0),Vector3(.43,.25,.28),cloth,.83)
	M.box(h,Vector3(0,.065,-.01),Vector3(.48,.055,.31),dark)
	M.box(h,Vector3(0,.065,-.178),Vector3(.085,.055,.022),accent)
	M.tapered(torso,Vector3(0,.015,0),Vector3(.52 if which!=2 else .61,.46,.31),cloth,.75)
	M.tapered(torso,Vector3(0,.015,-.135),Vector3(.42,.36,.12),team_color,.87)
	M.box(torso,Vector3(0,.158,-.21),Vector3(.30,.035,.025),Color("d9f7ff") if side==0 else Color("fff0bc"))
	M.box(torso,Vector3(0,.12,.19),Vector3(.36,.08,.045),team_color.lightened(.26))
	for side_x in [-1,1]:
		M.box(torso,Vector3(side_x*.188,.05,-.19),Vector3(.034,.33,.038),dark,Vector3(0,0,side_x*-.15))
		var arm=joint(torso,"LeftArm" if side_x<0 else "RightArm",Vector3(side_x*.29,.13,0))
		M.tapered(arm,Vector3(0,-.135,0),Vector3(.19,.29,.21),cloth,.82)
		M.box(arm,Vector3(side_x*.024,-.045,.006),Vector3(.23 if which==2 else .19,.16,.245),team_color,Vector3(0,0,side_x*.13))
		M.box(arm,Vector3(side_x*.128,-.04,0),Vector3(.018,.095,.16),team_color.lightened(.28))
		var elbow=joint(arm,"Elbow",Vector3(0,-.28,0));M.sphere(elbow,Vector3.ZERO,Vector3(.145,.15,.15),dark)
		M.tapered(elbow,Vector3(0,-.115,0),Vector3(.145,.235,.17),plate if which in [2,5] else cloth,.76)
		M.box(elbow,Vector3(0,-.235,0),Vector3(.16,.055,.185),dark)
		var hand=joint(elbow,"Hand",Vector3(0,-.275,0));M.box(hand,Vector3.ZERO,Vector3(.14,.11,.105),dark)
		M.box(hand,Vector3(side_x*-.07,.008,-.026),Vector3(.035,.066,.075),accent if which==3 else dark)
		var thigh=joint(h,"LeftLeg" if side_x<0 else "RightLeg",Vector3(side_x*.14,-.025,0))
		M.tapered(thigh,Vector3(0,-.2,0),Vector3(.215,.39,.24),cloth,.8)
		M.box(thigh,Vector3(side_x*.04,-.16,.01),Vector3(.22,.055,.25),dark)
		var knee=joint(thigh,"Knee",Vector3(0,-.415,0));M.box(knee,Vector3(0,-.02,-.11),Vector3(.17,.16,.065),plate)
		M.tapered(knee,Vector3(0,-.19,0),Vector3(.17,.36,.195),cloth,.9)
		var foot=joint(knee,"Foot",Vector3(0,-.415,0));M.box(foot,Vector3(0,.03,-.06),Vector3(.215,.17,.34),dark,Vector3.ZERO,.4)
		M.box(foot,Vector3(0,-.035,-.067),Vector3(.22,.042,.35),Color("182b35"))
		M.box(foot,Vector3(0,.045,-.2),Vector3(.19,.07,.04),team_color)
	var head=joint(torso,"Head",Vector3(0,.36,0))
	M.cylinder(torso,Vector3(0,.255,0),.095,.14,skin)
	M.sphere(head,Vector3(0,.035,0),Vector3(.35,.38,.35),skin)
	M.sphere(head,Vector3(0,.107,.016),Vector3(.39,.31,.41),plate if which==5 else accent if which==3 else team_color)
	M.box(head,Vector3(0,.061,-.172),Vector3(.29,.112,.073),Color("1b3442"),Vector3.ZERO,.45)
	M.box(head,Vector3(0,.087,-.216),Vector3(.24,.022,.012),Color("89d2d6"),Vector3.ZERO,.1)
	for x in [-.18,.18]:M.cylinder(head,Vector3(x,.034,.015),.07,.055,dark,Vector3(0,0,PI/2))
	match which:
		0:
			for x in [-.085,.085]:M.box(torso,Vector3(x,-.048,-.228),Vector3(.12,.14,.05),accent,Vector3(-.12,0,0))
			M.box(torso,Vector3(.13,.14,.22),Vector3(.13,.28,.14),dark)
			M.cylinder(torso,Vector3(.15,.42,.22),.008,.35,accent)
		1:
			M.sphere(head,Vector3(0,.105,.055),Vector3(.45,.35,.44),accent)
			M.box(head,Vector3(0,.088,-.23),Vector3(.255,.085,.02),Color("273d41"))
			M.tapered(torso,Vector3(0,-.12,.21),Vector3(.5,.66,.085),accent,.68)
			M.box(torso,Vector3(-.16,.05,-.225),Vector3(.09,.28,.04),Color("c1c9ad"))
		2:
			M.box(torso,Vector3(0,.08,.255),Vector3(.46,.48,.23),dark)
			for x in [-.33,.33]:M.box(torso,Vector3(x,.17,0),Vector3(.26,.17,.37),plate,Vector3(0,0,sign(x)*.18))
			M.box(head,Vector3(0,-.061,-.14),Vector3(.31,.16,.18),plate)
			for x in [-.1,.1]:M.box(torso,Vector3(x,-.1,-.25),Vector3(.085,.22,.11),accent)
		3:
			M.cylinder(head,Vector3(0,.12,0),.235,.03,accent,Vector3.ZERO,-1.,12)
			M.box(head,Vector3(0,.225,0),Vector3(.047,.05,.29),Color("efd19c"))
			for x in [-.26,.26]:M.box(h,Vector3(x,-.05,.01),Vector3(.15,.18,.22),accent)
			M.cylinder(torso,Vector3(.13,.02,.255),.048,.47,accent)
			M.box(torso,Vector3(-.1,.045,.235),Vector3(.21,.32,.12),dark)
			M.box(h,Vector3(.29,-.23,-.02),Vector3(.05,.31,.05),Color("a9b3b0"),Vector3(0,0,.2))
		4:
			for x in [-.11,.11]:M.cylinder(head,Vector3(x,-.073,-.176),.06,.08,plate,Vector3(PI/2,0,0))
			for x in [-.14,.14]:M.cylinder(torso,Vector3(x,.04,.27),.083,.48,accent)
			M.box(torso,Vector3(0,.1,-.217),Vector3(.18,.12,.06),accent)
		5:
			M.box(torso,Vector3(0,.02,.255),Vector3(.4,.4,.18),Color("dce1d1"))
			M.box(torso,Vector3(0,.03,.356),Vector3(.065,.24,.016),accent);M.box(torso,Vector3(0,.03,.357),Vector3(.24,.065,.016),accent)
			M.box(torso,Vector3(0,.08,-.213),Vector3(.045,.16,.025),accent);M.box(torso,Vector3(0,.08,-.214),Vector3(.16,.045,.025),accent)
			for x in [-.2,.2]:M.cylinder(h,Vector3(x,-.12,-.1),.033,.16,accent)
	M.box(torso,Vector3(0,.07,.17),Vector3(.38,.3,.045),team_color)
	role_badge(torso,which,Vector3(0,.10,-.26),1.)
	role_badge(torso,which,Vector3(0,.09,.39),1.4)
	M.box(head,Vector3(0,.17,-.153),Vector3(.25,.04,.03),team_color)
	joint(torso,"WeaponSocket",Vector3(.145,-.13,-.32))
	M.merge_rig(root);add_clips(root)
	return root
static func role_badge(parent:Node3D,which:int,pos:Vector3,factor:float):
	var badge=joint(parent,"RoleBadge",pos);badge.scale=Vector3.ONE*factor
	M.box(badge,Vector3.ZERO,Vector3(.18,.16,.015),Color("17364a"))
	var white=Color("edf8eb");var depth=-.012 if pos.z<0 else .012
	match which:
		0:
			for side in [-1,1]:M.box(badge,Vector3(side*.032,0,depth),Vector3(.024,.093,.015),white,Vector3(0,0,side*-.65))
		1:
			M.cylinder(badge,Vector3(0,0,depth),.047,.012,white,Vector3(PI/2,0,0),-1.,12)
			M.cylinder(badge,Vector3(0,0,depth*1.6),.025,.014,Color("17364a"),Vector3(PI/2,0,0),-1.,12)
		2:
			for x in [-.04,0,.04]:M.box(badge,Vector3(x,0,depth),Vector3(.024,.095,.016),white)
		3:
			for rot in [-.7,.7]:M.box(badge,Vector3(0,0,depth),Vector3(.023,.115,.016),Color("ffd27c"),Vector3(0,0,rot))
		4:
			for x in [-.038,.038]:M.cylinder(badge,Vector3(x,0,depth),.024,.016,white,Vector3(PI/2,0,0))
		5:
			M.box(badge,Vector3(0,0,depth),Vector3(.031,.117,.015),Color("78ffcb"));M.box(badge,Vector3(0,0,depth*1.1),Vector3(.117,.031,.015),Color("78ffcb"))
static func leg_angles(hip_y:float,foot_z:float,foot_y:float) -> Vector3:
	var dy=hip_y-.025-foot_y-.1;var d=clampf(sqrt(dy*dy+foot_z*foot_z),.12,.829)
	var bend=acos(clampf(d/(2*.415),-1,1));var upper=atan2(-foot_z,dy)+bend;var lower=-2*bend
	return Vector3(upper,lower,-upper-lower)
static func add_clips(root:Node3D):
	var player=AnimationPlayer.new();player.callback_mode_process=AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_MANUAL;player.name="AnimationPlayer";root.add_child(player);var library=AnimationLibrary.new()
	for state in ["idle","walk","run","crouch","crouch_walk","jump","fall","fire","reload","hit","land","death"]:
		var anim=Animation.new();anim.length={"idle":2.,"walk":.64,"run":.5,"crouch":2.,"crouch_walk":1.05,"jump":.32,"fall":.6,"fire":.15,"reload":2.2,"hit":.3,"land":.2,"death":.65}[state]
		anim.loop_mode=Animation.LOOP_LINEAR if state in ["idle","walk","run","crouch","crouch_walk","fall"] else Animation.LOOP_NONE
		var paths=["Hips:position","Hips:rotation","Hips/LeftLeg:rotation","Hips/LeftLeg/Knee:rotation","Hips/LeftLeg/Knee/Foot:rotation","Hips/RightLeg:rotation","Hips/RightLeg/Knee:rotation","Hips/RightLeg/Knee/Foot:rotation","Hips/Chest:rotation","Hips/Chest/Head:rotation","Hips/Chest/LeftArm:rotation","Hips/Chest/LeftArm/Elbow:rotation","Hips/Chest/RightArm:rotation","Hips/Chest/RightArm/Elbow:rotation","Hips/Chest/WeaponSocket:rotation"]
		for path in paths:var track=anim.add_track(Animation.TYPE_VALUE);anim.track_set_path(track,NodePath(path));anim.track_set_interpolation_type(track,Animation.INTERPOLATION_LINEAR)
		for frame in range(17):
			var t=frame/16.;var moving=state in ["walk","run","crouch_walk"];var crouched=state in ["crouch","crouch_walk"];var stride=.58 if state=="run" else .46 if state=="walk" else .25
			var y=.61 if crouched else .94
			if moving:y+=cos(t*TAU*2)*.018
			elif state=="idle":y+=sin(t*TAU)*.006
			if state=="jump":y-=sin(t*PI)*.13
			if state=="land":y-=sin(t*PI)*.11
			if state=="death":y=lerpf(.94,.25,sin(t*PI/2))
			anim.track_insert_key(0,t*anim.length,Vector3(0,y,0))
			anim.track_insert_key(1,t*anim.length,Vector3(-.09 if state=="run" else -t*1.45 if state=="death" else 0,0,sin(t*TAU)*.035 if moving else 0))
			for leg in range(2):
				var phase=fmod(t+leg*.5,1.);var stance=phase<.58;var z=lerpf(stride,-stride,phase/.58) if stance else lerpf(-stride,stride,smoothstep(.58,1.,phase));z=z if moving else -.09 if crouched else 0.;var foot_y=sin((phase-.58)/.42*PI)*(.18 if state=="run" else .11) if moving and not stance else 0.
				var angles=leg_angles(y,z,foot_y)
				for j in range(3):anim.track_insert_key(2+leg*3+j,t*anim.length,Vector3(angles[j],0,0))
			var pulse=sin(t*PI)
			var body=Vector3.ZERO;var head_pose=Vector3.ZERO;var left=Vector3(.96,0,0);var left_elbow=Vector3(.55,0,0);var right=Vector3(.65,0,0);var right_elbow=Vector3(.8,0,0);var weapon=Vector3.ZERO
			if state=="fire":right.x-=pulse*.12;weapon.x=-pulse*.075;body.x=pulse*.025
			if state=="reload":left.x+=pulse*.5;left.z=-pulse*.25;left_elbow.x-=pulse*.6;weapon.z=-pulse*.22;head_pose.x=.1*pulse
			if state=="hit":body=Vector3(pulse*.1,0,pulse*.14);head_pose.x=-pulse*.13
			if state=="run":left.x=.65+sin(t*TAU)*.14;right.x=.35-sin(t*TAU)*.14;weapon=Vector3(.2,0,.2)
			if crouched:body.x=.12
			var poses=[body,head_pose,left,left_elbow,right,right_elbow,weapon]
			for j in range(poses.size()):anim.track_insert_key(8+j,t*anim.length,poses[j])
		library.add_animation(state,anim)
	for index in range(5):
		var anim=Animation.new();anim.length=.9
		var tracks=["Hips:position","Hips:rotation","Hips/Chest:rotation","Hips/Chest/LeftArm:rotation","Hips/Chest/RightArm:rotation","Hips/LeftLeg:rotation","Hips/RightLeg:rotation","Hips/LeftLeg/Knee:rotation","Hips/RightLeg/Knee:rotation"]
		for path in tracks:var track=anim.add_track(Animation.TYPE_VALUE);anim.track_set_path(track,NodePath(path))
		for frame in range(13):
			var t=frame/12.;var fall=sin(clampf((t-.12)/.88,0,1)*PI/2);var crouch=sin(t*PI)*.15
			var end_rot=[Vector3(-1.45,0,.13),Vector3(1.45,0,-.12),Vector3(.15,0,-1.45),Vector3(-.12,0,1.45),Vector3(.9,.2,.7)][index]
			var hip=Vector3(0,lerpf(.94,.27,fall)-crouch,0)
			var poses=[hip,end_rot*fall,Vector3(sin(t*PI)*.16,0,0),Vector3(.96-fall*(1.3 if index%2==0 else .3),0,-fall*.4),Vector3(.65-fall*.7,0,fall*.35),Vector3(fall*.55,0,-fall*.16),Vector3(fall*.2,0,fall*.2),Vector3(-fall*.85,0,0),Vector3(-fall*.4,0,0)]
			for j in range(poses.size()):anim.track_insert_key(j,t*.9,poses[j])
		library.add_animation(["fall_back","fall_front","fall_left","fall_right","fall_fold"][index],anim)
	player.add_animation_library("",library)
