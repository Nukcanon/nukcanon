extends Node3D
class_name Arena
const M=preload("res://scripts/mesh_factory.gd")
var water_rect=Rect2(-9,-33,18,66)
var has_water=true
var spawn_points=[[],[]]
var ffa_spawns=[]
var supplies=[]
var sites=[Vector3(-44,0,-23),Vector3(44,0,23)]
var zones=[Vector3(-44,0,-23),Vector3(0,0,0),Vector3(44,0,23)]
var obstacles=[]
var mats={}
var building=false
var architecture:Node3D
var chunk_count=0
func mat(color:Color,emission:bool=false) -> StandardMaterial3D:
	var key=str(color)+str(emission)
	if mats.has(key):return mats[key]
	var m=StandardMaterial3D.new();m.albedo_color=color;m.roughness=.86
	if color.a<1:m.transparency=BaseMaterial3D.TRANSPARENCY_ALPHA;m.cull_mode=BaseMaterial3D.CULL_DISABLED
	if emission:m.emission_enabled=true;m.emission=color;m.emission_energy_multiplier=.3
	mats[key]=m;return m
func box(pos:Vector3,size:Vector3,color:Color,solid=true,parent:Node=null) -> Node3D:
	if parent==null:parent=architecture if building else self
	var node:Node3D=StaticBody3D.new() if solid else Node3D.new();parent.add_child(node);node.position=pos
	var mesh=MeshInstance3D.new();var b=BoxMesh.new();b.size=size;mesh.mesh=b;mesh.material_override=mat(color);node.add_child(mesh)
	if solid:
		node.collision_layer=1;node.collision_mask=0
		var c=CollisionShape3D.new();var shape=BoxShape3D.new();shape.size=size;c.shape=shape;node.add_child(c)
		if building and pos.y+size.y*.5>.35 and pos.y-size.y*.5<1.9:obstacles.append(Rect2(Vector2(pos.x-size.x*.5,pos.z-size.z*.5),Vector2(size.x,size.z)).grow(.6))
	return node
func text3d(txt:String,pos:Vector3,color:Color,size:int=32,parent:Node=null):
	var l=Label3D.new();l.text=txt;l.position=pos;l.font_size=size;l.pixel_size=.008;l.modulate=color;l.billboard=BaseMaterial3D.BILLBOARD_ENABLED;l.no_depth_test=false;l.visibility_range_end=60;l.visibility_range_end_margin=10
	(parent if parent else self).add_child(l);return l
func detail(pos:Vector3,size:Vector3,color:Color,rot=Vector3.ZERO):
	return M.box(architecture,pos,size,color,rot,.08)
func pipe(pos:Vector3,radius:float,length:float,color:Color,rot=Vector3.ZERO):return M.cylinder(architecture,pos,radius,length,color,rot)
func warehouse(pos:Vector3,style:int):
	var wall=Color("c8b795") if style==0 else Color("b9c6c8")
	var trim=Color("536e7b") if style==0 else Color("9b7256")
	for x in [-8.5,8.5]:
		box(pos+Vector3(x,3.6,0),Vector3(9,7.2,20),wall)
		for z in [-10.08,10.08]:
			detail(pos+Vector3(x,.42,z),Vector3(9.1,.84,.12),trim)
			for wx in [-2.7,0,2.7]:
				detail(pos+Vector3(x+wx,4.45,z),Vector3(1.95,2.55,.1),Color("f0e3c9"))
				detail(pos+Vector3(x+wx,4.45,z+sign(z)*.061),Vector3(1.6,2.22,.1),Color("354f61"))
				detail(pos+Vector3(x+wx,4.45,z+sign(z)*.13),Vector3(.075,2.2,.025),trim)
				detail(pos+Vector3(x+wx,4.45,z+sign(z)*.13),Vector3(1.6,.075,.025),trim)
		for side in [-1,1]:detail(pos+Vector3(x+side*4.38,3.65,0),Vector3(.18,7.3,20.3),Color("ded4bf"))
	box(pos+Vector3(0,6.5,0),Vector3(8,1.4,20),wall)
	for z in [-10.2,10.2]:
		detail(pos+Vector3(0,5.7,z),Vector3(8.3,.35,.34),trim)
		detail(pos+Vector3(0,7.35,z),Vector3(27,.4,.38),trim)
		for x in [-4.05,4.05]:detail(pos+Vector3(x,2.8,z),Vector3(.3,5.6,.3),trim)
		for x in [-2.7,2.7]:detail(pos+Vector3(x,5.1,z),Vector3(.12,1.5,.14),trim,Vector3(0,0,sign(x)*.6))
	detail(pos+Vector3(0,7.25,0),Vector3(27,.22,21.4),Color("4e646e"))
	for x in [-7,7]:
		detail(pos+Vector3(x,7.7,-1),Vector3(2.4,.8,3.4),Color("83999d"))
		for z in [-1.8,-1.3,-.8,-.3]:detail(pos+Vector3(x,8.12,z),Vector3(2.1,.04,.08),trim)
	pipe(pos+Vector3(12.8,2.5,9.8),.13,5.,trim)
