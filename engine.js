import storyNodes from './story/storyData.js';
import { affection, changeAffection, resetAffection } from './affection.js';
import {
    lightShadow,
    changeLightShadow,
    resetLightShadow,
    getLightShadowBalance,
    getShadowText
} from './lightShadow.js';
import { seMap, playSE, stopSE, switchBGM } from './audioController.js';

// ======================
// 🎮 狀態
// ======================
let currentNode = "start";
let textIndex = 0;
let isChoosing = false;

// ======================
// 🧠 UI
// ======================
function setUI(mode) {
    document.body.setAttribute("data-ui", mode);
}

export function goHome() {
    setUI("home");
    resetAffection();
    resetLightShadow();
}

// ======================
// 🚀 start
// ======================
export function startGame() {
    setUI("game");
    showNode("start");
}

// ======================
// 🎮 continue
// ======================
export function handleContinue() {
    const node = storyNodes[currentNode];
    if (!node) return;

    if (isChoosing) return;

    // 📖 還沒讀完
    if (textIndex < node.text.length - 1) {
        textIndex++;
        renderText(node);
        updateContinueBtn(node);
        return;
    }

    // 🎯 顯示選項（只一次）
    if (node.choices?.length) {
        showChoices(node);
        isChoosing = true;

        document.getElementById("continueBtn").style.display = "none";
        return;
    }

    // ▶ next
    if (node.next) {
        showNode(node.next);
    }
}

// ======================
// 📖 text
// ======================
function renderText(node) {
    const storyDiv = document.getElementById("storyText");

    let line = node.text[textIndex];

    if (typeof getShadowText === "function") {
        const feedback = getShadowText(lightShadow, currentNode);
        line = line.replace("{shadowText1}", feedback.shadowText1);
    }

    storyDiv.innerHTML = `<p>${line}</p>`;
}

// ======================
// 🎯 choices
// ======================
function showChoices(node) {
    const btnDiv = document.getElementById("choiceButtons");
    btnDiv.innerHTML = "";

    node.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.innerText = choice.text;

        btn.onclick = () => {

            if (choice.affection) {
                for (const [k, v] of Object.entries(choice.affection)) {
                    changeAffection(k, v);
                }
            }

            if (choice.lightShadow) {
                for (const [k, v] of Object.entries(choice.lightShadow)) {
                    changeLightShadow(k, v);
                }
            }

            updateUI();
            showNode(choice.next);
        };

        btnDiv.appendChild(btn);
    });
}

// ======================
// 🎬 show node（核心修正版）
// ======================
export function showNode(nodeId) {

    if (nodeId === "__HOME__") {
        goHome();
        return;
    }

    const node = storyNodes[nodeId];
    if (!node) return;

    currentNode = nodeId;
    textIndex = 0;
    isChoosing = false;

    renderText(node);

    document.getElementById("choiceButtons").innerHTML = "";

    updateUI();
    updateContinueBtn(node);

    // 🔊 audio
    Object.keys(seMap).forEach(k => stopSE(k));
    if (node.se) playSE(node.se);

    if (node.bgm !== undefined) {
        switchBGM(node.bgm);
    }

    // 🌄 bg
    document.getElementById("gameBody").style.backgroundImage =
        `url('${node.background}')`;

    setUI("game");

    // 📖 text
    renderText(node);

    // 🧹 清空選項（只做一次）
    document.getElementById("choiceButtons").innerHTML = "";

    // 🧍 sprite
    const playerDiv = document.getElementById("playerImg");
    const charDiv = document.getElementById("characterImg");

    const playerImg = playerDiv.querySelector("img");
    const charImg = charDiv.querySelector("img");

    if (node.speaker === "player") {
        playerDiv.style.display = "flex";
        charDiv.style.display = "none";
        if (node.playerImg) playerImg.src = node.playerImg;

    } else if (node.speaker === "character") {
        charDiv.style.display = "flex";
        playerDiv.style.display = "none";
        if (node.characterImg) charImg.src = node.characterImg;
    }

    renderText(node);
    updateUI();

    updateContinueBtn(node);
}



// ======================
// 🎯 btn logic
// ======================
function updateContinueBtn(node) {
    const btn = document.getElementById("continueBtn");

    const endText = textIndex >= node.text.length - 1;

    if (!endText) {
        btn.style.display = "block";
    } else {
        btn.style.display = "block"; // 最後一句也先保留（還沒進選項）
    }
}

// ======================
// 💖 UI
// ======================
function updateUI() {
    const a = document.getElementById("affectionDisplay");
    const l = document.getElementById("lightShadowDisplay");

    if (a) {
        a.innerHTML =
            `<h3>❤️ 好感度</h3>` +
            Object.entries(affection)
                .map(([k, v]) => `<p>${k}: ${v}</p>`)
                .join('');
    }

    if (l) {
        l.innerHTML = `
            <h3>🌗 光影</h3>
            <p>光:${lightShadow.light}</p>
            <p>影:${lightShadow.shadow}</p>
            <p>平衡:${getLightShadowBalance()}</p>
        `;
    }
}

// ======================
// 🎛️ bind
// ======================
window.addEventListener("DOMContentLoaded", () => {

    document.getElementById("startBtn").onclick = startGame;

    document.getElementById("continueBtn")
        ?.addEventListener("click", handleContinue);

    document.getElementById("toggleSidebar")
        .onclick = () => document.getElementById("sidebar").classList.toggle("active");
});