extends Node3D
class_name Arena
var water_rect=Rect2(-9,-33,18,66)
var has_water=true
var spawn_points=[[],[]]
var ffa_spawns=[]
var supplies=[]
var sites=[Vector3(-44,0,-23),Vector3(44,0,23)]
var zones=[Vector3(-44,0,-23),Vector3(0,0,0),Vector3(44,0,23)]
var mats={}
func mat(color:Color,emission:bool=false) -> StandardMaterial3D:
	var key=str(color)+str(emission)
	if mats.has(key):return mats[key]
	var m=StandardMaterial3D.new();m.albedo_color=color;m.roughness=0.9
	if color.a<1:m.transparency=BaseMaterial3D.TRANSPARENCY_ALPHA;m.cull_mode=BaseMaterial3D.CULL_DISABLED
	if emission:m.emission_enabled=true;m.emission=color;m.emission_energy_multiplier=0.5
	mats[key]=m;return m
func box(pos:Vector3,size:Vector3,color:Color,solid=true,parent:Node=null) -> Node3D:
	if parent==null:parent=self
	var root:Node3D=StaticBody3D.new() if solid else Node3D.new();parent.add_child(root);root.position=pos
	var mesh=MeshInstance3D.new();var b=BoxMesh.new();b.size=size;mesh.mesh=b;mesh.material_override=mat(color);root.add_child(mesh)
	if solid:
		root.collision_layer=1;root.collision_mask=0
		var c=CollisionShape3D.new();var s=BoxShape3D.new();s.size=size;c.shape=s;root.add_child(c)
	return root
func text3d(txt:String,pos:Vector3,color:Color,size:int=100,parent:Node=null):
	var l=Label3D.new();l.text=txt;l.position=pos;l.font_size=size;l.pixel_size=.012;l.modulate=color;l.billboard=BaseMaterial3D.BILLBOARD_ENABLED;l.no_depth_test=false;l.visibility_range_end=45;l.visibility_range_end_margin=8
	(parent if parent else self).add_child(l);return l
func build(which:int):
	has_water=which==0
	var ground=Color("b9c5c5") if which==0 else Color("9caab8")
	box(Vector3(0,-.5,0),Vector3(200,1,180),ground)
	for x in [-100,100]:box(Vector3(x,5,0),Vector3(2,10,182),Color("334c60"))
	for z in [-90,90]:box(Vector3(0,5,z),Vector3(202,10,2),Color("334c60"))
	# Three lanes with open courtyards and broken sightlines; no enclosed spawn traps.
	for sx in [-1,1]:
		for sz in [-1,1]:
			var pos=Vector3(sx*43,5,sz*51)
			box(pos,Vector3(26,10,20),Color("657987"))
			box(pos+Vector3(0,5.1,0),Vector3(27,.2,21),Color("25394b"),false)
			box(Vector3(sx*78,2.5,sz*23),Vector3(12,5,24),Color("8d9c9f"))
			for k in range(3):box(Vector3(sx*(22+k*13),.7,sz*9),Vector3(4,1.4,2),Color("708994"))
			box(Vector3(sx*23,1.2,sz*34),Vector3(8,2.4,4),Color("d3b17c"))
			box(Vector3(sx*66,1.4,sz*63),Vector3(5,2.8,5),Color("738b97"))
		for z in [-69,-42,-14,14,42,69]:
			box(Vector3(sx*12,1.0,z),Vector3(4,2,5),Color("64818c"))
		for i in range(8):
			var s=Vector3(-68+i*19,0.15,sx*77)
			spawn_points[0 if sx<0 else 1].append(s);ffa_spawns.append(s)
		box(Vector3(0,.015,sx*77),Vector3(158,.03,7),Color("387e9a") if sx<0 else Color("a76552"),false)
		text3d("NORTH / A" if sx<0 else "SOUTH / B",Vector3(0,5,sx*84),Color.WHITE,70)
	if has_water:
		box(Vector3(0,.31,0),Vector3(18,.6,66),Color(.12,.6,.75,.38),false)
		for z in [-35,35]:box(Vector3(0,.05,z),Vector3(20,.1,2),Color("5c91a0"),false)
	for i in range(zones.size()):
		var pos=zones[i]
		box(pos+Vector3(0,.025,0),Vector3(12,.05,12),Color("ddc186"),false)
		text3d(["A","C","B"][i],pos+Vector3(0,4,0),Color("f5d788"),70)
	for pos in [Vector3(-30,.3,0),Vector3(30,.3,0),Vector3(0,.3,-49),Vector3(0,.3,49)]:
		var n=box(pos,Vector3(1.5,.6,1.5),Color("55d5b2"),false)
		text3d("AMMO",Vector3(0,.65,0),Color("d4fff0"),24,n);supplies.append({"pos":pos,"node":n,"ready":0.0})
	var env=WorldEnvironment.new();var e=Environment.new();e.background_mode=Environment.BG_COLOR;e.background_color=Color("b7d0dd");e.ambient_light_source=Environment.AMBIENT_SOURCE_COLOR;e.ambient_light_color=Color("d0e2ed");e.ambient_light_energy=.75;env.environment=e;add_child(env)
	var sun=DirectionalLight3D.new();sun.rotation_degrees=Vector3(-55,-25,0);sun.light_energy=1.15;sun.shadow_enabled=false;add_child(sun)
func wading(pos:Vector3) -> bool:
	return has_water and water_rect.has_point(Vector2(pos.x,pos.z)) and pos.y<.61
func submerged(pos:Vector3) -> bool:
	return wading(pos) and pos.y<=.61
