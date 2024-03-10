document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    if (!localStorage.getItem('animationPlayed')) {
        console.log('Playing animation for the first time.');
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide) => (slide.style.opacity = '0'));

        const header = document.querySelector('.header');
        header.style.opacity = '0'; // Ensure header starts invisible for the animation

        setTimeout(() => {
            header.style.opacity = '1';
            header.style.transition = 'opacity 2s ease';
        }, 10); // Start header animation almost immediately

        let delayTime = 2500; // Start after header animation
        slides.forEach((slide, index) => {
            setTimeout(() => {
                slide.style.opacity = '1';
            }, delayTime);
            delayTime += 1000; // Increment delay for next slide
        });

        localStorage.setItem('animationPlayed', 'true');
    } else {
        console.log('Animation has already played. Skipping.');
    }

    const footer = document.querySelector('footer');
    footer.addEventListener('click', function () {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    });
    footer.style.cursor = 'pointer';
    footer.title = 'Find the secret!';
});