func container_box(pos:Vector3,color:Color,length=8.):
	box(pos+Vector3(0,1.4,0),Vector3(length,2.8,3.),color)
	for i in range(int(length/.45)):
		detail(pos+Vector3(-length*.5+.2+i*.45,1.4,-1.52),Vector3(.05,2.65,.04),color.lightened(.16))
		detail(pos+Vector3(-length*.5+.2+i*.45,1.4,1.52),Vector3(.05,2.65,.04),color.darkened(.18))
	for x in [-length*.5-.02,length*.5+.02]:
		for z in [-.8,.8]:detail(pos+Vector3(x,1.4,z),Vector3(.035,2.6,.045),Color("bdc3b3"))
		detail(pos+Vector3(x,1.4,0),Vector3(.03,2.7,.065),Color("314c59"))
	for z in [-1.5,1.5]:detail(pos+Vector3(0,2.83,z),Vector3(length+.08,.1,.1),color.darkened(.3))
func crate(pos:Vector3,size=Vector3(2.2,1.7,2.2)):
	var wood=Color("ae8b5d");box(pos+Vector3(0,size.y*.5,0),size,wood)
	for x in [-size.x*.5+.12,size.x*.5-.12]:
		for z in [-size.z*.5-.015,size.z*.5+.015]:detail(pos+Vector3(x,size.y*.5,z),Vector3(.13,size.y,.08),Color("dbc099"))
	for y in [.16,size.y-.16]:
		for z in [-size.z*.5-.05,size.z*.5+.05]:detail(pos+Vector3(0,y,z),Vector3(size.x,.13,.08),Color("d0b186"))
	for z in [-size.z*.5-.10,size.z*.5+.10]:detail(pos+Vector3(0,size.y*.5,z),Vector3(.12,size.y*.9,.09),Color("c8a577"),Vector3(0,0,-.75))
func cover(pos:Vector3,width=4.):
	box(pos+Vector3(0,.67,0),Vector3(width,1.34,.85),Color("b0b5ab"))
	detail(pos+Vector3(0,1.35,0),Vector3(width+.12,.14,1.02),Color("d5d5c3"))
	for x in [-width*.35,width*.35]:detail(pos+Vector3(x,.3,0),Vector3(.45,.3,1.6),Color("8b9897"))
	for x in [-width*.35,0,width*.35]:detail(pos+Vector3(x,.9,-.431),Vector3(.25,.25,.015),Color("e0b65e"),Vector3(0,0,.55))
func tree(pos:Vector3):
	box(pos+Vector3(0,2.1,0),Vector3(.7,4.2,.7),Color("897759"))
	M.sphere(architecture,pos+Vector3(0,5.5,0),Vector3(5.8,5.8,5.8),Color("789b79"));M.sphere(architecture,pos+Vector3(-1.7,4.7,.7),Vector3(3.4,3.4,3.4),Color("8fa782"))
