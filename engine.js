// engine.js

import storyNodes from './storyData.js';
import {
    affection,
    changeAffection,
    resetAffection
} from './affection.js';

import {
    lightShadow,
    changeLightShadow,
    resetLightShadow,
    getLightShadowBalance,
    getShadowText
} from './lightShadow.js';

import {
    seMap,
    playSE,
    stopSE,
    switchBGM
} from './audioController.js';

// ======================
// 🧠 UI 控制
// ======================
function setUI(mode) {
    document.body.setAttribute("data-ui", mode);
}

export function goHome() {
    setUI("home");
}

export function startGame() {
    setUI("game");
    currentNode = "start";
    firstClick = false;

    showNode("start");

    const node = storyNodes["start"];
    if (node?.bgm) switchBGM(node.bgm);
}

// ======================
// 🎮 狀態
// ======================
export let currentNode = "start";
export let firstClick = true;

// ======================
// 🧹 特殊節點
// ======================
function handleSpecialNode(nodeId) {
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

    div.innerHTML =
        `<h3>❤️ 好感度</h3>` +
        Object.entries(affection)
            .map(([c, v]) => `<p>${characterNames[c] || c}：${v}</p>`)
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

                // 💖 好感度
                if (choice.affection) {
                    for (const [c, v] of Object.entries(choice.affection)) {
                        changeAffection(c, v);
                    }
                }

                // 🌗 光影
                if (choice.lightShadow) {
                    for (const [t, v] of Object.entries(choice.lightShadow)) {
                        changeLightShadow(t, v);
                    }
                }

                updateAffectionUI();
                updateLightShadowUI();

                // 🎵 初次BGM
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
    // ▶ next
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

    updateAffectionUI();
    updateLightShadowUI();
}

// ======================
// 🎛️ UI 綁定
// ======================
document.getElementById("toggleSidebar").onclick = () => {
    document.getElementById("sidebar").classList.toggle("active");
};

window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("startBtn");
    if (btn) btn.addEventListener("click", startGame);
});