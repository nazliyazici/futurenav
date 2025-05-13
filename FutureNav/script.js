document.querySelectorAll('.with-line').forEach(el => {
  el.addEventListener('click', () => {
    // Önce diğerlerinden aktif sınıfı kaldır
    document.querySelectorAll('.with-line').forEach(e => e.classList.remove('active-line'));

    // Bu öğeye aktif sınıfı ekle
    el.classList.add('active-line');

    // Yumuşak geçişli kaydır
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});






