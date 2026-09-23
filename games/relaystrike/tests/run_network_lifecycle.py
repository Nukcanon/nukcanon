"""Eight independent peers, idle retention, same-process rejoin and server restart."""
import os,subprocess,time,tempfile
from pathlib import Path
project=Path(__file__).resolve().parents[1]
base=[os.environ.get('GODOT','godot'),'--headless','--path',str(project),'--max-fps','20','--script','tests/network_lifecycle.gd']
with tempfile.TemporaryDirectory(prefix='inc-lifecycle-') as d:
 logs=Path(d);ps=[];files=[]
 try:
  f=(logs/'server.log').open('w');files.append(f);server=subprocess.Popen(base+['--','--life-server'],stdout=f,stderr=subprocess.STDOUT);ps.append(server);time.sleep(2)
  for i in range(8):
   f=(logs/f'client{i}.log').open('w');files.append(f);ps.append(subprocess.Popen(base+['--',f'--life-id={i}'],stdout=f,stderr=subprocess.STDOUT));time.sleep(.15)
  for p in ps:p.wait(timeout=135)
  for f in files:f.flush()
  errors=[]
  for path in logs.glob('*.log'):
   text=path.read_text();print(path.name, '\n'.join(line for line in text.splitlines() if any(k in line for k in ['JOINED','LIFECYCLE','RESTART','ERROR','Error'])))
   if 'ERROR' in text:errors.append(path.name)
  assert not errors and all(p.returncode==0 for p in ps),(errors,[p.returncode for p in ps])
  print('NETWORK_LIFECYCLE_OK 8 peers, 105 seconds, client reconnect and server restart')
 finally:
  for p in ps:
   if p.poll() is None:p.terminate()
  for p in ps:
   try:p.wait(timeout=5)
   except subprocess.TimeoutExpired:p.kill()
  for f in files:f.close()
