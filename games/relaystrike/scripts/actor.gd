extends CharacterBody3D
class_name Actor
var pid=0
var game:Node
var camera:Camera3D
var body_mesh:MeshInstance3D
var head_mesh:MeshInstance3D
var limbs:Node3D
var tag:Label3D
var shape:CollisionShape3D
var gun:Node3D
var input_state={"x":0.0,"z":0.0,"yaw":0.0,"pitch":0.0,"ads":false,"sprint":false,"crouch":false,"fire":false,"alt":false,"use":false,"jump":false}
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
func _ready():
	collision_layer=2;collision_mask=1|4
	shape=CollisionShape3D.new();var cap=CapsuleShape3D.new();cap.radius=.34;cap.height=1.8;shape.shape=cap;shape.position.y=.9;add_child(shape)
	body_mesh=MeshInstance3D.new();var b=CapsuleMesh.new();b.radius=.32;b.height=1.35;b.radial_segments=8;b.rings=2;body_mesh.mesh=b;body_mesh.position.y=.8;add_child(body_mesh)
	head_mesh=MeshInstance3D.new();var h=BoxMesh.new();h.size=Vector3(.43,.38,.4);head_mesh.mesh=h;head_mesh.position.y=1.58;add_child(head_mesh)
	var hm=StandardMaterial3D.new();hm.albedo_color=Color("172e41");head_mesh.material_override=hm
	tag=Label3D.new();tag.position.y=2.15;tag.font_size=32;tag.pixel_size=.005;tag.billboard=BaseMaterial3D.BILLBOARD_ENABLED;add_child(tag)
	limbs=Node3D.new();add_child(limbs)
	for x in [-.18,.18]:
		game.arena.box(Vector3(x,.28,0),Vector3(.18,.55,.22),Color("213447"),false,limbs)
		game.arena.box(Vector3(x*2,.98,0),Vector3(.17,.6,.2),Color("435f73"),false,limbs)
	game.arena.box(Vector3(0,1.08,-.27),Vector3(.4,.42,.13),Color("263e50"),false,limbs)
	camera=Camera3D.new();camera.position.y=1.62;camera.fov=82;camera.far=350;camera.near=.05;add_child(camera)
	gun=Node3D.new();camera.add_child(gun);build_gun()
func build_gun():
	for child in gun.get_children():child.queue_free()
	var m=MeshInstance3D.new();var box=BoxMesh.new();box.size=Vector3(.11,.13,.55);m.mesh=box;m.position=Vector3(.22,-.19,-.4);var mat=StandardMaterial3D.new();mat.albedo_color=Color("223749");m.material_override=mat;gun.add_child(m)
	var sight=MeshInstance3D.new();var s=BoxMesh.new();s.size=Vector3(.045,.045,.055);sight.mesh=s;sight.position=Vector3(.22,-.095,-.55);var sm=StandardMaterial3D.new();sm.albedo_color=Color("54dfbd");sight.material_override=sm;gun.add_child(sight)
func set_local(on:bool):
	local=on;camera.current=on;body_mesh.visible=not on;head_mesh.visible=not on;limbs.visible=not on;tag.visible=not on;gun.visible=on
func set_team(t:int):
	var mat=StandardMaterial3D.new();mat.albedo_color=Color("359dc4") if t==0 else Color("e18b56");body_mesh.material_override=mat
func eye() -> Vector3:return global_position+Vector3(0,1.05 if input_state.crouch else 1.62,0)
func direction() -> Vector3:return Basis(Vector3.UP,aim_yaw)*Basis(Vector3.RIGHT,aim_pitch)*Vector3.FORWARD
func simulate(dt:float,now:float,can_move:bool):
	aim_yaw=float(input_state.yaw);aim_pitch=clampf(float(input_state.pitch),-1.45,1.45);rotation.y=aim_yaw
	var crouch=bool(input_state.crouch)
	if not crouch and shape.shape.height<1.8:
		var q=PhysicsRayQueryParameters3D.create(global_position+Vector3.UP,global_position+Vector3.UP*1.85,1|4);q.exclude=[get_rid()]
		crouch=not get_world_3d().direct_space_state.intersect_ray(q).is_empty()
	shape.shape.height=1.15 if crouch else 1.8;shape.position.y=shape.shape.height*.5
	body_mesh.scale.y=.63 if crouch else 1.;head_mesh.position.y=.99 if crouch else 1.58
	var sprint=bool(input_state.sprint) and not crouch and not input_state.ads and not input_state.fire
	if last_sprint and not sprint:sprint_release=now+.5
	last_sprint=sprint
	var speed=8.5 if sprint else 2.4 if crouch else 3.3 if input_state.ads else 5.7
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
	if not local:
		if not game.server:global_position=global_position.lerp(target_pos,minf(1,dt*14));rotation.y=lerp_angle(rotation.y,aim_yaw,minf(1,dt*15))
		shape.shape.height=1.15 if input_state.crouch else 1.8;shape.position.y=shape.shape.height*.5
		body_mesh.scale.y=.63 if input_state.crouch else 1.;head_mesh.position.y=.99 if input_state.crouch else 1.58
		tag.visible=game.players.has(game.local_id) and (p.team==game.players[game.local_id].team or p.mark>now)
		if p.mark>now:tag.modulate=Color("ffd086")
		else:tag.modulate=Color.WHITE
		tag.text=p.nick+"  "+str(int(p.hp));return
	camera.rotation.x=aim_pitch;camera.position.y=lerpf(camera.position.y,1.05 if input_state.crouch else 1.62,dt*14)
	var wid=p.primary if p.slot==0 else p.secondary
	var w=Catalog.get_weapon(wid)
	if shown_weapon!=wid:
		shown_weapon=wid;build_gun();decorate_gun(w)
	camera.fov=lerpf(camera.fov,float(w.zoom) if input_state.ads else 88. if last_sprint else 82.,dt*12)
	gun.position=gun.position.lerp(Vector3(-.22,.04,-.2) if input_state.ads else Vector3(0,-.02,-.22),dt*15)
	bob+=dt*(14 if last_sprint else 9)
	if velocity.length()>1:
		gun.position.y+=sin(bob)*.0015
		step_clock-=dt
		if step_clock<=0:step_clock=.32 if last_sprint else .48;game.local_step(global_position)
	gun.rotation.x=lerpf(gun.rotation.x,0,dt*14)
	if not p.alive:camera.position.y=2.6

func decorate_gun(w:Dictionary):
	if game.arena==null:return
	var length=.65 if w.role==1 else .5 if w.role==2 else .35
	game.arena.box(Vector3(.22,-.17,-.58),Vector3(.055,.055,length),Color("172636"),false,gun)
	if w.role==1 and w.slot==0:
		game.arena.box(Vector3(.22,-.07,-.42),Vector3(.07,.08,.2),Color("0e273a"),false,gun)
	if w.role==2 and w.slot==0:
		game.arena.box(Vector3(.22,-.29,-.34),Vector3(.18,.14,.18),Color("69808c"),false,gun)
	elif w.kind in ["heal","repair"]:
		game.arena.box(Vector3(.22,-.14,-.68),Vector3(.12,.12,.12),Color("55deb3") if w.kind=="heal" else Color("f1c160"),false,gun)
	else:game.arena.box(Vector3(.22,-.28,-.32),Vector3(.07,.16,.12),Color("506673"),false,gun)
