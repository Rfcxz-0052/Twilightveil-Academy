// audioController.js

const bgmMap = {
    surface: document.getElementById("bgmSurface"),
    inner: document.getElementById("bgmInner"),
    suspense: document.getElementById("bgmSuspense")
};

const seMap = {
    cry: document.getElementById("seCry")
};

let currentBGM = null;

function fadeOut(audio) {
    if (!audio) return;

    let fade = setInterval(() => {
        if (audio.volume > 0.05) {
            audio.volume -= 0.05;
        } else {
            audio.pause();
            audio.volume = 1;
            clearInterval(fade);
        }
    }, 100);
}

function fadeIn(audio) {
    if (!audio) return;

    audio.volume = 0;
    audio.play();

    let fade = setInterval(() => {
        if (audio.volume < 0.95) {
            audio.volume += 0.05;
        } else {
            audio.volume = 1;
            clearInterval(fade);
        }
    }, 100);
}

function switchBGM(name) {
    const target = bgmMap[name];
    if (!target || target === currentBGM) return;

    fadeOut(currentBGM);
    fadeIn(target);
    currentBGM = target;
}

function playSE(name) {
    const sound = seMap[name];
    if (!sound) return;

    sound.currentTime = 0;
    sound.play();
}

function stopSE(name) {
    const sound = seMap[name];
    if (!sound) return;

    sound.pause();
    sound.currentTime = 0;
}
