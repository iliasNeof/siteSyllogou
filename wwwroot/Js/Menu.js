
function copyToClipboard(elementId, button) {

    const text = document.getElementById(elementId).textContent.trim();

    navigator.clipboard.writeText(text).then(function () {

        const originalContent = button.innerHTML;

        button.innerHTML = '<i class="bi bi-check-lg"></i>';

        setTimeout(function () {
            button.innerHTML = originalContent;
        }, 2000);

    }).catch(function () {
        alert('Δεν ήταν δυνατή η αντιγραφή.');
    });
}

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


