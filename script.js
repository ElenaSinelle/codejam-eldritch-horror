'use strict'

// shuffle for Azathoth

import cardsDataGreen from './data/mythicCards/green/index.js';
import cardsDataBrown from './data/mythicCards/brown/index.js';
import cardsDataBlue from './data/mythicCards/blue/index.js';

function shuffle(arr) {
    return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1]);
}

let randomGreen = shuffle(cardsDataGreen);
let randomBrown = shuffle(cardsDataBrown);
let randomBlue = shuffle(cardsDataBlue);

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



// show cards for Azathoth
let card = document.querySelector('.card');

function showCard() {
    console.log(randomAzathoth);
    card.src = randomAzathoth[0].cardFace;
    randomAzathoth.shift();
}

card.addEventListener('click', showCard);

