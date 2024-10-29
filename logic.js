const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const imgElement = document.querySelector('#img');
const loadingSpinner = document.querySelector('#loading-spinner');

const images = [
    "https://fr.pinterest.com/pin/1136525656021519083/",
    "https://fr.pinterest.com/pin/1136525656021519080/",
    "https://fr.pinterest.com/pin/1136525656021519082/",
    "https://fr.pinterest.com/pin/1136525656021519084/",
    "https://fr.pinterest.com/pin/1136525656021519081/",
    "https://fr.pinterest.com/pin/1136525656021519076/",
    "https://fr.pinterest.com/pin/1136525656021519077/",
    "https://fr.pinterest.com/pin/1136525656021519078/",
    "https://fr.pinterest.com/pin/1136525656021519106/",
    "https://fr.pinterest.com/pin/1136525656021519104/",
    "https://fr.pinterest.com/pin/1136525656021519101/",
    "https://fr.pinterest.com/pin/1136525656021519105/",
    "https://fr.pinterest.com/pin/1136525656021519100/",
    "https://fr.pinterest.com/pin/1136525656021519102/",
    "https://fr.pinterest.com/pin/1136525656021519099/",
    "https://fr.pinterest.com/pin/1136525656021519103/",
    "https://fr.pinterest.com/pin/1136525656021519134/",
    "https://fr.pinterest.com/pin/1136525656021519133/",
    "https://fr.pinterest.com/pin/1136525656021519137/",
    "https://fr.pinterest.com/pin/1136525656021519136/",
    "https://fr.pinterest.com/pin/1136525656021519135/"
];

let currentIndex = 0;

// Précharger les images
const preloadImages = (srcArray) => {
    const preloadedImages = [];
    srcArray.forEach((src) => {
        const img = new Image();
        img.src = src;
        preloadedImages.push(img);
    });
    return preloadedImages;
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

// Ajouter des écouteurs d'événements pour les touches du clavier
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        goToNextImage();
    } else if (event.key === 'ArrowLeft') {
        goToPreviousImage();
    }
});

// Ajouter des écouteurs d'événements pour les clics sur l'écran pour la version mobile
document.addEventListener('click', (event) => {
    const screenWidth = window.innerWidth;
    const clickX = event.clientX;

    if (clickX > screenWidth / 2) {
        goToNextImage();
    } else {
        goToPreviousImage();
    }
});
