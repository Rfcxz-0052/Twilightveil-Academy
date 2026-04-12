//engine.js
import storyNodes from './story/storyData.js';
import { affection, changeAffection, resetAffection, affectionNameMap } from './affection.js';
import {
    lightShadow,
    changeLightShadow,
    resetLightShadow,
    getLightShadowBalance,
    getShadowText
} from './lightShadow.js';
import { seMap, playSE, stopSE, switchBGM } from './audioController.js';
import {
    saveSlot,
    loadSlot,
    clearSlot,
    clearAllSaves
} from './saveSystem.js';

// ======================
// 💾 常數設定
// ======================
const SAVE_KEY = "moonShadow_save";

// ======================
// 🎮 狀態
// ======================
let currentNode = "start";
let textIndex = 0;
let isChoosing = false;
let isTyping = false;
let skipTyping = false;

// ======================
// 💾 存檔用
// ======================
function getGameState() {
    return {
        currentNode,
        textIndex,
        chapter: storyNodes[currentNode]?.bgm || "未知章節",
        text: storyNodes[currentNode]?.text?.[textIndex] || "",
        affection: { ...affection },
        lightShadow: { ...lightShadow }
    };
}

export function loadGameData() {
    const data = loadSlot(1);
    if (!data) return;

    applySaveData(data);
}

function applySaveData(data) {
    // 🔥 清空
    resetAffection();
    resetLightShadow();

    // 🔥 還原數值
    for (const key in affection) {
        affection[key] = data.affection?.[key] ?? 0;
    }

    for (const key in lightShadow) {
        lightShadow[key] = data.lightShadow?.[key] ?? 0;
    }

    // 🔥 還原劇情
    currentNode = data.currentNode;
    textIndex = data.textIndex;

    setUI("game");
    showNode(currentNode);
    updateUI();
}

function autoResizeDialog() {
    const box = document.getElementById("dialogBox");
    const story = document.getElementById("storyText");
    const choices = document.getElementById("choiceButtons");
    const continueBtn = document.getElementById("continueBtn");

    if (!box || !story || !continueBtn) return;

    const storyH = story.scrollHeight;
    const choiceH = choices ? choices.scrollHeight : 0;
    const continueH = continueBtn.scrollHeight;

    const totalHeight = storyH + choiceH + continueH + 60;

    box.style.maxHeight = totalHeight + "px";
}

function safeResize() {
    requestAnimationFrame(() => {
        autoResizeDialog();
    });
}

// ======================
// 🧠 UI
// ======================
function openSaveModal() {
    document.getElementById("saveModal").classList.remove("hidden");
    renderSaveSlots();
}

function closeSaveModal() {
    document.getElementById("saveModal").classList.add("hidden");
}

function renderSaveSlots() {
    const container = document.getElementById("saveSlots");
    container.innerHTML = "";
    if (!container) return;

    const all = JSON.parse(localStorage.getItem("moonShadow_slots")) || {};

    for (let i = 1; i <= 5; i++) {
        const data = all[i];

        const div = document.createElement("div");
        div.className = "save-slot";

        div.innerHTML = `
            <div>📦 存檔 ${i}</div>

            <button class="save-btn">保存</button>
            <button class="load-btn">讀取</button>
            <button class="clear-btn">刪除</button>

            <div class="save-info">
                ${data ? `章節：${data.chapter}<br>${data.text}` : "空存檔"}
            </div>
        `;

        // 💾 存檔
        div.querySelector(".save-btn").onclick = () => {
            saveSlot(i, getGameState());
            renderSaveSlots();
        };

        // 📥 讀檔
        div.querySelector(".load-btn").onclick = () => {
            const data = loadSlot(i);
            if (!data) return;

            applySaveData(data);
            closeSaveModal();
        };

        container.appendChild(div);
    }
}

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
// ✨ 打字機
// ======================
async function typeWriter(text) {
    const storyDiv = document.getElementById("storyText");
    const continueBtn = document.getElementById("continueBtn");

    storyDiv.innerHTML = "";
    continueBtn.style.display = "none";

    isTyping = true;
    skipTyping = false;

    const p = document.createElement("p");
    storyDiv.appendChild(p);

    for (let char of text) {
        if (skipTyping) {
            p.textContent = text;
            break;
        }

        p.textContent += char;
        requestAnimationFrame(() => {
            autoResizeDialog();
        });

        if (Math.random() < 0.25) {
            playSE("sepage");
        }

        await new Promise(res => setTimeout(res, 60));
    }

    isTyping = false;
    continueBtn.style.display = "block";
    requestAnimationFrame(() => {
        safeResize();
    });
}

