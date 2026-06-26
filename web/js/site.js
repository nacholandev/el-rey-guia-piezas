/* El Rey — site interactions (vanilla, no build step) */
(function () {
  'use strict';

  /* Sticky header */
  var header = document.querySelector('.er-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 12); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Hamburger menu */
  var hamburger = document.querySelector('.er-hamburger');
  var nav = document.querySelector('.er-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('is-open');
      nav.classList.toggle('is-open');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('is-open');
        nav.classList.remove('is-open');
      });
    });
  }

  /* Reveal on scroll */
  var reveals = document.querySelectorAll('.er-reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Product gallery */
  var main = document.querySelector('[data-gallery-main]');
  var thumbs = document.querySelectorAll('[data-thumb]');
  thumbs.forEach(function (t) {
    t.addEventListener('click', function () {
      if (!main) return;
      main.src = t.getAttribute('data-full');
      main.alt = t.querySelector('img') ? t.querySelector('img').alt : '';
      thumbs.forEach(function (x) { x.classList.remove('is-active'); });
      t.classList.add('is-active');
    });
  });

  /* Product variant selector */
  var opts = document.querySelectorAll('[data-variant]');
  var chosen = document.querySelector('[data-chosen-variant]');
  opts.forEach(function (o) {
    o.addEventListener('click', function () {
      opts.forEach(function (x) { x.classList.remove('is-active'); });
      o.classList.add('is-active');
      if (chosen) chosen.textContent = o.getAttribute('data-variant');
    });
  });

  /* Accordion */
  document.querySelectorAll('.er-acc__head').forEach(function (head) {
    head.addEventListener('click', function () {
      var item = head.closest('.er-acc__item');
      var panel = item.querySelector('.er-acc__panel');
      var open = item.classList.toggle('is-open');
      panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0px';
    });
  });

  /* Forms — MVP confirm inline */
  document.querySelectorAll('[data-contact-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var thanks = form.parentElement.querySelector('.er-thanks');
      var name = (form.querySelector('[name="nombre"]') || {}).value || 'familia';
      form.style.display = 'none';
      if (thanks) {
        var slot = thanks.querySelector('[data-name-slot]');
        if (slot) slot.textContent = name.split(' ')[0];
        thanks.style.display = 'block';
        thanks.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  /* Sparkle trail on mouse move (kids delight) */
  var colors = ['#FFD93D', '#4ECDC4', '#A855F7', '#FF6B35', '#F472B6', '#84CC16'];
  var lastSparkle = 0;
  document.addEventListener('mousemove', function (e) {
    var now = Date.now();
    if (now - lastSparkle < 80) return;
    lastSparkle = now;
    var dot = document.createElement('div');
    dot.className = 'er-sparkle';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(dot);
    setTimeout(function () { dot.remove(); }, 600);
  });
})();
