extends RefCounted
class_name Rules
const VERSION = "0.1.0"
const PORT = 27888
const DISCOVERY = 27889
const CLASSES = ["돌격", "정찰", "중화기", "공병", "통제", "메딕"]
const MODES = ["팀 데스매치", "개인전", "제한 부활 팀전", "거점 점령", "설치 / 해체"]
const SECONDARIES = ["pistol", "heavy_pistol", "auto_pistol", "eng_pistol", "burst_pistol", "med_pistol"]
static func medic_cap(count:int) -> int:
	return 0 if count <= 0 else 1 + maxi(0, count - 4) / 3
static func loss_reward(stage:int) -> int:
	return [1900,3000,3300][clampi(stage - 1,0,2)]
static func damage_water(hit_submerged:bool, shooter_wading:bool, target_outside:bool) -> float:
	return 0.5 if hit_submerged or (shooter_wading and target_outside) else 1.0
static func ammo_pickup(capacity:int) -> int:
	return maxi(1, int(ceil(capacity * 0.25)))
static func rating(p:Dictionary) -> float:
	return (p.get("kills",0)*100.0 + p.get("assists",0)*50.0 + p.get("objective",0)*35.0 + p.get("healed",0)*0.3 - p.get("deaths",0)*25.0) / maxf(1.0,p.get("played",60.0)/60.0)
static func default_options() -> Dictionary:
	return {"room":"Internal N Crush", "mode":0,"map":0,"max_players":32,"skills":true,"classes":true,"infinite":false,"join":2,"teams":0,"next_teams":0,"lives":3,"shared_lives":false,"minutes":10,"target":60,"bots":0,"friendly":false,"autoheal":true,"password":"","rounds":7}
static func balanced_ids(ps:Dictionary) -> Dictionary:
	var ids=ps.keys()
	ids.sort_custom(func(a,b):return rating(ps[a])>rating(ps[b]))
	var teams={0:[],1:[]};var sums=[0.0,0.0]
	for id in ids:
		var t=0 if teams[0].size()<teams[1].size() else 1 if teams[1].size()<teams[0].size() else (0 if sums[0]<=sums[1] else 1)
		teams[t].append(id);sums[t]+=rating(ps[id])
	return teams
