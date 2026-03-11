// ── Active nav link ───────────────────────
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// ── Hamburger ─────────────────────────────
const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');
if (burger) burger.addEventListener('click', () => navLinks.classList.toggle('open'));

// ── Quote rotator ─────────────────────────
const slides = document.querySelectorAll('.quote-slide');
const dots   = document.querySelectorAll('.quote-dot');
let cur = 0;
function showSlide(i) {
  slides.forEach((s,j) => s.classList.toggle('active', j === i));
  dots.forEach((d,j)   => d.classList.toggle('active', j === i));
  cur = i;
}
if (slides.length) {
  dots.forEach((d,i) => d.addEventListener('click', () => showSlide(i)));
  showSlide(0);
  setInterval(() => showSlide((cur + 1) % slides.length), 6500);
}

// ── Presenter search + filter ─────────────
const searchEl  = document.getElementById('presenterSearch');
const pills     = document.querySelectorAll('.pill[data-filter]');
const pcards    = document.querySelectorAll('.presenter-card');
const noResults = document.querySelector('.no-results');
let activeFilter = 'all';

function filterPresenters() {
  const q = (searchEl ? searchEl.value : '').toLowerCase().trim();
  let n = 0;
  pcards.forEach(c => {
    const haystack = ((c.dataset.name||'') + ' ' + (c.dataset.topic||'') + ' ' + (c.dataset.tags||'')).toLowerCase();
    const matchQ = !q || haystack.includes(q);
    const matchF = activeFilter === 'all' || (c.dataset.tags||'').toLowerCase().includes(activeFilter);
    const show = matchQ && matchF;
    c.style.display = show ? '' : 'none';
    if (show) n++;
  });
  if (noResults) noResults.style.display = n === 0 ? 'block' : 'none';
}

if (searchEl) {
  searchEl.addEventListener('input', filterPresenters);
  pills.forEach(p => {
    p.addEventListener('click', () => {
      pills.forEach(x => x.classList.remove('active'));
      p.classList.add('active');
      activeFilter = p.dataset.filter;
      filterPresenters();
    });
  });
}

// ── RSVP forms ────────────────────────────
document.querySelectorAll('.rsvp-form').forEach(f => {
  f.addEventListener('submit', e => {
    e.preventDefault();
    const ok = f.querySelector('.rsvp-success');
    if (ok) ok.style.display = 'block';
    f.querySelector('button[type=submit]').disabled = true;
  });
});

// ── Scroll fade-in ────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
