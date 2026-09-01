
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
  var toggle = document.getElementById('navbarDropdown');
  if (!toggle) return;

  var menu = toggle.parentElement.querySelector('.dropdown-menu');

  toggle.addEventListener('click', function (e) {
    if (window.innerWidth >= 992) return;   // desktop = hover, μην ανακατεύεσαι
    e.preventDefault();
    e.stopPropagation();
    var open = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', open);
  });
});



