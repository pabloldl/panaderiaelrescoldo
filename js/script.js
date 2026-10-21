'use strict';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
toggle.hidden = false;
navigation.dataset.enhanced = 'true';
function closeMenu() { navigation.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => { const open = navigation.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); toggle.focus(); } });
window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
  document.body.classList.add('motion');
}
const gallery = [...document.querySelectorAll('.gallery-item')];
const dialog = document.querySelector('.lightbox');
const enlarged = dialog.querySelector('img');
const caption = document.querySelector('#lightbox-caption');
let current = 0;
let opener;
function showPhoto(index) { current = (index + gallery.length) % gallery.length; enlarged.src = gallery[current].getAttribute('href'); enlarged.alt = gallery[current].querySelector('img').alt; caption.textContent = `${gallery[current].dataset.caption} (${current + 1}/${gallery.length})`; }
gallery.forEach((item, index) => item.addEventListener('click', event => { if (typeof dialog.showModal !== 'function') return; event.preventDefault(); opener = item; showPhoto(index); dialog.showModal(); document.body.classList.add('locked'); dialog.querySelector('.close-lightbox').focus(); }));
dialog.querySelector('.close-lightbox').addEventListener('click', () => dialog.close());
dialog.querySelector('.previous').addEventListener('click', () => showPhoto(current - 1));
dialog.querySelector('.next').addEventListener('click', () => showPhoto(current + 1));
dialog.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(current - 1); } if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(current + 1); } });
dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('locked'); opener?.focus(); });
document.querySelector('.copy').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText('652 802 445'); status.textContent = 'Teléfono copiado: 652 802 445.'; }
  catch { const selection = window.getSelection(); const range = document.createRange(); range.selectNodeContents(document.querySelector('.phone')); selection.removeAllRanges(); selection.addRange(range); status.textContent = 'Teléfono seleccionado. Pulsa Ctrl+C (o ⌘C) para copiarlo.'; }
});
