const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const imgElement = document.querySelector('#img');
const loadingSpinner = document.querySelector('#loading-spinner');

const images = [
    "https://i.pinimg.com/736x/cb/76/3c/cb763c722ba1ee9d728b2a3d66553e48.jpg",
];

let currentIndex = 0;

// Précharger toutes les images
const preloadImages = (srcArray) => {
    const preloadedImages = [];
    srcArray.forEach((src) => {
        const img = new Image();
        img.src = src;
        preloadedImages.push(img);
    });
    return preloadedImages;
};

// Charger la première image au démarrage
const preloadFirstImage = () => {
    const img = new Image();
    img.src = images[0];
    img.onload = () => {
        imgElement.src = img.src;
        imgElement.style.opacity = 1;
        hideLoadingSpinner();
    };
};

const preloadedImages = preloadImages(images);

const showLoadingSpinner = () => {
    loadingSpinner.style.display = 'block';
};

const hideLoadingSpinner = () => {
    loadingSpinner.style.display = 'none';
};

const updateImage = () => {
    showLoadingSpinner();
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = preloadedImages[currentIndex].src;
        imgElement.onload = () => {
            imgElement.style.opacity = 1;
            hideLoadingSpinner();
        };
    }, 500);
};

// Charger la première image dès le chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    showLoadingSpinner();
    preloadFirstImage();
});

const goToNextImage = () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
};

const goToPreviousImage = () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
};

btnRight.addEventListener('click', goToNextImage);
btnLeft.addEventListener('click', goToPreviousImage);

// Écouteur pour les touches de navigation (gauche/droite)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        goToNextImage();
    } else if (event.key === 'ArrowLeft') {
        goToPreviousImage();
    }
});

// Écouteur pour les clics sur écran (pour mobile)
document.addEventListener('click', (event) => {
    const screenWidth = window.innerWidth;
    const clickX = event.clientX;

    if (clickX > screenWidth / 2) {
        goToNextImage();
    } else {
        goToPreviousImage();
    }
});
