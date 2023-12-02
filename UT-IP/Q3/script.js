const thumbnails = document.querySelectorAll('.thumbnails img');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        showOverlay(index);
    });
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    showOverlay(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    showOverlay(currentIndex);
});

function showOverlay(index) {
    const imageSrc = thumbnails[index].getAttribute('data-image');
    overlayImage.src = imageSrc;
    overlay.style.display = 'flex';
}

// Hide overlay when clicking outside the image
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});
