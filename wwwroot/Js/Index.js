
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



    // Αυτόματο κλείσιμο του mobile menu μόλις πατηθεί κάποιος σύνδεσμος
    document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
