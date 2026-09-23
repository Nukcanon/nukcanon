extends Node3D
class_name WeaponVisual
var magazine:Node3D
var action_part:Node3D
var left_hand:Node3D
var muzzle:Marker3D
var spec={}
var mag_origin=Vector3.ZERO
var action_origin=Vector3.ZERO
var hand_origin=Vector3.ZERO
var mats={}
func material(c:Color):
	if mats.has(c):return mats[c]
	var m=StandardMaterial3D.new();m.albedo_color=c;m.roughness=.62;m.cull_mode=BaseMaterial3D.CULL_DISABLED;mats[c]=m;return m
func block(parent:Node,pos:Vector3,size:Vector3,c:Color,tilt=0.) -> MeshInstance3D:
	var n=MeshInstance3D.new();var mesh=beveled_box(size);n.mesh=mesh;n.position=pos;n.rotation.x=tilt;n.material_override=material(c);parent.add_child(n);return n
func tube(parent:Node,pos:Vector3,radius:float,length:float,c:Color) -> MeshInstance3D:
	var n=MeshInstance3D.new();var m=CylinderMesh.new();m.top_radius=radius;m.bottom_radius=radius*.94;m.height=length;m.radial_segments=10;n.mesh=m;n.position=pos;n.rotation.x=PI/2;n.material_override=material(c);parent.add_child(n);return n
func build(w:Dictionary,hands=true):
	spec=w
	var idx=int(w.get("model_index",0));var role=int(w.role);var pistol=int(w.slot)==1 and w.kind=="gun"
	var primary=Color("243642");var edge=Color("647b86");var accent=[Color("5fd0c5"),Color("b0c887"),Color("d0b078"),Color("f1a06a"),Color("8bbbf1"),Color("72dcb3")][role]
	if idx%3==1:primary=Color("3c4d58")
	if idx%3==2:primary=Color("655b4b")
	var length=.28 if pistol else [.57,.85,.7,.64,.42,.5][role]+(idx%4)*.035
	if w.name=="FOLD":length=.34
	var width=.065 if pistol else .105 if role!=2 else .145
	block(self,Vector3(0,0,-length*.3),Vector3(width,.105,length*.55),primary)
	block(self,Vector3(0,-.015,-length*.65),Vector3(width*.8,.078,length*.3),edge)
	tube(self,Vector3(0,.012,-length*.87),.024 if role!=3 else .032,length*.34,Color("18242c"))
	tube(self,Vector3(0,.012,-length*1.04),.032,.048,edge)
	# Open sight stays below the reticle; no opaque scope is drawn during scoped ADS.
	for x in [-.038,.038]:block(self,Vector3(x,.073,-length*.16),Vector3(.01,.042,.018),edge)
	block(self,Vector3(0,.064,-length*.81),Vector3(.012,.025,.018),accent)
	block(self,Vector3(0,-.096,.005),Vector3(.069,.17,.09),primary,-.22)
	if not pistol:
		block(self,Vector3(0,-.025,.12),Vector3(.062,.08,.24),edge)
		block(self,Vector3(0,-.048,.22),Vector3(.086,.16,.055),primary,-.15)
		for i in range(4+idx%3):block(self,Vector3(width*.51,.015,-length*(.42+i*.04)),Vector3(.009,.025,.014),Color("13242e"))
	magazine=Node3D.new();add_child(magazine);magazine.position=Vector3(0,-.095,-.16 if not pistol else .008)
	if w.reload_style=="box" or w.name=="HIVE":
		block(magazine,Vector3(0,-.05,0),Vector3(.17,.16,.15),edge)
		block(magazine,Vector3(.086,-.05,0),Vector3(.008,.08,.11),accent)
	elif w.reload_style in ["shell","break"]:
		tube(magazine,Vector3(0,.02,-length*.24),.026,length*.6,edge)
	else:
		block(magazine,Vector3(0,-.04,0),Vector3(.058,.17 if not pistol else .07,.09),edge,-.12)
		block(magazine,Vector3(0,-.12,0),Vector3(.068,.027,.104),primary)
	if role==1 and not pistol:
		block(self,Vector3(0,.086,-.24),Vector3(.036,.07,.18),edge)
		tube(self,Vector3(0,.135,-.25),.05,.26+idx%3*.04,primary)
		tube(self,Vector3(0,.135,-.4),.044,.009,Color("5593a0"))
	if role==2 and not pistol:
		for x in [-.065,.065]:block(self,Vector3(x,-.085,-length*.7),Vector3(.022,.2,.026),edge,.4)
	if w.name=="FOLD":tube(self,Vector3(.048,.012,-.3),.026,.24,edge)
	if w.name=="TRIAD":block(self,Vector3(.063,.003,-.15),Vector3(.035,.076,.13),accent)
	if w.name=="MONOLITH":block(self,Vector3(0,-.016,-.72),Vector3(.12,.1,.12),primary)
	if w.kind!="gun":
		for x in [-.09,.09]:tube(self,Vector3(x,-.03,-.18),.05,.28,accent)
		block(self,Vector3(0,.069,-.18),Vector3(.085,.02,.13),accent)
		if w.kind=="heal":
			block(self,Vector3(.061,.012,-.1),Vector3(.012,.09,.025),Color.WHITE);block(self,Vector3(.061,.012,-.1),Vector3(.012,.025,.09),Color.WHITE)
	action_part=Node3D.new();add_child(action_part);action_part.position=Vector3(0,.046,-.15)
	block(action_part,Vector3.ZERO,Vector3(width*.7,.035,.15 if not pistol else .22),edge)
	block(self,Vector3(width*.51,.004,-.05),Vector3(.007,.025,.064),accent)
	muzzle=Marker3D.new();muzzle.position=Vector3(0,.012,-length*1.07);add_child(muzzle)
	mag_origin=magazine.position;action_origin=action_part.position
	left_hand=Node3D.new();add_child(left_hand);left_hand.position=Vector3(-.055,-.09,-.31 if not pistol else -.055);hand_origin=left_hand.position
	if hands:
		make_hand(self,Vector3(.036,-.12,.025),false)
		make_hand(left_hand,Vector3.ZERO,true)
