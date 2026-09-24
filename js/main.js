// Flag that JS is available — gates the .fade-in effect in CSS
document.documentElement.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Active nav link ───────────────────────
// Normalize both the pathname and each href (strip .html, empty → index)
// so highlighting works on file://, localhost, and Vercel cleanUrls.
const page = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
document.querySelectorAll('.nav__links a').forEach(a => {
  const href = (a.getAttribute('href') || '').replace(/\.html$/, '') || 'index';
  if (href === page) a.classList.add('active');
});

// ── Hamburger ─────────────────────────────
const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// ── Quote rotator ─────────────────────────
const rotator = document.querySelector('.quote-rotator');
const slides = document.querySelectorAll('.quote-slide');
const dots   = document.querySelectorAll('.quote-dot');
let cur = 0;
let rotatorTimer = null;
const ROTATE_MS = 9500;

function showSlide(i) {
  slides.forEach((s, j) => s.classList.toggle('active', j === i));
  dots.forEach((d, j) => d.classList.toggle('active', j === i));
  cur = i;
}
function startRotator() {
  if (reduceMotion || rotatorTimer) return;
  rotatorTimer = setInterval(() => showSlide((cur + 1) % slides.length), ROTATE_MS);
}
function stopRotator() {
  clearInterval(rotatorTimer);
  rotatorTimer = null;
}
if (slides.length) {
  dots.forEach((d, i) => {
    d.setAttribute('aria-label', 'Show quote ' + (i + 1));
    d.addEventListener('click', () => {
      showSlide(i);
      stopRotator();   // reset the timer so the new quote gets a full interval
      startRotator();
    });
  });
  showSlide(0);
  startRotator();
  const pauseZone = rotator ? rotator.parentElement : null;
  if (pauseZone) {
    pauseZone.addEventListener('mouseenter', stopRotator);
    pauseZone.addEventListener('mouseleave', startRotator);
    pauseZone.addEventListener('focusin', stopRotator);
    pauseZone.addEventListener('focusout', startRotator);
  }
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
    const bioEl = c.querySelector('.presenter-card__bio');
    const haystack = ((c.dataset.name || '') + ' ' + (c.dataset.topic || '') + ' ' +
                      (c.dataset.tags || '') + ' ' + (bioEl ? bioEl.textContent : '')).toLowerCase();
    const matchQ = !q || haystack.includes(q);
    const tags = (c.dataset.tags || '').toLowerCase().split(/\s+/);
    const matchF = activeFilter === 'all' || tags.includes(activeFilter);
    const show = matchQ && matchF;
    c.style.display = show ? '' : 'none';
    if (show) n++;
  });
  if (noResults) noResults.style.display = n === 0 ? 'block' : 'none';
}

function activatePill(p) {
  pills.forEach(x => {
    x.classList.toggle('active', x === p);
    x.setAttribute('aria-pressed', x === p ? 'true' : 'false');
  });
  activeFilter = p.dataset.filter;
  filterPresenters();
}

if (searchEl) searchEl.addEventListener('input', filterPresenters);
pills.forEach(p => {
  p.setAttribute('aria-pressed', p.classList.contains('active') ? 'true' : 'false');
  p.addEventListener('click', () => activatePill(p));
});

// Pre-activate a filter from ?filter=<token> (e.g. archive "Browse by Topic" links)
if (pills.length) {
  const wanted = new URLSearchParams(location.search).get('filter');
  if (wanted) {
    const target = Array.from(pills).find(p => p.dataset.filter === wanted.toLowerCase());
    if (target) activatePill(target);
  }
}

// ── RSVP forms (no backend wired yet — shows confirmation only) ──
// No server behind this site, so the form composes an email to Ray instead of
// pretending to submit. Fields are optional-tolerant: whatever is filled gets sent.
document.querySelectorAll('.rsvp-form').forEach(f => {
  f.addEventListener('submit', e => {
    e.preventDefault();
    const val = n => { const el = f.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ''; };
    const session = val('session');
    const lines = ['Name: ' + val('name'), 'Email: ' + val('email')];
    if (session) lines.push('Session or speaker: ' + session);
    const subject = session ? 'Science Plus — recording request' : 'Science Plus — mailing list';
    window.location.href = 'mailto:schachter.ray@gmail.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(lines.join('\n'));
    const ok = f.querySelector('.rsvp-success');
    if (ok) ok.style.display = 'block';
  });
});

// ── Scroll fade-in ────────────────────────
const faders = document.querySelectorAll('.fade-in');
if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  faders.forEach(el => observer.observe(el));
} else {
  faders.forEach(el => el.classList.add('visible'));
}
