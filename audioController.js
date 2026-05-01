// audioController.js
import { getBGM, playSEPool } from "./assetManager.js";

let currentBGM = null;
let currentSE = null;

export let bgmVolume = parseFloat(localStorage.getItem("bgmVolume")) || 0.4;
export let seVolume = parseFloat(localStorage.getItem("seVolume")) || 1.0;

// ======================
// 🔊 音量控制
// ======================
export function setBGMVolume(value){
    bgmVolume = parseFloat(value);

    if(currentBGM){
        currentBGM.volume = bgmVolume;
    }

    localStorage.setItem("bgmVolume", bgmVolume);
}

export function setSEVolume(value){
    seVolume = parseFloat(value);
    localStorage.setItem("seVolume", seVolume);
}

// ======================
// 🎵 BGM 切換（延遲載入）
// ======================
export function switchBGM(name){
    const target = getBGM(name);

    if(!target) return;

    // ✅ 同一首不重播
    if(target === currentBGM) return;

    if(currentBGM){
        currentBGM.pause();
    }

    target.currentTime = 0;
    target.volume = bgmVolume;
    target.play();

    currentBGM = target;
}

// ======================
// 🔊 音效（Pool）
// ======================
export function playSE(name){

    // 🔥 停掉上一個 SE（核心）
    if (currentSE) {
        currentSE.pause();
        currentSE.currentTime = 0;
    }

    const sound = new Audio(`audio/${name}.mp3`);
    sound.volume = seVolume;

    sound.play().catch(() => {});

    currentSE = sound;

    // 🔽 保留 BGM 壓低效果
    if(currentBGM){
        currentBGM.volume = bgmVolume * 0.6;
        setTimeout(() => {
            if(currentBGM){
                currentBGM.volume = bgmVolume;
            }
        }, 300);
    }
}

// ======================
// ⛔ 停止音效（可不實作）
// ======================
export function stopSE(){
    if (currentSE) {
        currentSE.pause();
        currentSE.currentTime = 0;
        currentSE = null;
    }
}