"""Rebuild original synthetic audio and fetch the redistributable OFL font for build machines."""
from pathlib import Path
import urllib.request, hashlib, math, random, wave, struct
assets=Path(__file__).resolve().parents[1]/'assets'
(assets/'audio').mkdir(parents=True,exist_ok=True)
random.seed(84)
for name,dur,freq in [('shot',.14,110),('heavy',.25,62),('hit',.065,1700),('confirm',.17,1100),('reload',.26,500),('step',.065,130),('heal',.1,850)]:
 data=[]
 for i in range(int(22050*dur)):
  t=i/22050; env=(1-t/dur)**3; noise=random.uniform(-1,1)
  value=(noise*.65+math.sin(2*math.pi*freq*t)*.35)*env*.45 if name in ('shot','heavy','step','reload') else math.sin(2*math.pi*freq*t)*env*.3
  data.append(struct.pack('<h',int(value*32767)))
 with wave.open(str(assets/'audio'/f'{name}.wav'),'wb') as f:
  f.setparams((1,2,22050,0,'NONE','not compressed'));f.writeframes(b''.join(data))
font=assets/'Korean.ttf'
if not font.exists():
 font.write_bytes(urllib.request.urlopen('https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/Variable/TTF/Subset/NotoSansKR-VF.ttf',timeout=60).read())
expected=(assets/'FONT_SHA256.txt').read_text().strip()
if hashlib.sha256(font.read_bytes()).hexdigest()!=expected:raise SystemExit('Font checksum differs: inspect upstream change before rebuilding.')
print('Audio and Korean font ready; no runtime downloads required.')
