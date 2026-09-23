(function () {
  const header = document.getElementById('site-header');
  const toggle = document.querySelector('[data-nav-toggle]');
  if (header && toggle) {
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  const buttons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('.project-item');
  if (buttons.length && items.length) {
    function applyFilter(filter) {
      buttons.forEach((btn) => {
        const on = btn.getAttribute('data-filter') === filter;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      items.forEach((item) => {
        const cats = item.getAttribute('data-category').split(/\s+/);
        item.hidden = filter !== 'all' && cats.indexOf(filter) === -1;
      });
    }

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => applyFilter(btn.getAttribute('data-filter')));
    });
  }

  const root = document.querySelector('[data-carousel]');
  if (!root) return;

  const slides = Array.from(root.querySelectorAll('[data-carousel-slide]'));
  const dotsWrap = root.querySelector('[data-carousel-dots]');
  const prevBtn = root.querySelector('[data-carousel-prev]');
  const nextBtn = root.querySelector('[data-carousel-next]');
  if (slides.length < 2) return;

  let index = 0;
  let timer = null;
  const INTERVAL = 5200;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'feature-dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => go(i, true));
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.querySelectorAll('.feature-dot'));

  function go(next, user) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const on = i === index;
      slide.classList.toggle('is-active', on);
      slide.hidden = !on;
      slide.setAttribute('aria-hidden', on ? 'false' : 'true');
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
    });
    if (user) restart();
  }

  function next() { go(index + 1, false); }
  function prev() { go(index - 1, true); }

  function start() {
    stop();
    timer = setInterval(next, INTERVAL);
  }

  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function restart() {
    start();
  }

  if (nextBtn) nextBtn.addEventListener('click', () => go(index + 1, true));
  if (prevBtn) prevBtn.addEventListener('click', prev);

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', (e) => {
    if (!root.contains(e.relatedTarget)) start();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  go(0, false);
  start();
})();
