// assetManager.js

// ======================
// 🧠 快取區
// ======================
const imageCache = new Set();
const audioCache = {};
const seCache = {};

// ======================
// 🖼️ 圖片預載
// ======================
export function preloadImages(srcList = []) {
    srcList.forEach(src => {
        if (!src || imageCache.has(src)) return;

        const img = new Image();
        img.src = src;

        imageCache.add(src);
    });
}

// ======================
// 🎭 角色圖片預載
// ======================
export function preloadCharacters(node, characterConfig) {
    if (!node.characters) return;

    Object.keys(node.characters).forEach(charId => {
        const char = characterConfig[charId];
        if (!char) return;

        preloadImages(Object.values(char));
    });
}

// ======================
// 🎵 BGM（延遲載入）
// ======================
export function getBGM(name) {
    if (!audioCache[name]) {
        const audio = new Audio(`audio/${name}.mp3`);

        audio.loop = true;
        audio.preload = "auto";

        audioCache[name] = audio;
    }

    const audio = audioCache[name];

    // 🔥 保險：如果還沒 ready，重新 load
    if (audio.readyState < 2) {
        audio.load();
    }

    return audio;
}

// ======================
// 🔊 SE（池化）
// ======================
export function playSEPool(name, volume = 1) {
    const sound = new Audio(`audio/${name}.mp3`);
    sound.volume = volume;

    sound.load();

    sound.play().catch(() => {
        // 🔥 避免 unhandled promise error
    });
}