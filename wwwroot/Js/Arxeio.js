        function filterArchive(category, btnElement) {
            // Αφαίρεση active από όλα τα κουμπιά
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            // Προσθήκη active στο κουμπί που πατήθηκε
            btnElement.classList.add('active');

            // Εμφάνιση / Απόκρυψη καρτών
            const items = document.querySelectorAll('.archive-item');
            items.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }


            // Ενεργοποίηση Lightbox για όλες τις εικόνες της γκαλερί
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });

    document.addEventListener('DOMContentLoaded', function () {
  var toggle   = document.getElementById('navbarDropdown');
  var collapse = document.getElementById('navbarNav');
  if (!toggle || !collapse) return;

  var menu = toggle.parentElement.querySelector('.dropdown-menu');

  // Ξεκολλάει τον handler του template ΜΟΝΟ από αυτό το link
  if (window.jQuery) jQuery(toggle).off('click');

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    if (window.innerWidth >= 992) return;   // desktop = hover
    e.stopPropagation();
    var open = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', open);
  });

  // Καθαρισμός όταν κλείνει το burger menu
  collapse.addEventListener('hidden.bs.collapse', function () {
    menu.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
