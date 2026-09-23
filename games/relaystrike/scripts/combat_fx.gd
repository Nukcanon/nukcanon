extends Node3D
class_name CombatFX
var field_nodes={}
var transients=[]
const M=preload("res://scripts/mesh_factory.gd")
func clear():
	for child in get_children():child.queue_free()
	field_nodes.clear();transients.clear()
func group(pos:Vector3) -> Node3D:
	while transients.size()>=96:
		var old=transients.pop_front()
		if is_instance_valid(old):old.queue_free()
	var node=Node3D.new();add_child(node);node.position=pos;transients.append(node);return node
func glow(color:Color) -> StandardMaterial3D:
	var mat=StandardMaterial3D.new();mat.albedo_color=color;mat.shading_mode=BaseMaterial3D.SHADING_MODE_UNSHADED;mat.transparency=BaseMaterial3D.TRANSPARENCY_ALPHA;mat.cull_mode=BaseMaterial3D.CULL_DISABLED;return mat
func finish(node:Node3D,seconds:float):
	var tween=node.create_tween();tween.tween_interval(seconds);tween.tween_callback(node.queue_free)
func ring(parent:Node3D,radius:float,color:Color) -> MeshInstance3D:
	var node=MeshInstance3D.new();var mesh=TorusMesh.new();mesh.inner_radius=maxf(.01,radius-.06);mesh.outer_radius=radius;mesh.rings=32;mesh.ring_segments=6;node.mesh=mesh;node.material_override=glow(color);node.cast_shadow=GeometryInstance3D.SHADOW_CASTING_SETTING_OFF;parent.add_child(node);return node
func beam(from:Vector3,to:Vector3,heal=false):
	var length=from.distance_to(to)
	if length<.02:return
	var node=group((from+to)*.5);node.look_at(to)
	var mesh=M.cylinder(node,Vector3.ZERO,.018 if heal else .010,length,Color("65edc2") if heal else Color("ffecc0"),Vector3(PI/2,0,0),-1.,6)
	mesh.material_override=glow(Color(.3,1,.73,.85) if heal else Color(1,.81,.40,.72));mesh.cast_shadow=GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
	finish(node,.10 if heal else .048)
	if heal:
		var end=group(to);var halo=ring(end,.19,Color(.3,1,.75,.55));halo.rotation.x=PI/2;finish(end,.12)
func burst(kind:String,pos:Vector3,color:Color):
	var node=group(pos+Vector3.UP*.15);var explosive=kind=="explosion";var radius=5.5 if explosive else 1.9 if kind=="flash" else 1.15
	var life=.85 if explosive else .48;var halo=ring(node,.5,color);halo.position.y=.04
	var tween=node.create_tween().set_parallel(true);tween.tween_property(halo,"scale",Vector3(radius,.6,radius),life).set_trans(Tween.TRANS_QUAD).set_ease(Tween.EASE_OUT);tween.tween_property(halo.material_override,"albedo_color:a",0.,life)
	for i in range(16 if explosive else 8):
		var angle=TAU*i/(16 if explosive else 8);var dir=Vector3(cos(angle),randf_range(.3,1.5),sin(angle)).normalized()
		var spark=M.sphere(node,Vector3.ZERO,Vector3(.12,.12,.32) if explosive else Vector3(.055,.055,.18),color);spark.material_override=glow(color);spark.cast_shadow=GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
		spark.look_at_from_position(node.global_position,node.global_position+dir)
		tween.tween_property(spark,"position",dir*radius,life).set_trans(Tween.TRANS_QUAD).set_ease(Tween.EASE_OUT);tween.tween_property(spark,"scale",Vector3.ZERO,life)
	if explosive or kind=="flash":
		var core=M.sphere(node,Vector3.UP*.4,Vector3.ONE*.6,color);core.material_override=glow(Color(1,.87,.56,.9) if explosive else Color(1,.98,.84,.8));core.cast_shadow=GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
		tween.tween_property(core,"scale",Vector3.ONE*(5 if explosive else 3),.22);tween.tween_property(core.material_override,"albedo_color:a",0.,.25)
	finish(node,life+.02)
