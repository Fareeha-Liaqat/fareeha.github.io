// Add this to a script tag or an external JavaScript file
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const imageWrapper = document.querySelector('.image-wrapper');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGalleryPosition();
    }
});

nextButton.addEventListener('click', () => {
    const totalImages = imageWrapper.children.length;
    if (currentIndex < totalImages - 1) {
        currentIndex++;
        updateGalleryPosition();
    }
});

function updateGalleryPosition() {
    const imageWidth = imageWrapper.children[0].clientWidth;
    const newPosition = -currentIndex * imageWidth;
    imageWrapper.style.transform = `translateX(${newPosition}px)`;
}