func make_hand(parent:Node,pos:Vector3,left:bool):
	var glove=Color("35454a");var cuff=Color("c4ab8a");var side=-1. if left else 1.
	var sleeve=tube(parent,pos+Vector3(side*.085,-.085,.115),.064,.3,cuff);sleeve.rotation.x+=.32;sleeve.rotation.y=side*.24
	block(parent,pos+Vector3(side*.028,-.025,.025),Vector3(.085,.1,.115),glove,-.12)
	block(parent,pos+Vector3(side*.028,.022,.009),Vector3(.075,.025,.07),Color("52656b"))
	for i in range(4):block(parent,pos+Vector3(-side*.023,-.008-i*.019,-.034),Vector3(.04,.018,.046),glove,.25)
	block(parent,pos+Vector3(side*.06,.008,-.04),Vector3(.026,.032,.064),glove,-.5)
func animate_reload(t:float,recoil:float):
	magazine.position=mag_origin;action_part.position=action_origin;left_hand.position=hand_origin;magazine.rotation=Vector3.ZERO;action_part.rotation=Vector3.ZERO
	if t<0:
		action_part.position.z+=recoil*.045
		if spec.name=="PULSE":left_hand.position.z+=recoil*.08
		return
	var wave=sin(pow(clampf(t,0,1),.9+int(spec.get("model_index",0))%4*.08)*PI)
	match str(spec.reload_style):
		"shell":
			left_hand.position+=Vector3(.06,-.09,.17)*absf(sin(t*PI*3));action_part.position.z+=.03*wave
		"break":
			magazine.rotation.x=wave*.55;left_hand.position+=Vector3(0,-.16,.1)*wave
		"box":
			action_part.rotation.x=-wave*1.1;magazine.position+=Vector3(-.18,-.14,0)*wave;left_hand.position+=Vector3(-.1,.11,.08)*wave
		"pistol":
			magazine.position.y-=wave*.22;left_hand.position+=Vector3(.025,-.15,.15)*wave;action_part.position.z+=.065*maxf(0,sin((t-.65)*PI*3))
		_:
			magazine.position+=Vector3(-.06,-.24,.07)*wave;left_hand.position+=Vector3(.055,-.12,.17)*wave;action_part.position.z+=.055*maxf(0,sin((t-.7)*PI*3))
	if t>.97:magazine.rotation=Vector3.ZERO;action_part.rotation=Vector3.ZERO

func beveled_box(size:Vector3) -> ArrayMesh:
	var x=size.x*.5;var y=size.y*.5;var z=size.z*.5;var c=minf(x,y)*.28
	var ring=[Vector2(-x+c,-y),Vector2(x-c,-y),Vector2(x,-y+c),Vector2(x,y-c),Vector2(x-c,y),Vector2(-x+c,y),Vector2(-x,y-c),Vector2(-x,-y+c)]
	var surface=SurfaceTool.new();surface.begin(Mesh.PRIMITIVE_TRIANGLES)
	for i in range(8):
		var v=ring[i];var next=ring[(i+1)%8]
		var a=Vector3(v.x,v.y,-z);var b=Vector3(next.x,next.y,-z);var d=Vector3(v.x,v.y,z);var e=Vector3(next.x,next.y,z)
		for point in [a,d,b,b,d,e,Vector3(0,0,-z),b,a,Vector3(0,0,z),d,e]:surface.add_vertex(point)
	surface.generate_normals();return surface.commit()
