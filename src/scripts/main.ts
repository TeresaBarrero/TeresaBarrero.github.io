// Interacciones y animaciones del portfolio. Todo comprueba que el elemento exista,
// porque las páginas de proyecto no tienen todas las secciones de la portada.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector<T>(s);

/* ---------- Nombre a todo el ancho ---------- */
const nameEl = $('#name');
function fitName() {
  if (!nameEl) return;
  nameEl.style.fontSize = '100px';
  const line = nameEl.querySelector<HTMLElement>('.l1 .lw');
  const avail = nameEl.parentElement!.clientWidth * 0.985;
  const w = line?.scrollWidth || 1;
  nameEl.style.fontSize = Math.min((100 * avail) / w * 0.99, 420) + 'px';
}

/* ---------- Palabra que cambia ---------- */
const flip = $('#flip');
if (flip) {
  const words: string[] = JSON.parse(flip.dataset.words || '[]');
  const pr = () => parseFloat(getComputedStyle(flip).paddingRight) || 0;
  const fit = (el: HTMLElement) => { flip.style.width = el.offsetWidth + pr() + 'px'; };
  let i = 0;
  fit(flip.firstElementChild as HTMLElement);
  if (!reduce && words.length > 1) {
    setInterval(() => {
      if (document.hidden) return;
      i = (i + 1) % words.length;
      while (flip.children.length > 1) flip.firstElementChild!.remove();
      const old = flip.firstElementChild as HTMLElement | null;
      const n = document.createElement('span');
      n.textContent = words[i];
      n.className = 'in';
      flip.appendChild(n);
      fit(n);
      void n.offsetWidth;
      n.className = '';
      if (old) { old.className = 'out'; setTimeout(() => old.remove(), 650); }
    }, 2400);
  }
  document.fonts?.ready.then(() => fit(flip.lastElementChild as HTMLElement));
}

/* ---------- Trabajo en horizontal ---------- */
const hw = $('.hwork');
const track = $('#track');
const hwBar = $('#hwBar');
const hwNum = $('#hwNum');
const total = Number(hwNum?.dataset.total || 0);
let pinned = false;
const pad = (n: number) => String(n).padStart(2, '0');
function updH(p: number) {
  if (!hwBar || !hwNum) return;
  hwBar.style.setProperty('--p', p.toFixed(3));
  const n = Math.min(total, Math.floor(p * total) + 1);
  hwNum.textContent = `${pad(n)} / ${pad(total)}`;
}
function layoutH() {
  if (!hw || !track) return;
  const native = reduce || innerWidth < 860;
  hw.classList.toggle('native', native);
  pinned = !native;
  if (native) { hw.style.height = ''; track.style.transform = ''; return; }
  hw.style.height = innerHeight + Math.max(0, track.scrollWidth - innerWidth) + 'px';
}
track?.addEventListener('scroll', () => {
  if (pinned) return;
  const m = track.scrollWidth - track.clientWidth;
  updH(m ? track.scrollLeft / m : 0);
}, { passive: true });

/* ---------- Manifiesto, sello, parallax ---------- */
const man = $('#manifesto');
const words = man ? Array.from(man.querySelectorAll<HTMLElement>('.w')) : [];
const stamp = $('#stamp');
const colsEl = $('#cols');
const cols = colsEl ? Array.from(colsEl.children) as HTMLElement[] : [];
const photo = $('.ab-photo');