func sync_fields(fields:Array,now:float):
	var live={}
	for field in fields:
		if field.kind not in ["smoke","slow"] or float(field.get("starts",0))>now:continue
		var key=str([field.kind,field.pos,field.until]);live[key]=true
		if not field_nodes.has(key):
			var node=Node3D.new();add_child(node);node.position=field.pos;field_nodes[key]=node
			if field.kind=="smoke":
				var mesh=MeshInstance3D.new();var sphere=SphereMesh.new();sphere.radius=5;sphere.height=10;sphere.radial_segments=32;sphere.rings=16;mesh.mesh=sphere;mesh.position.y=2;node.add_child(mesh)
				var shader=Shader.new();shader.code="shader_type spatial; render_mode unshaded, cull_disabled; uniform float opacity=0.98; varying vec3 p; void vertex(){p=VERTEX;} void fragment(){float n=sin(p.x*1.7+TIME*.35)*sin(p.z*1.8-TIME*.28)+sin(p.y*2.8+TIME*.5)*.35; float edge=pow(1.0-abs(dot(NORMAL,VIEW)),1.5); ALBEDO=mix(vec3(.39,.47,.51),vec3(.66,.73,.73),.5+n*.10)+edge*.025; ALPHA=opacity;}"
				var mat=ShaderMaterial.new();mat.shader=shader;mesh.material_override=mat;mesh.cast_shadow=GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
			else:
				var color=Color(.2,.68,1,.8) if field.team==0 else Color(1,.54,.18,.8);ring(node,5.,color).position.y=.06;ring(node,4.7,Color(color,.32)).position.y=.065
				var disc=M.cylinder(node,Vector3(0,.025,0),4.9,.02,Color(color,.10),Vector3.ZERO,-1.,48);disc.material_override=glow(Color(color,.10))
				for i in range(12):
					var a=TAU*i/12.;M.sphere(node,Vector3(cos(a)*4.7,.15,sin(a)*4.7),Vector3(.14,.3,.14),Color(color,1.))
		var node=field_nodes[key]
		if field.kind=="smoke":node.get_child(0).material_override.set_shader_parameter("opacity",minf(.99,maxf(0.,float(field.until)-now)*.99))
		else:node.rotation.y=sin(now*.6)*.015
	for key in field_nodes.keys():
		if not live.has(key):field_nodes[key].queue_free();field_nodes.erase(key)
static func device(parent:Node3D,kind:String,team:int):
	var color=Color("3b9dcc") if team==0 else Color("d98849");var metal=Color("354d5c")
	if kind=="cover":
		M.box(parent,Vector3(0,.64,0),Vector3(3.4,1.25,.55),metal)
		for x in [-1.1,0,1.1]:
			M.box(parent,Vector3(x,.68,-.30),Vector3(1.0,1.1,.08),color);M.box(parent,Vector3(x,.9,-.35),Vector3(.65,.035,.018),Color("d6e8e2"))
		for x in [-1.25,1.25]:M.box(parent,Vector3(x,.12,0),Vector3(.24,.22,1.),metal)
	else:
		M.cylinder(parent,Vector3(0,.18,0),.58,.22,metal,Vector3.ZERO,.42,12)
		M.cylinder(parent,Vector3(0,.78,0),.13,1.15,color)
		for i in range(3):
			var a=TAU*i/3.;M.box(parent,Vector3(cos(a)*.37,.16,sin(a)*.37),Vector3(.18,.15,.8),metal,Vector3(0,-a+PI/2,0))
		var head=Node3D.new();head.name="TurretHead";head.position.y=1.7;parent.add_child(head)
		M.box(head,Vector3.ZERO,Vector3(.6,.32,.52),color)
		for x in [-.16,.16]:
			M.cylinder(head,Vector3(x,0,-.48),.063,.76,metal,Vector3(PI/2,0,0));M.cylinder(head,Vector3(x,0,-.86),.078,.055,Color("a4b9bd"),Vector3(PI/2,0,0))
		M.sphere(head,Vector3(0,.08,-.30),Vector3(.12,.1,.035),Color("72eed4"));M.merge_children(head)
	M.merge_children(parent)
func throw_item(from:Vector3,to:Vector3):
	var node=group(from);M.cylinder(node,Vector3.ZERO,.08,.22,Color("a4b8a7"));M.cylinder(node,Vector3(0,.13,0),.055,.05,Color("e7d197"))
	var tween=node.create_tween();tween.tween_method(func(t):
		if is_instance_valid(node):node.position=from.lerp(to,t)+Vector3.UP*sin(t*PI)*2.;node.rotation=Vector3(t*7,0,t*4),0.,1.,.35)
	finish(node,.36)
