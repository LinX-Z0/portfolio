const container = document.getElementById('twinkle-container');

function createStar() {
    if (!container) return;
    const star = document.createElement('div');
    star.classList.add('twinkle-star');
  
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
  
    star.style.animationDelay = (Math.random() * 3) + 's';
  
    const size = Math.random() * 4 + 2;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
  
    container.appendChild(star);
  
    setTimeout(() => {
      if (star.parentNode === container) {
        container.removeChild(star);
      }
    }, 3000);
  }

if (container) {
  setInterval(createStar, 100);
}

(function () {
  const buttons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('.project-item');
  if (!buttons.length || !items.length) return;

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
})();

