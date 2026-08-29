
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
