document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    slides[currentIndex].classList.add('slide-active');

    document.getElementById('nextBtn').addEventListener('click', function() {
        const nextIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.remove('slide-active');
        slides[currentIndex].classList.add('slide-previous');
        slides[nextIndex].classList.add('slide-active');

        setTimeout(() => {
            slides[currentIndex].classList.remove('slide-previous');
        }, 500); // Match the duration of the CSS animation

        currentIndex = nextIndex;
    });

    const loadContentButtons = document.querySelectorAll('.loadContentBtn');
    loadContentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const contentPlaceholder = document.getElementById(targetId);
            const contentUrl = this.getAttribute('data-content-url'); // Get the content URL

            // Toggle visibility if content is already loaded
            if (contentPlaceholder.style.display === 'block') {
                contentPlaceholder.style.display = 'none'; // Hide content
            } else {
                // Fetch and display the content
                fetch(contentUrl) // Use the content URL from the button
                    .then(response => response.text())
                    .then(html => {
                        contentPlaceholder.innerHTML = html;
                        contentPlaceholder.style.display = 'block'; // Show content
                    })
                    .catch(error => {
                        console.error('Error loading the file', error);
                        contentPlaceholder.innerHTML = `<p>Error loading content. Please try again later.</p>`;
                        contentPlaceholder.style.display = 'block';
                    });
            }
        });
    });
});