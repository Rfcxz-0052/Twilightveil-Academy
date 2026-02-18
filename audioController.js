const bgmMap = {
    surface: document.getElementById("bgmSurface"),
    inner: document.getElementById("bgmInner"),
    suspense: document.getElementById("bgmSuspense")
};

const seMap = {
    ghost: document.getElementById("seghost"),
    page: document.getElementById("sepage"),
    attack01: document.getElementById("seattack01"),
};

let currentBGM = null;

// 🔊 音量變數（從 localStorage 讀取）
let bgmVolume = parseFloat(localStorage.getItem("bgmVolume")) || 0.4;
let seVolume = parseFloat(localStorage.getItem("seVolume")) || 1.0;

// 🎚 設定 BGM 音量
function setBGMVolume(value) {
    bgmVolume = parseFloat(value);
    Object.values(bgmMap).forEach(bgm => {
        bgm.volume = bgmVolume;
    });
    localStorage.setItem("bgmVolume", bgmVolume);
}

// 🎚 設定 SE 音量
function setSEVolume(value) {
    seVolume = parseFloat(value);
    Object.values(seMap).forEach(se => {
        se.volume = seVolume;
    });
    localStorage.setItem("seVolume", seVolume);
}

// 🎵 切換音樂
function switchBGM(name) {
    const target = bgmMap[name];
    if (!target || target === currentBGM) return;

    if (currentBGM) currentBGM.pause();

    target.currentTime = 0;
    target.play();
    currentBGM = target;
}

// 🔊 播放音效
function playSE(name) {
    const sound = seMap[name];
    if (!sound) return;

    if (currentBGM) {
        // 壓低音樂（保留原本音量比例）
        currentBGM.volume = bgmVolume * 0.6;
    }

    sound.currentTime = 0;
    sound.volume = seVolume;
    sound.play();

    sound.onended = () => {
        if (currentBGM) {
            currentBGM.volume = bgmVolume;
        }
    };
}

// 停止音效
function stopSE(name) {
    const sound = seMap[name];
    if (!sound) {
        console.warn(`stopSE: sound "${name}" not found`);
        return;
    }
    sound.pause();
    sound.currentTime = 0;
}

// 初始化音量
setBGMVolume(bgmVolume);
setSEVolume(seVolume);
