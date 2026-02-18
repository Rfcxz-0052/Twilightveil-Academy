const bgmMap = {
    surface: document.getElementById("bgmSurface"),
    inner: document.getElementById("bgmInner"),
    suspense: document.getElementById("bgmSuspense")
};

const seMap = {
    cry: document.getElementById("seCry")
};

let currentBGM = null;

// 直接切換 BGM，不淡入淡出
function switchBGM(name) {
    const target = bgmMap[name];
    if (!target || target === currentBGM) return;

    if (currentBGM) currentBGM.pause(); // 停掉舊音樂
    target.currentTime = 0;
    target.play();
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
