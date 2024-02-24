document.addEventListener('DOMContentLoaded', function() {
    const descriptionPhoto = document.getElementById('descriptionPhoto');

    // Ensure the element exists
    if (descriptionPhoto) {
        descriptionPhoto.addEventListener('click', function() {
            // Toggle visibility
            if (descriptionPhoto.style.display === 'none') {
                descriptionPhoto.style.display = 'block';
            } else {
                descriptionPhoto.style.display = 'none';
            }
        });

        // Initially show the image
        descriptionPhoto.style.display = 'block';
    }
});
