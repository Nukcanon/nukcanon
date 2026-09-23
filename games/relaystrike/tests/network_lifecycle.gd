extends SceneTree
var g:Node
var start=0
var server_mode=false
var label_id=""
var rejoins=0
var lost=0
var last_phase="menu"
var max_players=0
var saw_restarted=false
var departed=false
var restart_done=false
var restart_at=0
var next_join=0
var finish_ms=105000
var snapshots=0
func _initialize():call_deferred("run")
func run():
	g=load("res://scripts/game.gd").new();g.name="Lifecycle";root.add_child(g);start=Time.get_ticks_msec()
	for arg in OS.get_cmdline_user_args():
		if arg=="--life-server":server_mode=true
		if arg.begins_with("--life-id="):label_id=arg.trim_prefix("--life-id=")
	if server_mode:g.dedicated=true;g.host_game()
	else:g.profile.nick="LIFE"+label_id;g.profile.token="lifecycle_unique_identity_"+label_id;g.join_game("127.0.0.1")
	physics_frame.connect(drive)
func drive():
	var elapsed=Time.get_ticks_msec()-start
	max_players=maxi(max_players,g.players.size())
	if server_mode:
		if elapsed>35000 and not restart_done:
			restart_done=true;g.leave_game();restart_at=elapsed;print("SERVER_RESTART_BEGIN count=",max_players)
		elif restart_done and g.phase=="menu" and elapsed-restart_at>1500:g.host_game();print("SERVER_RESTARTED")
		if elapsed>finish_ms+4000:
			print("LIFECYCLE_SERVER peers=",g.players.size()," max=",max_players);quit(0 if g.players.size()>=8 else 1)
		return
	if g.phase=="lobby":
		if last_phase!="lobby":rejoins+=1;print("JOINED id=",label_id," times=",rejoins," seq=",g.received_sequence)
		if g.received_sequence>=0:snapshots+=1
		if label_id=="2" and elapsed>16000 and not departed:
			departed=true;g.request_leave();next_join=Time.get_ticks_msec()+1000
	if g.phase=="menu" and last_phase=="lobby":lost+=1
	if g.phase=="menu" and not g.connection_busy and Time.get_ticks_msec()>next_join:
		next_join=Time.get_ticks_msec()+2000;g.join_game("127.0.0.1")
	last_phase=g.phase
	if elapsed>finish_ms:
		var age=Time.get_ticks_msec()-g.last_snapshot_ms
		var ok=g.phase=="lobby" and g.players.size()==8 and rejoins>=2 and age<3000 and snapshots>300
		print("LIFECYCLE_CLIENT id=",label_id," joins=",rejoins," population=",g.players.size()," gap_ms=",age," frames=",snapshots," OK=",ok)
		# Keep connected until the server records its final population.
		finish_ms+=20000
		if ok:await create_timer(7).timeout;quit(0)
		else:quit(1)
