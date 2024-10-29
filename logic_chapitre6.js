const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const imgElement = document.querySelector('#img');
const loadingSpinner = document.querySelector('#loading-spinner');

const images = [
    "https://i.pinimg.com/736x/50/d5/9c/50d59c53e16c455a9c0af2449ac90435.jpg",
    "https://i.pinimg.com/736x/55/a0/db/55a0db20b503765bb926398a9c6a98d5.jpg",
    "https://i.pinimg.com/736x/52/7f/fd/527ffd6a68fd39c58c2e83b42a10dce8.jpg",
    "https://i.pinimg.com/736x/63/f9/21/63f921a523fdb574a66ba5869207343f.jpg",
    "https://i.pinimg.com/736x/78/b7/34/78b7349fb7e86f043dc231460e3f8269.jpg",
    "https://i.pinimg.com/736x/71/bf/1d/71bf1d643880c7ce7ae1e5c773676568.jpg",
    "https://i.pinimg.com/736x/e1/45/c0/e145c04b55cc89e9d1b2867fe2504fd9.jpg",
    "https://i.pinimg.com/736x/78/6f/10/786f1036d1502e9c9252fc880e68c778.jpg",
    "https://i.pinimg.com/736x/99/08/f7/9908f7492ebbf516f6a19cfe831bdee5.jpg",
    "https://i.pinimg.com/736x/1c/0a/ca/1c0acaeb1f9c2b048ba7020808f7dfd6.jpg",
    "https://i.pinimg.com/736x/bd/e9/b3/bde9b3abc75f102aa3b5f3e8ec27c89d.jpg",
    "https://i.pinimg.com/736x/06/4e/31/064e310a1b491ac90daac38aafc584cd.jpg",
    "https://i.pinimg.com/736x/a4/f0/fb/a4f0fb9ef17b265e468b7766df37d9c9.jpg",
    "https://i.pinimg.com/736x/4b/3e/93/4b3e93ed04d9dc4b5685a41624e36b17.jpg",
    "https://i.pinimg.com/736x/84/87/5b/84875b4659ab64f03d35d6e6ead1affd.jpg",
    "https://i.pinimg.com/736x/6f/28/bc/6f28bc7877925ef7917aff3d64859767.jpg",
    "https://i.pinimg.com/736x/84/c9/f9/84c9f9a7fb9cb728e08d317105e05e54.jpg",
    "https://i.pinimg.com/736x/ce/4d/ff/ce4dff0df6c56e33454bfb42424af285.jpg",
    "https://i.pinimg.com/736x/9b/e7/20/9be720b54a6bc017b80c90808a412165.jpg",
    "https://i.pinimg.com/736x/27/c0/f3/27c0f3f0c0fcb7a59d80f605b886522b.jpg",
    "https://i.pinimg.com/736x/95/77/80/957780365f9f3d9e1d3f776a46d81e7b.jpg",
    "https://i.pinimg.com/736x/65/cd/f7/65cdf70a0563af6fc8819cd7b6f2484b.jpg",
    "https://i.pinimg.com/736x/04/f8/3a/04f83a9ec50e381d2e9eae95a589c8a5.jpg",
    "https://i.pinimg.com/736x/e0/f4/d5/e0f4d5918c5792567786ff9835b77343.jpg",
    "https://i.pinimg.com/736x/bd/8c/d5/bd8cd584a3af923a56802e0c8c244a32.jpg",
    "https://i.pinimg.com/736x/4f/e3/d9/4fe3d9c5c311d3e661dd13d17836f6ae.jpg",
    "https://i.pinimg.com/736x/a7/5f/2b/a75f2b5138845ff99a47432278b9107c.jpg",
    "https://i.pinimg.com/736x/54/1f/5e/541f5ef35f65a9cc79b138f3f64c28cb.jpg",
    "https://i.pinimg.com/736x/f8/f5/06/f8f5063168a8aba6e4802537ccf337d8.jpg",
    "https://i.pinimg.com/736x/17/17/44/171744ffb3ab18b03a023b316a8ee3e8.jpg"
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
