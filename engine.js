// engine.js

import storyNodes from './storyData.js';
import { affection, resetAffection } from './affection.js';
import { lightShadow, resetLightShadow, changeLightShadow, getLightShadowBalance, getShadowText } from './lightShadow.js';
import { seMap, playSE, stopSE, switchBGM } from './audioController.js';

// ======================
// 🧠 UI 控制（獨立層）
// ======================
function setUI(mode) {
    document.body.setAttribute("data-ui", mode);
}

export function goHome() {
    setUI("home");
}

let audioUnlocked = false;
export function startGame() {
    setUI("game");
    currentNode = "start";

    firstClick = false;

    showNode("start");

    const node = storyNodes["start"];
    if (node?.bgm) {
        switchBGM(node.bgm);
    }
}

// ======================
// 🎮 遊戲狀態
// ======================
export let currentNode = "start";
export let firstClick = true;

// ======================
// 🔥 預載圖片
// ======================
const preloadImages = [
    "image/player.webp", "image/male.webp", "image/male01.webp",
    "image/male02.webp", "image/male04.webp", "image/girl01.webp",
    "image/ghost02.webp", "image/DuskCampus.webp", "image/DarkCampus.webp",
    "image/SurfaceWorld.webp", "image/library.webp", "image/InnerWorld.webp",
    "image/nightmarket01.webp", "image/nightmarket02.webp"
];
preloadImages.forEach(src => new Image().src = src);

// ======================
// 🎭 UI DOM
// ======================
const dialogBox = document.getElementById("dialogBox");

// ======================
// 🧹 特殊節點處理（關鍵）
// ======================
function handleSpecialNode(nodeId) {

    // 🔁 回首頁 + 重置數值
    if (nodeId === "__HOME__") {
        resetAffection();
        resetLightShadow();
        goHome();
        return true;
    }

    return false;
}

// ======================
// 💖 UI 更新
// ======================
export const characterNames = {
    baiqi: "白祈",
    yanzhen: "炎燼",
    moxing: "墨行"
};

export function updateAffectionUI() {
    const div = document.getElementById("affectionDisplay");
    if (!div) return;

    div.innerHTML = `<h3>❤️ 好感度</h3>` +
        Object.entries(affection)
            .map(([c, s]) => `<p>${characterNames[c] || c}：${s}</p>`)
            .join('');
}

export function updateLightShadowUI() {
    const div = document.getElementById("lightShadowDisplay");
    if (!div) return;

    div.innerHTML = `
        <h3>🌗 光影值</h3>
        <p>✨ 光之值：${lightShadow.light}</p>
        <p>🌑 影之值：${lightShadow.shadow}</p>
        <p>⚖️ 傾向值：${getLightShadowBalance()}</p>
    `;
}

// ======================
// 🖼️ 圖片切換
// ======================
export function changeImage(imgElement, newSrc) {
    if (!newSrc) return;

    imgElement.classList.add("fade-out");

    setTimeout(() => {
        imgElement.src = newSrc;
        imgElement.classList.remove("fade-out");
        imgElement.classList.add("fade-in");
    }, 120);
}

// ======================
// 🎬 核心：顯示節點
// ======================
export function showNode(nodeId) {

    // ⚠️ UI 特殊處理（先攔截）
    if (handleSpecialNode(nodeId)) return;

    const node = storyNodes[nodeId];
    if (!node) return;

    // 🔊 SE
    Object.keys(seMap).forEach(k => stopSE(k));
    if (node.se) playSE(node.se);

    // 🌄 背景
    document.getElementById("gameBody").style.backgroundImage =
        `url('${node.background}')`;

    // 🎵 BGM
    if (!firstClick) switchBGM(node.bgm);

    // 🧱 UI狀態（故事中固定 game）
    setUI("game");

    // ======================
    // 📖 文字
    // ======================
    const storyDiv = document.getElementById("storyText");

    let textArray = [...node.text];

    if (typeof getShadowText === "function") {
        const feedback = getShadowText(lightShadow, nodeId);
        textArray = textArray.map(line =>
            line.replace("{shadowText1}", feedback.shadowText1)
        );
    }

    storyDiv.innerHTML = textArray.map(l => `<p>${l}</p>`).join('');

    // ======================
    // 🧍 角色圖片
    // ======================
    const playerDiv = document.getElementById("playerImg");
    const charDiv = document.getElementById("characterImg");

    const playerImg = playerDiv.querySelector("img");
    const charImg = charDiv.querySelector("img");

    if (node.speaker === "player") {
        playerDiv.style.display = "flex";
        charDiv.style.display = "none";
        if (node.playerImg) changeImage(playerImg, node.playerImg);

    } else if (node.speaker === "character") {
        charDiv.style.display = "flex";
        playerDiv.style.display = "none";
        if (node.characterImg) changeImage(charImg, node.characterImg);

    } else {
        playerDiv.style.display = "none";
        charDiv.style.display = "none";
    }

    // ======================
    // 🔘 選項
    // ======================
    const btnDiv = document.getElementById("choiceButtons");
    btnDiv.innerHTML = "";

    if (node.choices?.length) {
        node.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.innerText = choice.text;

            btn.onclick = () => {

                if (choice.affection) {
                    for (const [c, v] of Object.entries(choice.affection)) {
                        affection[c] += v;
                    }
                }

                if (choice.lightShadow) {
                    for (const [t, v] of Object.entries(choice.lightShadow)) {
                        changeLightShadow(t, v);
                    }
                }

                updateAffectionUI();
                updateLightShadowUI();

                if (firstClick) {
                    const nextNode = storyNodes[choice.next];
                    if (nextNode?.bgm) switchBGM(nextNode.bgm);
                    firstClick = false;
                }

                currentNode = choice.next;
                showNode(currentNode);
            };

            btnDiv.appendChild(btn);
        });
    }

    // ======================
    // ▶ next 指示器
    // ======================
    const nextInd = document.getElementById("nextIndicator");

    if (nextInd) {
        nextInd.onclick = null;

        if (!node.choices?.length) {
            nextInd.style.display = "block";
            nextInd.onclick = () => {
                if (node.next) {
                    currentNode = node.next;
                    showNode(currentNode);
                }
            };
        } else {
            nextInd.style.display = "none";
        }
    }

    // ======================
    // 📊 UI更新
    // ======================
    updateAffectionUI();
    updateLightShadowUI();
}

// ======================
// 🎛️ 側邊欄
// ======================
document.getElementById("toggleSidebar").onclick = () => {
    document.getElementById("sidebar").classList.toggle("active");
};

window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("startBtn");
    if (btn) btn.addEventListener("click", startGame);
});