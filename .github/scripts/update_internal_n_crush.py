"""Install one explicitly pinned, verified public game release into GitHub Pages."""
from pathlib import Path, PurePosixPath
import hashlib, io, json, shutil, urllib.request, zipfile
root=Path(__file__).resolve().parents[2]
request=json.loads((root/'.github/internal-n-crush-release.json').read_text())
assert request['version']=='1.1.4'
url='https://github.com/Nukcanon/InternalNCrush/releases/download/internal-n-crush-v1.1.4/InternalNCrush_Web_v1.1.4.zip'
data=urllib.request.urlopen(url,timeout=120).read()
assert hashlib.sha256(data).hexdigest()==request['sha256'], 'Web archive hash mismatch'
stage=root/'web-release-stage';stage.mkdir(exist_ok=False)
with zipfile.ZipFile(io.BytesIO(data)) as archive:
    for name in archive.namelist():
        path=PurePosixPath(name)
        assert not path.is_absolute() and '..' not in path.parts
    archive.extractall(stage)
manifest=json.loads((stage/'build.json').read_text())
assert manifest['version']=='1.1.4' and manifest['threads'] is False
for item in manifest['files']:
    path=PurePosixPath(item['path']);assert not path.is_absolute() and '..' not in path.parts
    file=stage/item['path']
    assert file.stat().st_size==item['bytes']
    assert hashlib.sha256(file.read_bytes()).hexdigest()==item['sha256']
shutil.rmtree(root/'play');stage.rename(root/'play')
p=root/'internal-n-crush.html';text=p.read_text()
text=text.replace('internal-n-crush-v1.1.3/InternalNCrush_Windows_v1.1.3.zip','internal-n-crush-v1.1.4/InternalNCrush_Windows_v1.1.4.zip')
text=text.replace('v1.1.3 · Windows','v1.1.4 · Windows').replace('releases/tag/internal-n-crush-v1.1.3','releases/tag/internal-n-crush-v1.1.4')
text=text.replace('internal-n-crush-v1.1.3/InternalNCrush_NAS_Linux_v1.1.3.zip','internal-n-crush-v1.1.4/InternalNCrush_NAS_Linux_v1.1.4.zip')
p.write_text(text)
(root/'internal-n-crush-version.json').write_text(json.dumps({'version':'1.1.4'})+'\n')
print('Verified 1.1.4 installed; unrelated site files preserved.')
