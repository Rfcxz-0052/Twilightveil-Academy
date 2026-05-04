// audioController.js
import { getBGM } from "./assetManager.js";

let currentBGM = null;
export let currentBGMName = null;
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

    if(!name){
        if(currentBGM){
            currentBGM.pause();
            currentBGM.currentTime = 0;
        }
        currentBGM = null;
        currentBGMName = null;
        return;
    }

    // ⭐ 核心：只看名字
    if(currentBGMName === name){
        return;
    }

    if(currentBGM){
        currentBGM.pause();
        currentBGM.currentTime = 0;
    }

    currentBGM = getBGM(name);
    currentBGMName = name;

    currentBGM.volume = bgmVolume;
    currentBGM.play();
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
// ⛔ 停止全部音效（BGM + SE）
// ======================
export function stopAllAudio() {
    // 停 BGM
    if (currentBGM) {
        currentBGM.pause();
        currentBGM.currentTime = 0;
        currentBGM = null;
        currentBGMName = null; // ⭐關鍵：重置狀態
    }

    // 停 SE
    if (currentSE) {
        currentSE.pause();
        currentSE.currentTime = 0;
        currentSE = null;
    }
}

// ======================
// 🔇 停止 SE（單獨控制）
// ======================
export function stopSE() {
    if (currentSE) {
        currentSE.pause();
        currentSE.currentTime = 0;
        currentSE = null;
    }
}