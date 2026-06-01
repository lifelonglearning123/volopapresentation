// Fit the 1600x900 stage to the viewport so every slide always shows 100%
(function () {
  const STAGE_W = 1600, STAGE_H = 900;
  const stage = document.getElementById('stage');
  if (!stage) return;
  function fit() {
    const scale = Math.min(window.innerWidth / STAGE_W, window.innerHeight / STAGE_H);
    stage.style.transform = 'scale(' + scale + ')';
  }
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);
  fit();
})();

// Slide navigation · keyboard, dots, swipe, hash deep-link
(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const hud = document.getElementById('hud');
  let idx = slides.findIndex(s => s.classList.contains('active'));
  if (idx < 0) idx = 0;

  slides.forEach((s, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === idx ? ' on' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1) + ' — ' + (s.dataset.title || ''));
    dot.addEventListener('click', () => goto(i));
    hud.appendChild(dot);
  });

  function goto(n) {
    n = Math.max(0, Math.min(slides.length - 1, n));
    if (n === idx) return;
    slides[idx].classList.remove('active');
    slides[n].classList.add('active');
    hud.children[idx].classList.remove('on');
    hud.children[n].classList.add('on');
    idx = n;
    history.replaceState(null, '', '#' + (n + 1));
  }

  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === 'ArrowDown') {
      e.preventDefault(); goto(idx + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'ArrowUp') {
      e.preventDefault(); goto(idx - 1);
    } else if (e.key === ' ') {
      e.preventDefault();
      e.shiftKey ? goto(idx - 1) : goto(idx + 1);
    } else if (e.key === 'Home') {
      e.preventDefault(); goto(0);
    } else if (e.key === 'End') {
      e.preventDefault(); goto(slides.length - 1);
    } else if (e.key === 'f' || e.key === 'F') {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    }
  });

  let tx = 0, ty = 0;
  document.addEventListener('touchstart', (e) => {
    tx = e.changedTouches[0].screenX;
    ty = e.changedTouches[0].screenY;
  }, { passive: true });
  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - tx;
    const dy = e.changedTouches[0].screenY - ty;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? goto(idx + 1) : goto(idx - 1);
    }
  }, { passive: true });

  const fromHash = parseInt((location.hash || '').replace('#', ''), 10);
  if (!isNaN(fromHash) && fromHash >= 1 && fromHash <= slides.length) {
    goto(fromHash - 1);
  }
})();
