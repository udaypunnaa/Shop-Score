/**
 * Shop Score – Scroll reveal and navbar scroll effect
 */
(function () {
  function navScroll() {
    var nav = document.getElementById('navbar');
    if (!nav) return;
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  function reveal() {
    var els = document.querySelectorAll('.reveal, .reveal-item');
    var winH = window.innerHeight;
    var revealPoint = 0.85;
    els.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < winH * revealPoint) {
        el.classList.add('revealed');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      navScroll();
      reveal();
      window.addEventListener('scroll', function () {
        navScroll();
        reveal();
      }, { passive: true });
    });
  } else {
    navScroll();
    reveal();
    window.addEventListener('scroll', function () {
      navScroll();
      reveal();
    }, { passive: true });
  }
})();
