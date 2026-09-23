(() => {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  const track = gallery.querySelector('.slides');
  const slides = [...gallery.querySelectorAll('.slide')];
  const count = gallery.querySelector('.gallery-count');
  const autoplay = gallery.querySelector('.autoplay');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let paused = reduced.matches;
  let hovered = false;
  let focused = false;
  let drag = null;
  let timer;
  const show = value => {
    index = ((value % slides.length) + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    count.textContent = `${index + 1} / ${slides.length}`;
    slides.forEach((slide, i) => slide.setAttribute('aria-hidden', String(i !== index)));
  };
  const schedule = () => {
    window.clearInterval(timer);
    autoplay.textContent = paused ? '자동 넘김 시작' : '자동 넘김 정지';
    autoplay.setAttribute('aria-pressed', String(paused));
    if (!paused && !hovered && !focused && !document.hidden) timer = window.setInterval(() => show(index + 1), 5000);
  };
  const move = direction => { show(index + direction); schedule(); };
  gallery.querySelector('.prev').addEventListener('click', () => move(-1));
  gallery.querySelector('.next').addEventListener('click', () => move(1));
  autoplay.addEventListener('click', () => { paused = !paused; schedule(); });
  gallery.addEventListener('mouseenter', () => { hovered = true; schedule(); });
  gallery.addEventListener('mouseleave', () => { hovered = false; schedule(); });
  gallery.addEventListener('focusin', () => { focused = true; schedule(); });
  gallery.addEventListener('focusout', event => { if (!gallery.contains(event.relatedTarget)) { focused = false; schedule(); } });
  gallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); }
  });
  track.addEventListener('pointerdown', event => { if (event.button !== 0) return; drag = {x:event.clientX, y:event.clientY, id:event.pointerId}; track.setPointerCapture(event.pointerId); });
  track.addEventListener('pointerup', event => {
    if (!drag || drag.id !== event.pointerId) return;
    const x = event.clientX - drag.x; const y = event.clientY - drag.y; drag = null;
    if (Math.abs(x) > 45 && Math.abs(x) > Math.abs(y)) move(x < 0 ? 1 : -1);
  });
  track.addEventListener('pointercancel', () => { drag = null; });
  document.addEventListener('visibilitychange', schedule);
  reduced.addEventListener('change', event => { if (event.matches) paused = true; schedule(); });
  show(0); schedule();
})();
