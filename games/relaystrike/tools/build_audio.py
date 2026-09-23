"""Original layered game sounds. Deterministic synthesis; no sampled game audio."""
from pathlib import Path
import json,math,random,wave,struct,hashlib
root=Path(__file__).resolve().parents[1];dest=root/'assets/audio';dest.mkdir(exist_ok=True,parents=True)
rate=44100;manifest={};weapons=json.loads((root/'assets/weapons.json').read_text())
def write(name,values,category,gain=0):
 pcm=b''.join(struct.pack('<h',int(max(-.92,min(.92,v))*32767)) for v in values)
 with wave.open(str(dest/(name+'.wav')),'wb') as f:f.setparams((1,2,rate,0,'NONE','not compressed'));f.writeframes(pcm)
 manifest[name]={'file':'res://assets/audio/'+name+'.wav','category':category,'gain_db':gain,'sha256':hashlib.sha256(pcm).hexdigest()}
for index,(wid,w) in enumerate(weapons.items()):
 if w['kind']!='gun':continue
 rng=random.Random(217+index*511);role=int(w['role']);side=w['slot']==1
 duration=.23 if side else [.32,.62,.39,.48,.22,.3][role]
 body=(160 if side else [130,67,89,74,196,148][role])*(.86+(index%5)*.08)
 cutoff=(2200 if side else [2600,1800,2100,1600,3100,2700][role])*(.84+index%4*.11)
 lp=slow=0.;values=[];phase=0.;alpha=1-math.exp(-2*math.pi*cutoff/rate)
 for i in range(int(duration*rate)):
  t=i/rate;n=rng.uniform(-1,1);lp+=alpha*(n-lp);slow+=.055*(n-slow)
  attack=min(1,t/.0012);crack=(n-lp)*math.exp(-t/(.009 if role==4 else .018))
  blast=lp*math.exp(-t/(duration*.19))*.95
  phase+=2*math.pi*body*(.6+.8*math.exp(-t*45))/rate
  thump=math.sin(phase)*math.exp(-t/(.04 if side else .075))*.4
  tail=slow*math.exp(-t/(duration*.45))*.45
  # Each fictional model has its own mechanical tick and body tuning.
  action=max(0,t-(.036+index%4*.014));tick=(math.sin(action*(3800+index*127))+n*.25)*math.exp(-action*170)*.08 if action>0 else 0
  v=(crack*.58+blast+thump+tail+tick)*attack*.66
  values.append(math.tanh(v*1.2)*.82)
 write('gun_'+wid,values,'weapon_volume',-1 if role in [1,3] else -3)
for surface in ['stone','metal','water']:
 for variant in range(4):
  rng=random.Random(1001+variant+['stone','metal','water'].index(surface)*99);values=[];lp=0.
  for i in range(int(rate*.28)):
   t=i/rate;n=rng.uniform(-1,1);lp+=(.026 if surface=='stone' else .065)*(n-lp)
   heel=math.exp(-((t-.025)/.018)**2);toe=math.exp(-((t-.098-variant*.006)/.035)**2)
   soft=lp*(heel*.8+toe*.65);body=math.sin(2*math.pi*(95+variant*9)*t)*heel*.08
   if surface=='metal':body+=math.sin(2*math.pi*(480+variant*97)*t)*math.exp(-t*37)*min(1,t/.003)*.03
   if surface=='water':soft=lp*(heel+toe)*1.4;body+=math.sin(2*math.pi*(260*t-190*t*t))*toe*.025
   values.append((soft+body)*.9)
  write('step_'+surface+'_'+str(variant),values,'step_volume',-1)
for name,duration,frequency in [('hit',.09,1400),('confirm',.18,1050),('heal',.22,680),('reload',.55,430),('switch',.12,270),('ui',.065,650)]:
 rng=random.Random(188+len(name));values=[];lp=0.
 for i in range(int(rate*duration)):
  t=i/rate;fade=(1-t/duration)**2;lp+=.1*(rng.uniform(-1,1)-lp)
  if name in ['reload','switch']:
   v=sum(math.exp(-max(0,t-at)*75)*(.14*lp+.055*math.sin(2*math.pi*(frequency+at*900)*t)) for at in ([.015,.19,.39] if name=='reload' else [.01,.055]) if t>at)
  else:v=math.sin(2*math.pi*frequency*t)*fade*.07+math.sin(2*math.pi*frequency*1.5*t)*fade*.025
  values.append(v*min(1,t/.004))
 write(name,values,'ui_volume')
(root/'assets/audio_manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('AUDIO_BUILT',len(manifest),'unique original clips;',sum(1 for k in manifest if k.startswith('gun_')),'weapon voices')
