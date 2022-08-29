'use strict'



import cardsDataGreen from './data/mythicCards/green/index.js';
import cardsDataBrown from './data/mythicCards/brown/index.js';
import cardsDataBlue from './data/mythicCards/blue/index.js';
import ancientsData from './data/ancients.js'

// select ancient 

let azathoth = document.querySelector('.azathoth');
let cthulthu = document.querySelector('.cthulthu');
let iogSothoth = document.querySelector('.iogSothoth');
let shubNiggurath = document.querySelector('.shubNiggurath');

let selectedAncient;

azathoth.onclick = function() {
    azathoth.classList.add('ancient-active');
    cthulthu.classList.remove('ancient-active');
    iogSothoth.classList.remove('ancient-active');
    shubNiggurath.classList.remove('ancient-active');
    selectedAncient = ancientsData[0];
    console.log(selectedAncient);
    showCard();
}

cthulthu.onclick = function() {
    azathoth.classList.remove('ancient-active');
    cthulthu.classList.add('ancient-active');
    iogSothoth.classList.remove('ancient-active');
    shubNiggurath.classList.remove('ancient-active');
    selectedAncient = ancientsData[1];
    console.log(selectedAncient);
    showCard();
}

iogSothoth.onclick = function() {
    azathoth.classList.remove('ancient-active');
    cthulthu.classList.remove('ancient-active');
    iogSothoth.classList.add('ancient-active');
    shubNiggurath.classList.remove('ancient-active');
    selectedAncient = ancientsData[2];
    console.log(selectedAncient);
    showCard();
}

shubNiggurath.onclick = function() {
    azathoth.classList.remove('ancient-active');
    cthulthu.classList.remove('ancient-active');
    iogSothoth.classList.remove('ancient-active');
    shubNiggurath.classList.add('ancient-active');
    selectedAncient = ancientsData[3];
    console.log(selectedAncient);
    showCard();
}

// shuffle 

function shuffle(arr) {
    return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1]);
}

let randomGreen = shuffle(cardsDataGreen);
let randomBrown = shuffle(cardsDataBrown);
let randomBlue = shuffle(cardsDataBlue);

// shuffle for Azathoth

let greenAzathoth = randomGreen.slice(0, 5);
let brownAzathoth = randomBrown.slice(0, 9);
let blueAzathoth = randomBlue.slice(0, 2);


let greenFirstAzathoth = greenAzathoth.slice(0, 1);
let brownFirstAzathoth = brownAzathoth.slice(0, 2);
let blueFirstAzathoth = blueAzathoth.slice(0, 1);

let greenSecondAzathoth = greenAzathoth.slice(1, 3);
let brownSecondAzathoth = brownAzathoth.slice(2, 5);
let blueSecondAzathoth = blueAzathoth.slice(1);

let greenThirdAzathoth = greenAzathoth.slice(3);
let brownThirdAzathoth = brownAzathoth.slice(5);


let firstAzathoth = [...greenFirstAzathoth, ...brownFirstAzathoth, ...blueFirstAzathoth];
let randomFirstAzathoth = shuffle(firstAzathoth);

let secondAzathoth = [...greenSecondAzathoth, ...brownSecondAzathoth, ...blueSecondAzathoth];
let randomSecondAzathoth = shuffle(secondAzathoth);

let thirdAzathoth = [...greenThirdAzathoth, ...brownThirdAzathoth];
let randomThirdAzathoth = shuffle(thirdAzathoth);

let randomAzathoth = [...randomFirstAzathoth, ...randomSecondAzathoth, ...randomThirdAzathoth];

// shuffle for Cthulthu

let greenCthulthu = randomGreen.slice(0, 4);
let brownCthulthu = randomBrown.slice(0, 9);
let blueCthulthu = randomBlue.slice(0, 2);


let brownFirstCthulthu = brownCthulthu.slice(0, 2);
let blueFirstCthulthu = blueCthulthu.slice(0, 2);

let greenSecondCthulthu = greenCthulthu.slice(0, 1);
let brownSecondCthulthu = brownCthulthu.slice(2, 5);

let greenThirdCthulthu = greenCthulthu.slice(1);
let brownThirdCthulthu = brownCthulthu.slice(5);


let firstCthulthu = [...brownFirstCthulthu, ...blueFirstCthulthu];
let randomFirstCthulthu = shuffle(firstCthulthu);

let secondCthulthu = [...greenSecondCthulthu, ...brownSecondCthulthu];
let randomSecondCthulthu = shuffle(secondCthulthu);

let thirdCthulthu = [...greenThirdCthulthu, ...brownThirdCthulthu];
let randomThirdCthulthu = shuffle(thirdCthulthu);

