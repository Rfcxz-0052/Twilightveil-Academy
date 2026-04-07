// audioController.js
export const bgmMap = {
    surface: document.getElementById("bgmSurface"),
    inner: document.getElementById("bgmInner"),
    suspense: document.getElementById("bgmSuspense")
};

export const seMap = {
    ghost: document.getElementById("seghost"),
    page: document.getElementById("sepage"),
    attack01: document.getElementById("seattack01"),
    attack02: document.getElementById("seattack02"),
    ghost01: document.getElementById("seghost01"),
    foot: document.getElementById("sefoot")
};

let currentBGM = null;
export let bgmVolume = parseFloat(localStorage.getItem("bgmVolume")) || 0.4;
export let seVolume = parseFloat(localStorage.getItem("seVolume")) || 1.0;

export function setBGMVolume(value){
    bgmVolume=parseFloat(value);
    Object.values(bgmMap).forEach(bgm=>bgm.volume=bgmVolume);
    localStorage.setItem("bgmVolume",bgmVolume);
}

export function setSEVolume(value){
    seVolume=parseFloat(value);
    Object.values(seMap).forEach(se=>se.volume=seVolume);
    localStorage.setItem("seVolume",seVolume);
}

export function switchBGM(name){
    const target = bgmMap[name];
    if(!target) return;

    // ✅ 如果是同一首，就不要動
    if(target === currentBGM) return;

    if(currentBGM){
        currentBGM.pause();
    }

    // ✅ 只有「新BGM」才從頭播放
    target.currentTime = 0;
    target.volume = bgmVolume;
    target.play();

    currentBGM = target;
}

export function playSE(name){
    const sound=seMap[name];
    if(!sound)return;
    if(currentBGM)currentBGM.volume=bgmVolume*0.6;
    sound.currentTime=0; sound.volume=seVolume; sound.play();
    sound.onended=()=>{ if(currentBGM)currentBGM.volume=bgmVolume; }
}

export function stopSE(name){
    const sound=seMap[name];
    if(!sound){ console.warn(`stopSE: sound "${name}" not found`); return; }
    sound.pause(); sound.currentTime=0;
}

// 初始化音量
setBGMVolume(bgmVolume);
setSEVolume(seVolume);