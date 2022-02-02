'use strict';

const conteiner = document.createElement('div');
conteiner.className = 'conteiner';
document.body.append(conteiner);

const banner = document.createElement('div');
banner.className = 'banner';
banner.style.height = innerHeight + 'px'; //высота на весь экран

//header
const bannerHeader = document.createElement('header');
bannerHeader.className = 'banner__header';
banner.append(bannerHeader);

const bannerHeaderLink = document.createElement('div');
bannerHeaderLink.className = 'header__link';
const headerLogo = document.createElement('div');
headerLogo.className = 'header__logo';
const headerBtn = document.createElement('button');
headerBtn.className = 'header__button';
headerBtn.type = 'button';
headerBtn.innerHTML = 'Check out(0)';

bannerHeader.append(headerLogo, bannerHeaderLink, headerBtn);

class Header {
    constructor(link, text) {
        this.link = link;
        this.text = text;
    }
};
const header = [
    new Header('https://yandex.ru/', 'Service'),
    new Header('https://www.google.ru/', 'Blog'),
    new Header('https://www.sports.ru/', 'Shop'),
    new Header('https://www.forbes.ru/', 'Location'),
];

let nameHeader = '';
header.forEach(item => {
    nameHeader += `<a href='${item.link}' class='banner__header' title=''><h3>${item.text}</h3></a>`
    ;
});
bannerHeaderLink.innerHTML += nameHeader;

//banner text
const bannerBlockText = document.createElement('div');
bannerBlockText.className = 'banner__block';
banner.append(bannerBlockText);
const bannerBigText = document.createElement('h1');
bannerBigText.className = 'banner__big-text';
bannerBigText.innerHTML = 'Let’s find<br/>your love<br/><span>plants.</span>';

const bannerSmallText = document.createElement('h3');
bannerSmallText.className = 'banner__small-text';
bannerSmallText.innerHTML = 'Add some color to your home, give it a<br/> little attention, the plants will<br/> accompany you quietly';


const ellipse = document.createElement('div');
ellipse.className = 'banner__ellipse'; 

const playBtn = document.createElement('div');
playBtn.className = 'banner__play-btn';

const bannerVideo = document.createElement('button');
bannerVideo.className = 'banner__button-video';
bannerVideo.innerHTML = '<p>WATCH THE VIDEO</p>';

const bannerLogo = document.createElement('div');
bannerLogo.className = 'banner__logo';

class Pic {
    constructor (img) {
        this.img = img;
    }
};

const pic = [
    new Pic('img/plant1.png'),
    new Pic('img/plant2.png'),
    new Pic('img/plant3.png'),
    new Pic('img/plant4.png'),
];

let bannerPick = '';
pic.forEach(e => {
    bannerPick +=`
    <img alt='type' src='${e.img}'>
    `
})
bannerLogo.innerHTML += bannerPick;


bannerBlockText.append(bannerBigText, bannerSmallText, ellipse, playBtn, bannerVideo, bannerLogo);

//main

//main btn
const main = document.createElement('main');

const typesOfPlan = document.createElement('div');
typesOfPlan.className = 'main__types';

const mainConteiner = document.createElement('div');
mainConteiner.className = 'main__conteiner';
const mainButton = document.createElement('button');
mainButton.className = 'main__button';
mainButton.innerHTML = 'Try for service';
const mainBigText = document.createElement('h2');
mainBigText.className = 'main__big-text';
mainBigText.innerHTML = 'Get a beautiful home';
const mainSmallText = document.createElement('h3');
mainSmallText.className = 'main__small-text';
mainSmallText.innerHTML = 'If you don’t know what plants you can add to the space<br/> We can provide you with selected plants<br/> And configure your space'
mainConteiner.append(mainButton, mainBigText, mainSmallText);


//4 types of plants
const mainCaption = document.createElement('h2');
mainCaption.className = 'main__caption';
mainCaption.innerText = '4 types of plants';
typesOfPlan.append(mainCaption);


class Plant {
    constructor(capt, imgPath, cat, mini) {
        this.caption = capt;
        this.pic = imgPath;
        this.count = cat;
        this.imgType = mini;
    }
}
const data = [
    new Plant('Foliage', 'img/bg1.png', 21, 'img/plant1.png'),
    new Plant('Pucculent', 'img/bg2.png', 4, 'img/plant2.png'),
    new Plant('Flower', 'img/bg3.png', 8, 'img/plant3.png'),
    new Plant('Fruit', 'img/bg4.png', 10, 'img/plant4.png'),
];

let mainContent = "";
data.forEach(plant => {
    // const card = document.createElement("div");
    // card.className = "main__item";
    // card.style.backgroundImage = `url(${plant.pic})`;
    // main.append(card);
    mainContent += `
        <div class="main__item" style="background-image: url(${plant.pic})">
            <h3>${plant.caption}</h3>
            <div class="main__item-text">${plant.count} plants</div>
            <img alt="${plant.caption}" src="${plant.imgType}">
        </div>
    `
});

typesOfPlan.innerHTML += mainContent;

conteiner.append(banner, main);
main.append(mainConteiner, typesOfPlan);