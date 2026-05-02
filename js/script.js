/* =============================================
melc. — Script Principal
============================================= */

document.addEventListener(‘DOMContentLoaded’, () => {

/* –– CURSOR –– */
const cursor = document.querySelector(’.cursor’);
const ring = document.querySelector(’.cursor-ring’);

if (cursor && ring) {
let mx = 0, my = 0;
let rx = 0, ry = 0;

```
document.addEventListener('mousemove', e => {
mx = e.clientX;
my = e.clientY;
cursor.style.left = mx + 'px';
cursor.style.top = my + 'px';
});

function animRing() {
rx += (mx - rx) * 0.12;
ry += (my - ry) * 0.12;
ring.style.left = rx + 'px';
ring.style.top = ry + 'px';
requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a, button, .cat-item, .project-card').forEach(el => {
el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); ring.classList.add('hover'); });
el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); });
});
```

}

/* –– INTRO –– */
const intro = document.getElementById(‘intro’);
if (intro) {
// Only show on homepage
const isHome = !window.location.pathname.match(//(moto|design|pro|lab|histoire).html/);
if (!isHome) {
intro.style.display = ‘none’;
return;
}
setTimeout(() => {
intro.classList.add(‘fade-out’);
setTimeout(() => { intro.style.display = ‘none’; }, 700);
}, 2200);
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

/* –– STAGGER REVEALS –– */
const grids = document.querySelectorAll(’.projects-grid, .categories-list’);
grids.forEach(grid => {
const children = grid.children;
Array.from(children).forEach((child, i) => {
if (!child.classList.contains(‘reveal’)) {
child.style.transitionDelay = (i * 0.07) + ‘s’;
}
});
});

/* –– PARALLAX HERO TEXT –– */
const heroTitle = document.querySelector(’.hero-title’);
if (heroTitle) {
window.addEventListener(‘scroll’, () => {
const y = window.scrollY;
heroTitle.style.transform = `translateY(${y * 0.18}px)`;
heroTitle.style.opacity = Math.max(0, 1 - y / 400);
}, { passive: true });
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