function onScroll() {
  const vh = innerHeight, y = scrollY;
  if (stamp && !reduce) stamp.style.transform = `rotate(${y * 0.25}deg)`;
  if (nameEl && !reduce) {
    const s = Math.max(0, Math.min(1, y / vh));
    nameEl.style.transform = `translateY(${s * -20}px) scale(${1 - s * 0.08})`;
  }
  if (man && words.length) {
    const r = man.getBoundingClientRect();
    let p = (vh * 0.85 - r.top) / (r.height + vh * 0.35);
    p = reduce ? 1 : Math.max(0, Math.min(1, p));
    const n = Math.round(p * words.length);
    words.forEach((w, i) => w.classList.toggle('on', i < n));
  }
  if (pinned && hw && track) {
    const r = hw.getBoundingClientRect();
    const dist = hw.offsetHeight - vh;
    const p = dist > 0 ? Math.max(0, Math.min(1, -r.top / dist)) : 0;
    track.style.transform = `translate3d(${-p * (track.scrollWidth - innerWidth)}px,0,0)`;
    updH(p);
    track.querySelectorAll<HTMLElement>('.frame .art').forEach((a) => {
      const cr = a.parentElement!.getBoundingClientRect();
      const c = (cr.left + cr.width / 2 - innerWidth / 2) / innerWidth;
      a.style.transform = `translateX(${c * -6}%)`;
    });
  }
  if (photo && !reduce) {
    const r = photo.getBoundingClientRect();
    if (r.bottom > 0 && r.top < vh) photo.style.setProperty('--py', Math.max(-28, Math.min(28, (r.top + r.height / 2 - vh / 2) * 0.08)).toFixed(1) + 'px');
  }
  if (colsEl && !reduce && innerWidth > 640) {
    const r = colsEl.getBoundingClientRect();
    const c = r.top + r.height / 2 - vh / 2;
    cols.forEach((col, i) => { col.style.transform = `translateY(${c * [0.12, -0.08, 0.18][i]}px)`; });
  }
}
let ticking = false;
addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { onScroll(); ticking = false; });
}, { passive: true });
addEventListener('resize', () => { fitName(); layoutH(); onScroll(); });

/* ---------- Menú índice ---------- */
const menuBtn = $('#menuBtn');
const setMenu = (o: boolean) => { document.body.classList.toggle('menu-open', o); menuBtn?.setAttribute('aria-expanded', String(o)); };
menuBtn?.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
$('#menu')?.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) setMenu(false); });

/* ---------- Disciplinas ---------- */
const discList = $('#discList');
discList?.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('.d-btn');
  if (!b) return;
  const item = b.closest('.d-item')!;
  const open = !item.classList.contains('open');
  discList.querySelectorAll('.d-item').forEach((el) => {
    const on = el === item && open;
    el.classList.toggle('open', on);
    el.querySelector('.d-btn')!.setAttribute('aria-expanded', String(on));
  });
});

/* ---------- Sobre mí: acordeón (todo recogido al cargar) ---------- */
$('#spec')?.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('.sp-btn');
  if (!b) return;
  const open = b.closest('.sp-item')!.classList.toggle('open');
  b.setAttribute('aria-expanded', String(open));
});

/* ---------- Cursor ---------- */
const cur = $('#cur');
if (cur && fine && !reduce) {
  let mx = -100, my = -100, cx = -100, cy = -100;
  addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });
  const loop = () => { cx += (mx - cx) * 0.2; cy += (my - cy) * 0.2; cur.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); };
  loop();
  document.addEventListener('pointerover', (e) => {
    cur.classList.toggle('big', !!(e.target as HTMLElement).closest('.card:not(.soon),.d-btn,.name,.piece,.next'));
  });
} else if (cur) cur.style.display = 'none';

/* ---------- Copiar email ---------- */
const copyBtn = $<HTMLButtonElement>('#copyBtn');
const mailTxt = $('#mailTxt');
copyBtn?.addEventListener('click', () => {
  const done = () => { copyBtn.textContent = copyBtn.dataset.copied!; setTimeout(() => (copyBtn.textContent = copyBtn.dataset.copy!), 1800); };
  const select = () => { const r = document.createRange(); r.selectNodeContents(mailTxt!); const s = getSelection()!; s.removeAllRanges(); s.addRange(r); };
  try { navigator.clipboard.writeText(mailTxt!.textContent || '').then(done, select); } catch { select(); }
});

/* ---------- Retícula, reloj y teclado ---------- */
const gridOv = $('#gridOv');
$('#gridBtn')?.addEventListener('click', () => gridOv?.classList.toggle('on'));
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
  const tag = (e.target as HTMLElement).tagName;
  if ((e.key === 'g' || e.key === 'G') && !e.metaKey && !e.ctrlKey && !e.altKey && !/INPUT|TEXTAREA|SELECT/.test(tag)) gridOv?.classList.toggle('on');
});
const clock = $('#clock');
const tick = () => {
  if (!clock) return;
  try { clock.textContent = new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid' }).format(new Date()) + ' CET'; } catch { /* sin reloj */ }
};
tick(); setInterval(tick, 30000);

/* ---------- Arranque ---------- */
fitName(); layoutH(); onScroll();
document.fonts?.ready.then(() => { fitName(); layoutH(); onScroll(); });
