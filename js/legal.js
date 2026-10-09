// 이용약관·개인정보 처리방침: legal/meta.json에 적힌 조항 파일(Markdown)을
// 파일 이름 순서로 불러와 한 페이지로 보여 줍니다. 편집 방법은 legal/README.md.
(() => {
  'use strict';
  const page = document.body.dataset.legal;
  const box = document.getElementById('legal-body');
  const metaLine = document.getElementById('legal-meta');
  if (!page || !box) return;
  const source = 'https://github.com/Nukcanon/nukcanon/tree/main/legal/' + page;

  const escape = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  // 외부 주소(https, mailto)와 사이트 안 상대 주소만 링크로 만듭니다.
  const safeUrl = url => /^(https?:\/\/|mailto:)/i.test(url) || !/^[^/?#]*:/.test(url);

  function inline(text) {
    return text.split('`').map((part, index) => {
      if (index % 2) return '<code>' + escape(part) + '</code>';
      return escape(part)
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (all, label, url) => safeUrl(url) ? '<a href="' + url + '">' + label + '</a>' : label)
        .replace(/&lt;(https?:\/\/[^\s&]+)&gt;/g, '<a href="$1">$1</a>')
        .replace(/&lt;([^\s&@]+@[^\s&@]+)&gt;/g, '<a href="mailto:$1">$1</a>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    }).join('');
  }

  const ITEM = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/;
  const isTable = (line, next) => /^\s*\|/.test(line) && next !== undefined && /^\s*\|?\s*:?-{3,}/.test(next);
  const startsBlock = (line, next) => /^#{1,4}\s/.test(line) || ITEM.test(line) || /^\s*>/.test(line) || isTable(line, next);
  const cells = line => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim());

  function list(items) {
    let pos = 0;
    function level() {
      const first = items[pos], depth = first.indent, ordered = first.ordered;
      let out = ordered ? (first.number > 1 ? '<ol start="' + first.number + '">' : '<ol>') : '<ul>';
      while (pos < items.length && items[pos].indent >= depth) {
        const item = items[pos++];
        out += '<li>' + inline(item.text);
        if (pos < items.length && items[pos].indent > depth) out += level();
        out += '</li>';
        if (pos < items.length && items[pos].indent === depth && items[pos].ordered !== ordered) break;
      }
      return out + (ordered ? '</ol>' : '</ul>');
    }
    let html = '';
    while (pos < items.length) html += level();
    return html;
  }

  function render(markdown) {
    const lines = markdown.replace(/^﻿/, '').replace(/\r\n?/g, '\n').split('\n');
    let html = '', i = 0, match;
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }
      if ((match = /^(#{1,4})\s+(.*)$/.exec(line))) {
        const level = Math.max(2, match[1].length);
        html += '<h' + level + '>' + inline(match[2].trim()) + '</h' + level + '>';
        i++;
      } else if (isTable(line, lines[i + 1])) {
        const head = cells(line);
        i += 2;
        let rows = '';
        while (i < lines.length && /^\s*\|/.test(lines[i])) {
          rows += '<tr>' + cells(lines[i++]).map((cell, k) => '<td data-label="' + escape(head[k] || '') + '">' + inline(cell) + '</td>').join('') + '</tr>';
        }
        html += '<div class="legal-table"><table><thead><tr>' + head.map(cell => '<th scope="col">' + inline(cell) + '</th>').join('') + '</tr></thead><tbody>' + rows + '</tbody></table></div>';
      } else if (ITEM.test(line)) {
        const items = [];
        while (i < lines.length && lines[i].trim()) {
          const item = ITEM.exec(lines[i]);
          if (item) items.push({ indent: item[1].replace(/\t/g, '    ').length, ordered: /\d/.test(item[2]), number: parseInt(item[2], 10) || 1, text: item[3] });
          else if (/^\s/.test(lines[i])) items[items.length - 1].text += ' ' + lines[i].trim();
          else break;
          i++;
        }
        html += list(items);
      } else if (/^\s*>/.test(line)) {
        const quoted = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) quoted.push(lines[i++].replace(/^\s*>\s?/, ''));
        html += '<blockquote>' + render(quoted.join('\n')) + '</blockquote>';
      } else {
        const text = [line.trim()];
        i++;
        while (i < lines.length && lines[i].trim() && !startsBlock(lines[i], lines[i + 1])) text.push(lines[i++].trim());
        html += '<p>' + inline(text.join(' ')) + '</p>';
      }
    }
    return html;
  }

  function fail(message) {
    box.removeAttribute('aria-busy');
    box.innerHTML = '<p class="legal-notice">' + message + ' <a href="' + source + '">GitHub에서 원문 보기</a></p>';
  }

  async function load(path) {
    const response = await fetch(path, { cache: 'no-cache' });
    if (!response.ok) throw new Error(path + ' ' + response.status);
    return response;
  }

  box.setAttribute('aria-busy', 'true');
  box.innerHTML = '<p class="legal-status">내용을 불러오는 중입니다.</p>';

  (async () => {
    let meta;
    try {
      meta = (await (await load('legal/meta.json')).json())[page];
      if (!meta || !Array.isArray(meta.sections)) throw new Error('meta');
    } catch (error) {
      fail('내용을 불러오지 못했습니다. 잠시 뒤 다시 열어 주세요.');
      return;
    }
    const date = String(meta.effective || '');
    if (metaLine) metaLine.textContent = ['시행일 ' + date, meta.version ? '버전 ' + meta.version : ''].filter(Boolean).join(' · ');

    const names = meta.sections.map(String).filter(name => /^[^/\\]+\.md$/i.test(name))
      .sort((a, b) => a.localeCompare(b, 'ko', { numeric: true }));
    const texts = await Promise.all(names.map(name =>
      load('legal/' + page + '/' + encodeURIComponent(name)).then(response => response.text()).catch(() => null)));

    let html = '';
    const missing = texts.filter(text => text === null).length;
    if (missing) html += '<p class="legal-notice">일부 조항(' + missing + '개)을 불러오지 못했습니다. <a href="' + source + '">GitHub에서 원문 보기</a></p>';
    texts.forEach(text => { if (text !== null) html += '<section class="legal-section">' + render(text) + '</section>'; });
    if (meta.closing) html += '<section class="legal-section legal-closing">' + render(String(meta.closing).replace(/\{시행일\}/g, date)) + '</section>';

    const holder = document.createElement('div');
    holder.innerHTML = html;
    const headings = [...holder.querySelectorAll('.legal-section > h2')];
    headings.forEach((heading, index) => { heading.id = 'section-' + (index + 1); });
    if (headings.length > 3) {
      const toc = document.createElement('nav');
      toc.className = 'legal-toc';
      toc.setAttribute('aria-label', '목차');
      toc.innerHTML = '<p>목차</p><ul>' + headings.map(heading => '<li><a href="#' + heading.id + '">' + escape(heading.textContent) + '</a></li>').join('') + '</ul>';
      holder.insertBefore(toc, holder.firstChild);
    }
    box.replaceChildren(...holder.childNodes);
    box.removeAttribute('aria-busy');
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
  })();
})();
