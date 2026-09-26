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


def fixture(extra=None, corrupt=False, guide=False):
    name = 'game-' + COMMIT[:12]
    files = {'index.html': ('<script>const GODOT_CONFIG = ' + json.dumps({'executable': name}) + ';</script>').encode(), name + '.js': b'engine', name + '.wasm': b'\x00asmtest', name + '.pck': b'GDPCtest'}
    if guide:
        files.update({'guide/' + name + '.jpg': b'\xff\xd8mock-image' for name in ('controls', 'touch', 'settings', 'lan', 'internet')})
    manifest = {'version': '1.2.2', 'threads': False, 'source_commit': COMMIT, 'files': [{'path': p, 'bytes': len(c), 'sha256': hashlib.sha256(c).hexdigest()} for p, c in files.items()]}
    if corrupt:
        files[name + '.pck'] = b'GDPCbad!'
    files['build.json'] = json.dumps(manifest).encode()
    files.update(extra or {})
    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, 'w') as z:
        for p, c in files.items():
            z.writestr(p, c)
    data = buffer.getvalue()
    return data, {'version': '1.2.2', 'sha256': hashlib.sha256(data).hexdigest(), 'source_commit': COMMIT}


class InstallerTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        (self.root / '.github').mkdir()
        (self.root / 'play').mkdir()
        (self.root / 'play/old.js').write_text('previous')
        (self.root / 'unrelated.txt').write_text('keep')
        self.page = '<a href="play/">Play</a><a href="' + installer.RELEASE + 'InternalNCrush_Windows_v1.2.2.zip">Download</a>'
        (self.root / 'internal-n-crush.html').write_text(self.page)

    def assert_unchanged(self):
        self.assertEqual((self.root / 'play/old.js').read_text(), 'previous')
        self.assertEqual((self.root / 'internal-n-crush.html').read_text(), self.page)

    def test_replacement_and_cache_links(self):
        data, expected = fixture()
        installer.install(self.root, data, expected)
        self.assertFalse((self.root / 'play/old.js').exists())
        self.assertTrue((self.root / ('play/game-' + COMMIT[:12] + '.wasm')).exists())
        self.assertEqual((self.root / 'unrelated.txt').read_text(), 'keep')
        self.assertEqual((self.root / 'internal-n-crush.html').read_text().count('?build=' + expected['sha256'][:12]), 2)
        installer.install(self.root, data, expected)
        self.assertEqual((self.root / 'internal-n-crush.html').read_text().count('?build='), 2)

    def test_archive_hash_rejected(self):
        data, expected = fixture()
        expected['sha256'] = '0' * 64
        with self.assertRaises(AssertionError):
            installer.install(self.root, data, expected)
        self.assert_unchanged()

    def test_bad_paths_unlisted_files_and_corrupt_payload_rejected(self):
        cases = [fixture(extra={'../outside.txt': b'bad'}), fixture(extra={'unlisted.txt': b'bad'}), fixture(corrupt=True)]
        for data, expected in cases:
            with self.subTest(expected=expected):
                with self.assertRaises(AssertionError):
                    installer.install(self.root, data, expected)
                self.assert_unchanged()

    def test_guide_installs_with_verified_screenshots(self):
        template = self.root / '.github/internal-n-crush-page.html'
        template.write_text(self.page + '<h2>조작방법</h2>v1.1.6 · Windows')
        data, expected = fixture(guide=True)
        installer.install(self.root, data, expected)
        self.assertIn('v1.2.2 · Windows', (self.root / 'internal-n-crush.html').read_text())
        self.assertTrue((self.root / 'play/guide/touch.jpg').is_file())

    def test_guide_missing_screenshots_preserves_live_page(self):
        (self.root / '.github/internal-n-crush-page.html').write_text('new guide')
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