// ======================
// 🎮 continue
// ======================
export function handleContinue() {
    const node = storyNodes[currentNode];
    if (!node) return;

    if (isTyping) {
        skipTyping = true;
        return;
    }

    if (isChoosing) return;

    if (textIndex < node.text.length - 1) {
        textIndex++;
        renderText(node);
        return;
    }

    if (node.choices?.length) {
        showChoices(node);
        isChoosing = true;
        document.getElementById("continueBtn").style.display = "none";
        return;
    }

    if (node.next) {
        showNode(node.next);
    }
}

// ======================
// 📖 render text
// ======================
async function renderText(node) {
    let line = node.text[textIndex];

    const feedback = getShadowText(lightShadow, currentNode);
    line = line.replace("{shadowText1}", feedback.shadowText1);

    await typeWriter(line);
    safeResize();
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

    requestAnimationFrame(() => {
    safeResize();
    });
}

// ======================
// 🎬 show node
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

    document.getElementById("choiceButtons").innerHTML = "";

    Object.keys(seMap).forEach(k => stopSE(k));
    if (node.se) playSE(node.se);

    if (node.bgm !== undefined) {
        switchBGM(node.bgm);
    }

    document.getElementById("gameBody").style.backgroundImage =
        `url('${node.background}')`;

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

    setUI("game");
    updateUI();

    renderText(node);
}

// ======================
// 💖 UI 更新
// ======================
function updateUI() {
    const a = document.getElementById("affectionDisplay");
    const l = document.getElementById("lightShadowDisplay");

    if (a) {
        a.innerHTML =
            `<h3>❤️ 好感度</h3>` +
            Object.entries(affection)
                .map(([k, v]) => `<p>${affectionNameMap[k] || k}: ${v}</p>`)
                .join('')
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
// 🎛️ 綁定
// ======================
window.addEventListener("DOMContentLoaded", () => {

    // ======================
    // 🎮 基本按鈕
    // ======================
    const saveBtn = document.getElementById("saveBtn");
    const closeBtn = document.getElementById("closeSaveModal");
    const saveModal = document.getElementById("saveModal");

    if (saveBtn) saveBtn.onclick = openSaveModal;
    if (closeBtn) closeBtn.onclick = closeSaveModal;

    if (saveModal) {
        saveModal.onclick = (e) => {
            if (e.target.id === "saveModal") {
                closeSaveModal();
            }
        };
    }

    document.getElementById("startBtn").onclick = startGame;
    document.getElementById("continueBtn")
        ?.addEventListener("click", handleContinue);

    document.getElementById("toggleSidebar")
        .onclick = () =>
            document.getElementById("sidebarWrapper").classList.toggle("active");

    document.getElementById("storyText")
        .addEventListener("click", () => {
            if (isTyping) skipTyping = true;
        });

    // ======================
    // 💾 存檔系統
    // ======================
    document.getElementById("saveModal").onclick = (e) => {
        if (e.target.id === "saveModal") {
            closeSaveModal();
        }
    };
    document.getElementById("closeSaveModal").onclick = closeSaveModal;

    // ======================
    // 🔊 音量控制
    // ======================
    const bgmSlider = document.getElementById('bgmSlider');
    const seSlider = document.getElementById('seSlider');

    bgmSlider.value = localStorage.getItem("bgmVolume") || 0.4;
    seSlider.value = localStorage.getItem("seVolume") || 1.0;

    bgmSlider.addEventListener('input', e =>
        setBGMVolume(e.target.value)
    );

    seSlider.addEventListener('input', e =>
        setSEVolume(e.target.value)
    );
});