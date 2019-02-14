// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


// // First we check if you support touch, otherwise it's click:
// let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

// // Then we bind via thát event. This way we only bind one event, instead of the two as below
// document.getElementById('theme').addEventListener(touchEvent, playNoelsNewsTheme);
// document.getElementById('wellyoungfella').addEventListener(touchEvent, playWellYoungFella);
// document.getElementById('creamypynnnts').addEventListener(touchEvent, playCreamyPyyynts);
// document.getElementById('driveit').addEventListener(touchEvent, playDriveIt);
// document.getElementById('getloose').addEventListener(touchEvent, playNoelsNewsTheme);
// document.getElementById('thatsafact').addEventListener(touchEvent, playNoelsNewsTheme);
// document.getElementById('hah').addEventListener(touchEvent, playNoelsNewsTheme);
// document.getElementById('19years').addEventListener(touchEvent, playNoelsNewsTheme);
// document.getElementById('blah').addEventListener(touchEvent, playNoelsNewsTheme);
// document.getElementById('rightshower').addEventListener(touchEvent, playNoelsNewsTheme);



function playWellYoungFella() {
    var audio = new Audio('./audio/wellyoungfella.mp3');
    audio.play();

}

function playNoelsNewsTheme() {

    var audio = new Audio('./audio/noelsnews.mp3');
    audio.play();
}

function playGetLoose() {

    var audio = new Audio('./audio/getloose.mp3');
    audio.play();
}

function playThatsAFact() {

    var audio = new Audio('./audio/thatsafact.mp3');
    audio.play();
}

function playHah() {

    var audio = new Audio('./audio/hah.mp3');
    audio.play();
}

function play19YearsSenior() {

    var audio = new Audio('./audio/19yearssenior.mp3');
    audio.play();
}

function playBlahhh() {

    var audio = new Audio('./audio/blahhh.mp3');
    audio.play();
}

function playRightShower() {

    var audio = new Audio('./audio/rightshower.mp3');
    audio.play();
}

function playCreamyPyyynts() {

    var audio = new Audio('./audio/creamypyyynts.mp3');
    audio.play();
}

function playDriveIt() {

    var audio = new Audio('./audio/driveit.mp3');
    audio.play();
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('../service-worker.js')
        .then(function () { console.log('Service Worker Registered'); }).catch(error => {
            console.log(error.message);
        });
} else {
    console.log('Service workers are not supported.');
};