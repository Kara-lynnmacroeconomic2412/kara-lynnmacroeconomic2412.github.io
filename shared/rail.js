// Thin helper around <blossom-carousel>. Blossom handles dragging; native scroll
// handles touch and trackpads. This adds arrow keys and position reporting.
window.Rail = function (rail, { onMove } = {}) {
  const slides = [...rail.children];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const max = () => Math.max(1, rail.scrollWidth - rail.clientWidth);
  const target = (s) => Math.min(s.offsetLeft - slides[0].offsetLeft, max());
  const nearest = (x) => slides.reduce((b, s, i) => (Math.abs(target(s) - x) < Math.abs(target(slides[b]) - x) ? i : b), 0);

  const api = {
    slides,
    get index() { return nearest(rail.scrollLeft); },
    get progress() { return rail.scrollLeft / max(); },
    max, target,
    go(i, instant) {
      const n = Math.max(0, Math.min(slides.length - 1, i));
      rail.scrollTo({ left: target(slides[n]), behavior: instant || reduced.matches ? 'instant' : 'smooth' });
    },
  };

  let queued = false;
  const tick = () => { queued = false; onMove && onMove(api); };
  const schedule = () => { if (!queued) { queued = true; requestAnimationFrame(tick); } };
  rail.addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);

  rail.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea')) return;
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (step) { e.preventDefault(); api.go(api.index + step, true); }
    if (e.key === 'Home') { e.preventDefault(); api.go(0, true); }
    if (e.key === 'End') { e.preventDefault(); api.go(slides.length - 1, true); }
  });

  requestAnimationFrame(tick);
  return api;
};
