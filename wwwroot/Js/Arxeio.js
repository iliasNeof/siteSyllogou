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