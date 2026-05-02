/* =============================================
melc. — Script Principal
============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* –– DARK / LIGHT MODE –– */
  function applyTheme() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }
  applyTheme();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

document.addEventListener(‘DOMContentLoaded’, () => {

/* –– INTRO –– */
const intro = document.getElementById(‘intro’);
if (intro) {
const isHome = !window.location.pathname.match(//(moto|design|pro|lab|histoire).html/);
if (!isHome) {
intro.style.display = ‘none’;
} else {
setTimeout(() => {
intro.classList.add(‘fade-out’);
setTimeout(() => { intro.style.display = ‘none’; }, 700);
}, 2200);
}
}

/* –– HEADER SCROLL –– */
const header = document.querySelector(‘header’);
if (header) {
window.addEventListener(‘scroll’, () => {
header.classList.toggle(‘scrolled’, window.scrollY > 40);
}, { passive: true });
}

/* –– SCROLL REVEAL –– */
const reveals = document.querySelectorAll(’.reveal’);
if (reveals.length) {
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add(‘visible’);
observer.unobserve(entry.target);
}
});
}, { threshold: 0.12, rootMargin: ‘0px 0px -40px 0px’ });
reveals.forEach(el => observer.observe(el));
}

/* –– STAGGER PROJECT CARDS –– */
const grid = document.querySelector(’.projects-grid’);
if (grid) {
Array.from(grid.children).forEach((child, i) => {
child.style.transitionDelay = (i * 0.08) + ‘s’;
});
}

/* –– AMBIENT FOLLOW –– */
const amb1 = document.querySelector(’.ambient-1’);
if (amb1) {
document.addEventListener(‘mousemove’, e => {
const x = (e.clientX / window.innerWidth - 0.5) * 60;
const y = (e.clientY / window.innerHeight - 0.5) * 40;
amb1.style.transform = `translate(${x}px, ${y}px)`;
}, { passive: true });
}

});
