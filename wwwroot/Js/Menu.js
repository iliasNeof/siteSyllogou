
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

document.querySelectorAll('.navbar-nav .dropdown-toggle').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (window.innerWidth < 992) {
      e.stopImmediatePropagation();      // μπλοκάρει τον handler του template
      var menu = el.nextElementSibling;
      var open = menu.classList.toggle('show');
      el.setAttribute('aria-expanded', open);
    }
  }, true);
});


