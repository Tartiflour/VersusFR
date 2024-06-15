const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const imgElement = document.querySelector('#img');
const loadingSpinner = document.querySelector('#loading-spinner');

const images = [
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246389925155180555/1.png?ex=665c3692&is=665ae512&hm=9c9990b0abde9c8677073cb6087aa50b0e14d4528767d2f1f0df70929d665ef8&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246406720490831872/2.png?ex=665c4637&is=665af4b7&hm=663e9429f4fe5cdcb0d75aed75cf67d437da0d8cb5e6dd63f214b24c1706b06a&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246406721014988872/3.png?ex=665c4637&is=665af4b7&hm=7f5f5a02139317758b0107517b4a42c317c675cc47dcdc03d218303e514b4ce6&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246406721597866015/4.png?ex=665c4637&is=665af4b7&hm=f155e1040196cb1b76456de48b484336fc6306888103bf7380cd79fa814c84fe&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246407070060908644/5.png?ex=665c468a&is=665af50a&hm=140e844f23db71e79f5b4ec3dc844842cfba100e80311bb5ab64634aae92d7d6&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246407070891380826/6.png?ex=665c468a&is=665af50a&hm=f4de55de419c9fc3cedcee1146851addf8e5111dd2153823785d8f22854dbac6&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246407071537041468/7.png?ex=665c468a&is=665af50a&hm=97606091be2a8f18a8a1cb479b0ad852b152fbbbc298dc44272993be486fc430&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246407072065781811/8.png?ex=665c468b&is=665af50b&hm=41e57e49b407c2b06db70551f3b4c768f557b2baa8134abc34ae58bfff945c39&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246429769474773072/9.png?ex=665c5bae&is=665b0a2e&hm=caa87717a1f0e4145610f194627d69d8f9f7fa4a8279d7d0fd177a910b17fd16&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246429770133147799/10.png?ex=665c5bae&is=665b0a2e&hm=715f9a0337897692a8256d911116de4eb0caaaa5c85312867e208349e9d896a1&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246429770766352494/11.png?ex=665c5bae&is=665b0a2e&hm=a9a13dfe4c98787c6ee5af4ede71ec4961d192ab6b1715b0805e175fae5748f5&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246429771265609758/12.png?ex=665c5baf&is=665b0a2f&hm=2acc39c5c05456548e4eb90de84f87af012c0b3c450089055b5e3beb4fb01fa3&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246430158152401007/13.png?ex=665c5c0b&is=665b0a8b&hm=3002777468c1380b1faf8a0b850832b1fdd784ccbb26d6e4dac8cd94d48d4494&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246430158840135680/14.png?ex=665c5c0b&is=665b0a8b&hm=0b4e9d3cd040bcd9a35081230445d83f6410e699306fab6475ff293a0250d404&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246430159326806096/15.png?ex=665c5c0b&is=665b0a8b&hm=8b1484caae41a5c0a2585a0dd39a4b23400c8bcf52e32cf861884bf254c3a5e4&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246430160102756382/16.png?ex=665c5c0b&is=665b0a8b&hm=495f0b4a99282479fa42fe99000e1ff52cec3d5375fbe8b2a979aaf27908d8f1&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246430472431468564/17.png?ex=665c5c56&is=665b0ad6&hm=f41eb8274411acd6c346b90a072a606d779925fd2528bd283ac5aa011907edf4&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246430473165602918/18.png?ex=665c5c56&is=665b0ad6&hm=8957e050e366d2dfeb69acfdeb82dc7da77bcf18f699d49f9fdbff7bdb530fdf&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246430473765257296/19.png?ex=665c5c56&is=665b0ad6&hm=bd82fc0960be156706ecfd5828a22f7b1837a07b8e063509d4465943465379a1&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246430474331754496/20.png?ex=665c5c56&is=665b0ad6&hm=27109b390de0d6567524e965de344ad507082f335241483601acfe1072e62268&",
    "https://cdn.discordapp.com/attachments/1119607851485245451/1246430474918821888/21.png?ex=665c5c56&is=665b0ad6&hm=b3c3f18ad0864d84251c4a76a0c6f282040e07008d79a6853bdcdee9b4496462&"
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