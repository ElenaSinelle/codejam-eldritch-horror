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
}

cthulthu.onclick = function() {
    azathoth.classList.remove('ancient-active');
    cthulthu.classList.add('ancient-active');
    iogSothoth.classList.remove('ancient-active');
    shubNiggurath.classList.remove('ancient-active');
    selectedAncient = ancientsData[1];
    console.log(selectedAncient);
}

iogSothoth.onclick = function() {
    azathoth.classList.remove('ancient-active');
    cthulthu.classList.remove('ancient-active');
    iogSothoth.classList.add('ancient-active');
    shubNiggurath.classList.remove('ancient-active');
    selectedAncient = ancientsData[2];
    console.log(selectedAncient);
}

shubNiggurath.onclick = function() {
    azathoth.classList.remove('ancient-active');
    cthulthu.classList.remove('ancient-active');
    iogSothoth.classList.remove('ancient-active');
    shubNiggurath.classList.add('ancient-active');
    selectedAncient = ancientsData[3];
    console.log(selectedAncient);
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



// show cards for Azathoth
let card = document.querySelector('.card');

function showCard() {
    console.log(randomAzathoth);
    card.src = randomAzathoth[0].cardFace;
    randomAzathoth.shift();
}
card.addEventListener('click', showCard);

// counter

    let counterGreen1 = 1;
    let counterBrown1 = 2;
    let counterBlue1 = 1;


function countClicks() {
    
    if (randomAzathoth.color === 'green') {
        document.getElementById('text-green-1').innerHTML = 0;
    }
    
}



card.addEventListener('click', countClicks);
