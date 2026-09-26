"""Verify and install the owner's 1.1.8 Web release into Pages."""
from pathlib import Path, PurePosixPath
import argparse
import hashlib
import io
import json
import re
import tempfile
import urllib.request
import zipfile

ROOT = Path(__file__).resolve().parents[2]
RELEASE = 'https://github.com/Nukcanon/InternalNCrush/releases/download/internal-n-crush-v1.1.8/'


def download(name):
    request = urllib.request.Request(RELEASE + name, headers={'Cache-Control': 'no-cache'})
    with urllib.request.urlopen(request, timeout=120) as response:
        return response.read()


def verified_files(data, expected):
    assert expected['version'] == '1.1.8', 'Unexpected version'
    assert hashlib.sha256(data).hexdigest() == expected['sha256'], 'Web archive hash mismatch'
    files = {}
    with zipfile.ZipFile(io.BytesIO(data)) as archive:
        total = 0
        for item in archive.infolist():
            path = PurePosixPath(item.filename)
            assert not path.is_absolute() and '..' not in path.parts and '\\' not in item.filename, 'Unsafe archive path'
            assert path.as_posix() == item.filename.rstrip('/'), 'Non-canonical archive path'
            assert (item.external_attr >> 16) & 0o170000 != 0o120000, 'Archive symlink'
            if item.is_dir():
                continue
            assert item.filename not in files, 'Duplicate archive path'
            assert item.file_size < 100 * 1024 * 1024, 'File exceeds Git limit'
            total += item.file_size
            assert total < 512 * 1024 * 1024, 'Unexpected archive size'
            files[item.filename] = archive.read(item)
    manifest = json.loads(files['build.json'])
    assert manifest['version'] == '1.1.8' and manifest['threads'] is False, 'Unexpected Web build'
    if expected.get('source_commit'):
        assert manifest.get('source_commit') == expected['source_commit'], 'Source commit mismatch'
    listed = set()
    for item in manifest['files']:
        path = item['path']
        assert path not in listed and path != 'build.json', 'Duplicate manifest entry'
        listed.add(path)
        content = files[path]
        assert len(content) == item['bytes'], 'File size mismatch: ' + path
        assert hashlib.sha256(content).hexdigest() == item['sha256'], 'File hash mismatch: ' + path
    assert listed | {'build.json'} == set(files), 'Unlisted archive files'
    html = files['index.html'].decode('utf-8')
    config = json.loads(re.search(r'const GODOT_CONFIG = (\{[^\n]+\});', html).group(1))
    executable = config['executable']
    assert re.fullmatch(r'[A-Za-z0-9_-]+', executable), 'Unsafe executable basename'
    for suffix in ('.js', '.wasm', '.pck'):
        assert files[executable + suffix], 'Missing runtime file'
    assert files[executable + '.wasm'].startswith(b'\x00asm'), 'Invalid WebAssembly file'
    assert files[executable + '.pck'].startswith(b'GDPC'), 'Invalid Godot pack'
    return files


def install(root, data, expected):
    files = verified_files(data, expected)
    revision = expected['sha256'][:12]
    page = root / 'internal-n-crush.html'
    template = root / '.github/internal-n-crush-page.html'
    html = (template if template.is_file() else page).read_text(encoding='utf-8')
    if template.is_file():
        for name in ('controls', 'touch', 'settings', 'lan', 'internet'):
            assert files['guide/' + name + '.jpg'].startswith(b'\xff\xd8'), 'Missing guide screenshot: ' + name
    html = re.sub(r'<br>\s*<a[^>]*>소스 코드</a>\s*·\s*<a[^>]*>변경 내용</a>', '', html)
    html = re.sub(r'href="play/(?:\?[^"]*)?"', f'href="play/?build={revision}"', html)
    download_url = RELEASE + 'InternalNCrush_Windows_v1.1.8.zip'
    html = re.sub(r'href="https://github.com/Nukcanon/InternalNCrush/releases/download/internal-n-crush-v1\.1\.[345678]/InternalNCrush_Windows_v1\.1\.[345678]\.zip(?:\?[^"]*)?"', f'href="{download_url}?build={revision}"', html)
    html = re.sub(r'v1\.1\.[345678] · Windows', 'v1.1.8 · Windows', html)
    html = re.sub(r'releases/tag/internal-n-crush-v1\.1\.[345678]', 'releases/tag/internal-n-crush-v1.1.8', html)
    with tempfile.TemporaryDirectory(prefix='.web-release-', dir=root) as temporary:
        stage = Path(temporary) / 'new'
        stage.mkdir()
        for name, content in files.items():
            target = stage / name
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(content)
        destination = root / 'play'
        backup = Path(temporary) / 'previous'
        if destination.exists():
            destination.rename(backup)
        try:
            stage.rename(destination)
        except OSError:
            if backup.exists():
                backup.rename(destination)
            raise
    page.write_text(html, encoding='utf-8')
    (root / '.github/internal-n-crush-release.json').write_text(json.dumps(expected, indent=2) + '\n', encoding='utf-8')
    (root / 'internal-n-crush-version.json').write_text(json.dumps({'version': '1.1.8', 'build': revision, 'source_commit': expected.get('source_commit', '')}) + '\n', encoding='utf-8')
    print('Verified 1.1.8 installed:', revision)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--refresh-release', action='store_true', help='Use the descriptor published after the new game build passed CI')
    options = parser.parse_args()
    expected = json.loads((ROOT / '.github/internal-n-crush-release.json').read_text())
    if options.refresh_release:
        expected = json.loads(download('WEB_RELEASE_v1.1.8.json'))
        assert expected.get('source_commit') == '9ab8df70c0a0187b758e3ec7bbc2ff852cf2f176', 'New release descriptor is missing its source commit; build the game repository first'
    install(ROOT, download('InternalNCrush_Web_v1.1.8.zip'), expected)


if __name__ == '__main__':
    main()


