"""Offline checks for replacement installs and rejection before existing files change."""
from pathlib import Path
import hashlib
import importlib.util
import io
import json
import tempfile
import unittest
import zipfile

spec = importlib.util.spec_from_file_location('installer', Path(__file__).with_name('update_internal_n_crush.py'))
installer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(installer)
COMMIT = 'a' * 40


def jpeg(blank=False):
    from PIL import Image
    image = Image.new('L', (64, 36), 32)
    if not blank:
        image.putdata([(x * 37 + y * 91) % 256 for y in range(36) for x in range(64)])
    buffer = io.BytesIO()
    image.save(buffer, 'JPEG')
    return buffer.getvalue()


def fixture(extra=None, corrupt=False, guide=False, blank=()):
    name = 'game-' + COMMIT[:12]
    files = {'index.html': ('<script>const GODOT_CONFIG = ' + json.dumps({'executable': name}) + ';</script>').encode(), name + '.js': b'engine /* INC_WEBGL_SPARSE_HANDLES_V1 */', name + '.wasm': b'\x00asmtest', name + '.pck': b'GDPCtest'}
    if guide:
        files.update({'guide/' + name + '.jpg': jpeg(name in blank) for name in ('controls', 'touch', 'settings', 'lan', 'internet')})
    manifest = {'version': '1.3.0', 'threads': False, 'source_commit': COMMIT, 'files': [{'path': p, 'bytes': len(c), 'sha256': hashlib.sha256(c).hexdigest()} for p, c in files.items()]}
    if corrupt:
        files[name + '.pck'] = b'GDPCbad!'
    files['build.json'] = json.dumps(manifest).encode()
    files.update(extra or {})
    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, 'w') as z:
        for p, c in files.items():
            z.writestr(p, c)
    data = buffer.getvalue()
    return data, {'version': '1.3.0', 'sha256': hashlib.sha256(data).hexdigest(), 'source_commit': COMMIT}


class InstallerTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        (self.root / '.github').mkdir()
        (self.root / 'play').mkdir()
        (self.root / 'play/old.js').write_text('previous', encoding='utf-8')
        (self.root / 'unrelated.txt').write_text('keep', encoding='utf-8')
        self.page = '<a href="play/">Play</a><a href="' + installer.release('1.3.0') + 'InternalNCrush_Windows_v1.3.0.zip">Download</a>'
        (self.root / 'internal-n-crush.html').write_text(self.page, encoding='utf-8')

    def assert_unchanged(self):
        self.assertEqual((self.root / 'play/old.js').read_text(encoding='utf-8'), 'previous')
        self.assertEqual((self.root / 'internal-n-crush.html').read_text(encoding='utf-8'), self.page)

    def test_replacement_and_cache_links(self):
        data, expected = fixture()
        installer.install(self.root, data, expected)
        self.assertFalse((self.root / 'play/old.js').exists())
        self.assertTrue((self.root / ('play/game-' + COMMIT[:12] + '.wasm')).exists())
        self.assertEqual((self.root / 'unrelated.txt').read_text(encoding='utf-8'), 'keep')
        self.assertEqual((self.root / 'internal-n-crush.html').read_text(encoding='utf-8').count('?build=' + expected['sha256'][:12]), 2)
        installer.install(self.root, data, expected)
        self.assertEqual((self.root / 'internal-n-crush.html').read_text(encoding='utf-8').count('?build='), 2)

    def test_windows_button_downloads_the_setup_program(self):
        page = self.root / 'internal-n-crush.html'
        setup = '<a class="download" href="' + installer.release('1.2.9') + 'InternalNCrush_Setup_v1.2.9.exe?build=000000000000">Windows</a><p>앱: InternalNCrush_Setup_v1.2.9.exe</p>'
        for before in (self.page, '<a href="play/">Play</a>' + setup):
            with self.subTest(before=before):
                page.write_text(before, encoding='utf-8')
                data, expected = fixture()
                installer.install(self.root, data, expected)
                html = page.read_text(encoding='utf-8')
                self.assertIn(installer.release('1.3.0') + 'InternalNCrush_Setup_v1.3.0.exe?build=' + expected['sha256'][:12], html)
                self.assertNotIn('InternalNCrush_Windows_v', html)
                self.assertNotIn('1.2.9', html)

    def test_archive_hash_rejected(self):
        data, expected = fixture()
        expected['sha256'] = '0' * 64
        with self.assertRaises(AssertionError):
            installer.install(self.root, data, expected)
        self.assert_unchanged()

    def test_stale_nas_download_link_updates_with_windows_and_web(self):
        page = self.root / 'internal-n-crush.html'
        page.write_text(self.page + '<a href="https://github.com/Nukcanon/InternalNCrush/releases/download/internal-n-crush-v1.1.8/InternalNCrush_NAS_Linux_v1.1.8.zip">NAS</a>', encoding='utf-8')
        data, expected = fixture()
        installer.install(self.root, data, expected)
        html = page.read_text(encoding='utf-8')
        self.assertNotIn('v1.1.8', html)
        self.assertNotIn('github.com/Nukcanon/InternalNCrush/', html)
        self.assertIn(installer.release('1.3.0') + 'InternalNCrush_NAS_Linux_v1.3.0.zip?build=' + expected['sha256'][:12], html)

    def test_bad_paths_unlisted_files_and_corrupt_payload_rejected(self):
        cases = [fixture(extra={'../outside.txt': b'bad'}), fixture(extra={'unlisted.txt': b'bad'}), fixture(corrupt=True)]
        for data, expected in cases:
            with self.subTest(expected=expected):
                with self.assertRaises(AssertionError):
                    installer.install(self.root, data, expected)
                self.assert_unchanged()

    def test_guide_installs_with_verified_screenshots(self):
        template = self.root / '.github/internal-n-crush-page.html'
        template.write_text(self.page + '<h2>조작방법</h2>v1.1.6 · Windows', encoding='utf-8')
        data, expected = fixture(guide=True)
        installer.install(self.root, data, expected)
        self.assertIn('v1.3.0 · Windows', (self.root / 'internal-n-crush.html').read_text(encoding='utf-8'))
        self.assertTrue((self.root / 'play/guide/touch.jpg').is_file())

    def test_blank_guide_keeps_live_screenshot(self):
        (self.root / '.github/internal-n-crush-page.html').write_text(self.page, encoding='utf-8')
        (self.root / 'play/guide').mkdir()
        live = jpeg()
        (self.root / 'play/guide/controls.jpg').write_bytes(live)
        data, expected = fixture(guide=True, blank=('controls',))
        installer.install(self.root, data, expected)
        self.assertEqual((self.root / 'play/guide/controls.jpg').read_bytes(), live)
        self.assertFalse(installer.blank_screen((self.root / 'play/guide/touch.jpg').read_bytes()))

    def test_blank_guide_without_live_screenshot_rejected(self):
        (self.root / '.github/internal-n-crush-page.html').write_text(self.page, encoding='utf-8')
        data, expected = fixture(guide=True, blank=('touch',))
        with self.assertRaises(AssertionError):
            installer.install(self.root, data, expected)
        self.assert_unchanged()

    def test_guide_missing_screenshots_preserves_live_page(self):
        (self.root / '.github/internal-n-crush-page.html').write_text('new guide', encoding='utf-8')
        data, expected = fixture()
        with self.assertRaises((AssertionError, KeyError)):
            installer.install(self.root, data, expected)
        self.assert_unchanged()

    def test_source_mismatch_rejected(self):
        data, expected = fixture()
        expected['source_commit'] = 'b' * 40
        with self.assertRaises(AssertionError):
            installer.install(self.root, data, expected)
        self.assert_unchanged()


if __name__ == '__main__':
    unittest.main()
