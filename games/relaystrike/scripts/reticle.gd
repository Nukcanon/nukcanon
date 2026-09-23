extends Control
var game:Node
var ui:Node
func _draw():
	if not game.players.has(game.local_id):return
	var p=game.players[game.local_id]
	if not p.alive or p.flash>game.clock:return
	var a=game.actors[game.local_id];var center=size*.5
	var color=Color("d6fff4");var ads=a.input_state.ads and p.slot<2
	var scoped=ads and float(game.current_weapon(p).zoom)<=38 and p.reload<=game.clock
	if scoped:
		draw_circle(center,225,Color(.025,.06,.08,.5),false,2.,true)
		for direction in [Vector2.LEFT,Vector2.RIGHT,Vector2.UP,Vector2.DOWN]:draw_line(center+direction*8,center+direction*205,Color(.05,.1,.13,.85),1.,true)
		for i in [-3,-2,-1,1,2,3]:draw_line(center+Vector2(-4,i*35),center+Vector2(4,i*35),Color(.05,.1,.13,.85),1.,true)
	elif not ads:
		var gap=5.+minf(a.velocity.length(),12)*1.2+(12 if a.last_sprint else 0)+a.recoil*8
		for direction in [Vector2.LEFT,Vector2.RIGHT,Vector2.UP,Vector2.DOWN]:
			draw_line(center+direction*gap,center+direction*(gap+6),Color(.015,.035,.04,.8),4.)
			draw_line(center+direction*gap,center+direction*(gap+6),color,2.)
	draw_circle(center,2.5,Color(.02,.05,.06,.9));draw_circle(center,1.3,color)
	if Time.get_ticks_msec()<ui.hit_until:
		for d in [Vector2(-1,-1),Vector2(1,-1),Vector2(-1,1),Vector2(1,1)]:draw_line(center+d*7,center+d*12,Color("ffce7a"),2.,true)
	if game.clock-p.last_hit<.3 and p.protect<game.clock:
		draw_rect(Rect2(Vector2(4,4),size-Vector2(8,8)),Color(.95,.38,.25,.35),false,5.)
