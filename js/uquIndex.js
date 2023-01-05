const videoEndTime = 10;
const startMusicAfterMS = 5500 + ((10 - videoEndTime) * 1000);

let vid = document.getElementById("myVideo");
let skipEl = document.getElementById("skipHint");
let innerDiv = document.getElementById("innerHide");
let mainDiv = document.getElementById("toHide");

let quotes = [
    '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”',
    '“Experience is the name everyone gives to their mistakes.”',
    '“Java is to Javascript what car is to Carpet.”',
    '“Knowledge is power”',
    '“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”',
    '“Code is like humor. When you have to explain it, it\'s bad.”',
    '“Never Gonna Give You Up”',
    '“Life is not a problem to be solved, but a reality to be experienced.”',
    '“Every saint has a past, and every sinner has a future.”',
    '“You will not be punished for your anger, you will be punished by your anger.”',
    '“Keep your face always toward the sunshine and shadows will fall behind you.”',
    '“Dead people receive more flowers than the living ones because regret is stronger than gratitude.”',
    '“Better a cruel truth than a comfortable delusion.”',
    '“Don\'t use yesterday\'s state of mind, to make today\'s decision.”',
    '“A ship in harbor is safe, but that is not what ships are built for.”',
    '“Once we accept our limits, we go beyond them.”',
    '“No.”'
];

let randomNum =  Math.floor(Math.random() * (quotes.length));
document.getElementById("quote").innerHTML = quotes[randomNum];

// screen clicks counter
let clickCount = 0;
window.onclick = function() {

    clickCount++;
    
    // skip video if clicks more than 7
    if (clickCount > 7 && vid.currentTime < videoEndTime) {
        vid.currentTime = videoEndTime;
    }
    // stop audio if clicks more than 20
    if (clickCount > 20) {
        document.getElementById("audio_player").pause();
    }
}

function hide() {
    vid.hidden = false;
    vid.play();
    skipEl.hidden = false;
    setTimeout(function() {
        innerDiv.hidden = true;
    }, 500);
}

let interval = setInterval(function () {
    if (vid.currentTime > videoEndTime) {
        vid.hidden = true;
        skipEl.hidden = true;
        mainDiv.hidden = true;
        setTimeout(() => {
            let el = document.getElementById("audio_player");
            if (el.paused) {
                el.play();
            }
        }, startMusicAfterMS);
        clearInterval(interval);
    }
}, 10);