func build(which:int):
	has_water=which==0;building=true;architecture=Node3D.new();architecture.name="Architecture";add_child(architecture)
	box(Vector3(0,-.5,0),Vector3(200,1,180),Color("b9b5a5") if has_water else Color("c5b69a"))
	for x in [-100,100]:box(Vector3(x,1.6,0),Vector3(2,3.2,182),Color("98a7a4"))
	for z in [-90,90]:box(Vector3(0,1.6,z),Vector3(202,3.2,2),Color("98a7a4"))
	for x in [-100,100]:detail(Vector3(x,3.3,0),Vector3(2.2,.18,182),Color("e0d8be"))
	for z in [-90,90]:detail(Vector3(0,3.3,z),Vector3(202,.18,2.2),Color("e0d8be"))
	# Broad navigation lanes, traversable warehouse passages, and readable cover heights.
	for x in [-44,0,44]:detail(Vector3(x,.009,0),Vector3(22,.015,172),Color("a2acaa"))
	for z in [-75,0,75]:detail(Vector3(0,.012,z),Vector3(190,.012,12),Color("a2acaa"))
	for sx in [-1,1]:
		for sz in [-1,1]:
			warehouse(Vector3(sx*43,0,sz*51),which)
			container_box(Vector3(sx*79,0,sz*26),Color("608e90") if sz<0 else Color("b06d57"),12.)
			container_box(Vector3(sx*79,2.8,sz*26),Color("839da2"),10.)
			for k in range(3):cover(Vector3(sx*(22+k*13),0,sz*9))
			crate(Vector3(sx*23,0,sz*34),Vector3(7,2.1,3.))
			crate(Vector3(sx*66,0,sz*63),Vector3(3.6,2.4,3.6))
			crate(Vector3(sx*69.7,0,sz*62),Vector3(2.5,1.5,2.5))
			container_box(Vector3(sx*81,0,sz*60),Color("c9b374"),9.)
			for tx in [87,94]:tree(Vector3(sx*tx,0,sz*77))
			# Harbor crane silhouette stays outside playable lanes.
			for z in [-4,4]:detail(Vector3(sx*95,10,sz*45+z),Vector3(.8,20,.8),Color("b18b51"))
			detail(Vector3(sx*88,20,sz*45),Vector3(17,.8,8.8),Color("c09b60"))
		for z in [-69,-42,-14,14,42,69]:
			cover(Vector3(sx*12,0,z),3.5)
		for i in range(8):
			var spawn=Vector3(-68+i*19,.15,sx*77);spawn_points[0 if sx<0 else 1].append(spawn);ffa_spawns.append(spawn)
		for x in [-70,-32,32,70]:
			detail(Vector3(x,.02,sx*83),Vector3(10,.018,.12),Color("e6d7ac"))
			for k in range(4):detail(Vector3(x-3+k*2,.02,sx*81),Vector3(.15,.02,3.5),Color("e6d7ac"))
		text3d("NORTH TERMINAL" if sx<0 else "SOUTH TERMINAL",Vector3(0,3.3,sx*88),Color("f3eddb"),65).pixel_size=.015
	if has_water:
		var water=box(Vector3(0,.31,0),Vector3(18,.6,66),Color(.18,.52,.59,.50),false)
		var shader=Shader.new();shader.code="shader_type spatial; render_mode blend_mix, cull_disabled; uniform vec4 tint : source_color = vec4(0.12,0.47,0.53,0.5); void fragment(){float ripple=sin(UV.x*100.0+TIME*0.7)*sin(UV.y*55.0-TIME*0.4); ALBEDO=tint.rgb+vec3(ripple*0.035); ROUGHNESS=0.3; ALPHA=tint.a;}"
		var material=ShaderMaterial.new();material.shader=shader;water.get_child(0).material_override=material
		for x in [-9.3,9.3]:detail(Vector3(x,.17,0),Vector3(.6,.32,66.6),Color("cfceba"))
		for z in [-35,35]:detail(Vector3(0,.07,z),Vector3(20,.14,2.2),Color("849e9f"))
	else:
		for z in [-24,24]:container_box(Vector3(0,0,z),Color("a48668"),11.)
	for i in range(zones.size()):
		var pos=zones[i]
		for x in [-6,6]:detail(pos+Vector3(x,.025,0),Vector3(.16,.025,12),Color("e3bf68"))
		for z in [-6,6]:detail(pos+Vector3(0,.025,z),Vector3(12,.025,.16),Color("e3bf68"))
		text3d(["A","C","B"][i],pos+Vector3(0,3.4,0),Color("f5e0a1"),65)
		if i!=1:
			box(pos+Vector3(-5,.45,-5),Vector3(1.2,.9,1.2),Color("486773"));detail(pos+Vector3(-5,.92,-5),Vector3(.9,.035,.8),Color("78b0b2"))
	for pos in [Vector3(-30,.3,0),Vector3(30,.3,0),Vector3(0,.3,-49),Vector3(0,.3,49)]:
		var n=Node3D.new();add_child(n);n.position=pos
		M.box(n,Vector3.ZERO,Vector3(.9,.5,.65),Color("455f56"));M.box(n,Vector3(0,.265,0),Vector3(.96,.05,.7),Color("798e6c"))
		for x in [-.31,.31]:M.box(n,Vector3(x,0,-.334),Vector3(.07,.3,.03),Color("d2ba76"))
		M.merge_children(n);var label=text3d("AMMO",Vector3(0,.6,0),Color("e1d6a3"),21,n);label.visibility_range_end=20
		supplies.append({"pos":pos,"node":n,"ready":0.})
	building=false;batch_architecture()
	var environment=WorldEnvironment.new();var e=Environment.new();e.background_mode=Environment.BG_SKY
	var sky=Sky.new();var sky_material=ProceduralSkyMaterial.new();sky_material.sky_top_color=Color("76a4c0");sky_material.sky_horizon_color=Color("ced9d6");sky_material.ground_horizon_color=Color("c0c4b6");sky_material.ground_bottom_color=Color("86947f");sky.sky_material=sky_material;e.sky=sky
	e.ambient_light_source=Environment.AMBIENT_SOURCE_COLOR;e.ambient_light_color=Color("c8deec");e.ambient_light_energy=.32
	e.tonemap_mode=Environment.TONE_MAPPER_LINEAR;environment.environment=e;add_child(environment)
	var sun=DirectionalLight3D.new();sun.name="Sun";sun.rotation_degrees=Vector3(-52,-28,0);sun.light_color=Color("fff0d2");sun.light_energy=.85;sun.shadow_enabled=true;sun.directional_shadow_mode=DirectionalLight3D.SHADOW_PARALLEL_2_SPLITS;sun.directional_shadow_max_distance=75;sun.shadow_bias=.08;add_child(sun)
func batch_architecture():
	var meshes=[];gather_meshes(architecture,meshes);var chunks={}
	for mesh in meshes:
		if not mesh.material_override is StandardMaterial3D or mesh.material_override.albedo_color.a<1:continue
		var pos=mesh.global_position;var key=Vector2i(int(floor(pos.x/32)),int(floor(pos.z/32)))
		if not chunks.has(key):var n=Node3D.new();architecture.add_child(n);chunks[key]=n
		var transform=mesh.global_transform;mesh.get_parent().remove_child(mesh);chunks[key].add_child(mesh);mesh.global_transform=transform
	for chunk in chunks.values():M.merge_children(chunk)
	chunk_count=chunks.size()
func gather_meshes(node:Node,out:Array):
	for child in node.get_children():
		if child is MeshInstance3D:out.append(child)
		else:gather_meshes(child,out)
func wading(pos:Vector3) -> bool:return has_water and water_rect.has_point(Vector2(pos.x,pos.z)) and pos.y<.61
func submerged(pos:Vector3) -> bool:return wading(pos) and pos.y<=.61