let randomCthulthu = [...randomFirstCthulthu, ...randomSecondCthulthu, ...randomThirdCthulthu];

// shuffle for IogSothoth

let greenIogSothoth = randomGreen.slice(0, 5);
let brownIogSothoth = randomBrown.slice(0, 9);
let blueIogSothoth = randomBlue.slice(0, 2);


let brownFirstIogSothoth = brownIogSothoth.slice(0, 2);
let blueFirstIogSothoth = blueIogSothoth.slice(0, 1);

let greenSecondIogSothoth = greenIogSothoth.slice(0, 2);
let brownSecondIogSothoth = brownIogSothoth.slice(2, 5);
let blueSecondIogSothoth = blueIogSothoth.slice(1, 2);

let greenThirdIogSothoth = greenIogSothoth.slice(2);
let brownThirdIogSothoth = brownIogSothoth.slice(5);


let firstIogSothoth = [...brownFirstIogSothoth, ...blueFirstIogSothoth];
let randomFirstIogSothoth = shuffle(firstIogSothoth);

let secondIogSothoth = [...greenSecondIogSothoth, ...brownSecondIogSothoth, ...blueSecondIogSothoth];
let randomSecondIogSothoth = shuffle(secondIogSothoth);

let thirdIogSothoth = [...greenThirdIogSothoth, ...brownThirdIogSothoth];
let randomThirdIogSothoth = shuffle(thirdIogSothoth);

let randomIogSothoth = [...randomFirstIogSothoth, ...randomSecondIogSothoth, ...randomThirdIogSothoth];


// shuffle for ShubNiggurath

let greenShubNiggurath = randomGreen.slice(0, 6);
let brownShubNiggurath = randomBrown.slice(0, 8);
let blueShubNiggurath = randomBlue.slice(0, 2);


let greenFirstShubNiggurath = greenShubNiggurath.slice(0, 1);
let brownFirstShubNiggurath = brownShubNiggurath.slice(0, 2);
let blueFirstShubNiggurath = blueShubNiggurath.slice(0, 1);

let greenSecondShubNiggurath = greenShubNiggurath.slice(1, 4);
let brownSecondShubNiggurath = brownShubNiggurath.slice(2, 4);
let blueSecondShubNiggurath = blueShubNiggurath.slice(1, 2);

let greenThirdShubNiggurath = greenShubNiggurath.slice(4);
let brownThirdShubNiggurath = brownShubNiggurath.slice(4);


let firstShubNiggurath = [...greenFirstShubNiggurath, ...brownFirstShubNiggurath, ...blueFirstShubNiggurath];
let randomFirstShubNiggurath = shuffle(firstShubNiggurath);

let secondShubNiggurath = [...greenSecondShubNiggurath, ...brownSecondShubNiggurath, ...blueSecondShubNiggurath];
let randomSecondShubNiggurath = shuffle(secondShubNiggurath);

let thirdShubNiggurath = [...greenThirdShubNiggurath, ...brownThirdShubNiggurath];
let randomThirdShubNiggurath = shuffle(thirdShubNiggurath);

let randomShubNiggurath = [...randomFirstShubNiggurath, ...randomSecondShubNiggurath, ...randomThirdShubNiggurath];

// show cards

let card = document.querySelector('.card');
let buttonCard = document.querySelector('.show-card');

function showCard() {
    if (selectedAncient == ancientsData[0]) {
        console.log(randomAzathoth);
        card.src = randomAzathoth[0].cardFace;
        randomAzathoth.shift();
        if (randomAzathoth.length == 0) {
            alert('No cards left for Azathoth');
            card.src = './assets/mythicCardBackground.webp';
        }
    } else if (selectedAncient == ancientsData[1]) {
        console.log(randomCthulthu);
        card.src = randomCthulthu[0].cardFace;
        randomCthulthu.shift();
        if (randomCthulthu.length == 0) {
            alert('No cards left for Cthulthu');
            card.src = './assets/mythicCardBackground.webp';
        }
    } else if (selectedAncient == ancientsData[2]) {
        console.log(randomIogSothoth);
        card.src = randomIogSothoth[0].cardFace;
        randomIogSothoth.shift();
        if (randomIogSothoth.length == 0) {
            alert('No cards left for IogSothoth');
            card.src = './assets/mythicCardBackground.webp';
        }
    } else if (selectedAncient == ancientsData[3]) {
        console.log(randomShubNiggurath);
        card.src = randomShubNiggurath[0].cardFace;
        randomShubNiggurath.shift();
        if (randomShubNiggurath.length == 0) {
            alert('No cards left for ShubNiggurath');
            card.src = './assets/mythicCardBackground.webp';
    }
}
}
   
buttonCard.addEventListener('click', showCard);

