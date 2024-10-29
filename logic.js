const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const imgElement = document.querySelector('#img');
const loadingSpinner = document.querySelector('#loading-spinner');

const images = [
    "https://i.pinimg.com/736x/cb/76/3c/cb763c722ba1ee9d728b2a3d66553e48.jpg",
    "https://i.pinimg.com/736x/56/a7/25/56a725d437be247993d38b238793e427.jpg",
    "https://i.pinimg.com/736x/52/f2/8b/52f28bca4ab5d0de6685a7bc61b274c3.jpg",
    "https://i.pinimg.com/736x/aa/07/65/aa07650682742a98f4c1dbfaec538ffd.jpg",
    "https://i.pinimg.com/736x/3e/64/89/3e6489b24759d7fea076d0e399e9b9c9.jpg",
    "https://i.pinimg.com/736x/64/3a/30/643a300fa6fbf2d1f584bb9fc137a04f.jpg",
    "https://i.pinimg.com/736x/dd/5c/6f/dd5c6f14464a41e8e71b0fd5674b168a.jpg",
    "https://i.pinimg.com/736x/89/6e/dc/896edcbad5d3baca9e52b1f63d784734.jpg",
    "https://i.pinimg.com/736x/ee/42/6b/ee426bcef54bcdb785e132ea44f962f0.jpg",
    "https://i.pinimg.com/736x/2e/dd/0c/2edd0c6a6adbf04d9aabb266c09735c0.jpg",
    "https://i.pinimg.com/736x/85/0a/52/850a527a8ce8d4dae55250910ea9d6b0.jpg",
    "https://i.pinimg.com/736x/69/fc/3f/69fc3f023ff324513cd67c537c7f764d.jpg",
    "https://i.pinimg.com/736x/bd/9d/1c/bd9d1c7f86119991c5821e5a44ff7146.jpg",
    "https://i.pinimg.com/736x/4e/3e/0d/4e3e0d0486b4f23e5c902e4dce45efd1.jpg",
    "https://i.pinimg.com/736x/ad/65/ff/ad65fff95dc8f8b6ccd00dba11f72b24.jpg",
    "https://i.pinimg.com/736x/67/cf/1a/67cf1a0594a19152f2c9e56415e1a330.jpg",
    "https://i.pinimg.com/736x/39/6b/ef/396bef9f19717be31239b71bb79eff7b.jpg",
    "https://i.pinimg.com/736x/24/94/d4/2494d4d701b3d5d1b027bd023ba0fedd.jpg",
    "https://i.pinimg.com/736x/3f/16/1e/3f161e81306e6d2ae7792832e760ce26.jpg",
    "https://i.pinimg.com/736x/be/c3/15/bec315a15bb7856ccaa60f5049cf7ed4.jpg",
    "https://i.pinimg.com/736x/5d/bf/5c/5dbf5c1c38b702a12f59958d59361496.jpg"
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
