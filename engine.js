//engine.js
import storyNodes from './story/storyData.js';
import { affection, changeAffection, resetAffection, affectionNameMap } from './affection.js';
import {lightShadow, changeLightShadow, resetLightShadow, getLightShadowBalance, getShadowText } from './lightShadow.js';
import { seMap, playSE, stopSE, switchBGM, setBGMVolume, setSEVolume } from './audioController.js';
import {saveSlot, loadSlot, clearSlot, clearAllSaves } from './saveSystem.js';
import { evaluate, resolveText } from './condition.js';
import { characterConfig } from "./characterConfig.js";

// ⏱️ 延遲工具
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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

function getState() {
    return {
        affection: { ...affection },
        lightShadow: { ...lightShadow },
        currentNode
    };
}

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
    if (!container) return;
    container.innerHTML = "";

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

        // 🗑️ 刪除存檔
        div.querySelector(".clear-btn").onclick = () => {
            clearSlot(i);

            // 🔥 強制重新抓 localStorage（避免快取問題）
            setTimeout(() => {
                renderSaveSlots();
            }, 50);
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

    let buffer = "";

    for (let char of text) {

        if (skipTyping) {
            p.textContent = text;
            break;
        }

        buffer += char;

        // 每 3 字更新一次
        if (buffer.length % 3 === 0) {
            p.textContent = buffer;

            if (Math.random() < 0.1) {
                playSE("sepage");
            }

            if (!skipTyping && Math.random() < 0.1) {
                playSE("sepage");
            }
            await delay(30);
        }
    }

    // 收尾（確保完整顯示）
    p.textContent = text;

    isTyping = false;
    continueBtn.style.display = "block";
    refreshUI();
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

        const state = getState();

        // 1️⃣ function
        if (typeof node.next === "function") {
            showNode(node.next(state));
            return;
        }

        // 2️⃣ cases DSL
        if (typeof node.next === "object" && node.next.cases) {
            const result = evaluateCases(node.next, state);
            showNode(result);
            return;
        }

        // 3️⃣ pure nodeId（🔥最重要）
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
}

// ======================
// 🎯 choices
// ======================
function showChoices(node) {
    const btnDiv = document.getElementById("choiceButtons");
    btnDiv.innerHTML = "";

    node.choices.forEach(choice => {
        const state = getState();

        if (choice.showIf && !evaluate(choice.showIf, state)) {
            return;
        }

        const btn = document.createElement("button");

        btn.innerText = resolveText(choice.text, state);

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
            const state = getState();

            let nextNode;

            if (typeof choice.next === "function") {
                nextNode = choice.next(state);
            }
            else if (typeof choice.next === "string") {
                nextNode = choice.next; // ⭐直接當 nodeId
            }
            else {
                nextNode = evaluate(choice.next, state);
            }

            showNode(nextNode);
        };

        btnDiv.appendChild(btn);
    });

    refreshUI();
}

// ======================
// 🎭 角色控制系統（🔥新增）
// ======================
function updateCharacters(node) {
    const container = document.querySelector(".character-layer");
    container.innerHTML = "";

    if (!node.characters) return;

    const entries = Object.entries(node.characters);

    // 🎯 決定誰是前排
    let frontId = node.front || node.speaker;

    // ❗ 如果 speaker 不存在 → fallback
    if (!node.characters[frontId]) {
        frontId = entries[0][0];
    }

    // 🎯 分組
    const front = [];
    const back = [];

    entries.forEach(([charId, emotion]) => {
        if (charId === frontId) {
            front.push([charId, emotion]);
        } else {
            back.push([charId, emotion]);
        }
    });

    // ======================
    // 🧠 隊形模板（核心🔥）
    // ======================
    const formations = {
        1: {
            front: [{ left: 50, scale: 1.05 }],
            back: []
        },
        2: {
            front: [{ left: 50, scale: 1.05 }],
            back: [
                { left: 25, scale: 0.85 }
            ]
        },
        3: {
            front: [{ left: 50, scale: 1.1 }],
            back: [
                { left: 20, scale: 0.85 },
                { left: 80, scale: 0.85 }
            ]
        },
        4: {
            front: [{ left: 65, scale: 1.1 }],
            back: [
                { left: 15, scale: 0.8 },
                { left: 40, scale: 0.85 },
                { left: 85, scale: 0.8 }
            ]
        },
        5: {
            front: [{ left: 50, scale: 1.1 }],
            back: [
                { left: 10, scale: 0.75 },
                { left: 30, scale: 0.85 },
                { left: 70, scale: 0.85 },
                { left: 90, scale: 0.75 }
            ]
        }
    };

    const total = entries.length;
    const layout = formations[Math.min(total, 5)];

    // ======================
    // 🟡 後排
    // ======================
    back.forEach(([charId, emotion], index) => {
        const config = layout.back[index] || {
            left: 50,
            scale: 0.8
        };

        createCharacter(container, charId, emotion, {
            left: config.left,
            scale: config.scale,
            z: 1,
            speaking: false
        });
    });

    // ======================
    // 🔵 前排
    // ======================
    front.forEach(([charId, emotion], index) => {
        const config = layout.front[index] || { left: 50, scale: 1.1 };

        createCharacter(container, charId, emotion, {
            left: config.left,
            scale: config.scale,
            z: 3,
            speaking: true
        });
    });
}

function createCharacter(container, charId, emotion, options) {
    const charData = characterConfig[charId];
    if (!charData) return;

    const imgSrc = charData[emotion] || charData.normal;

    const div = document.createElement("div");
    div.className = "character";

    div.style.left = `${options.left}%`;
    div.style.transform = `translateX(-50%) scale(${options.scale})`;
    div.style.zIndex = options.z;

    const img = document.createElement("img");
    img.src = imgSrc;

    div.appendChild(img);

    if (options.speaking) {
        div.classList.add("speaking");
    } else {
        div.classList.add("dim");
    }

    container.appendChild(div);
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
    if (!node) {
        console.error("找不到 node:", nodeId);
        return;
    }

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

    updateCharacters(node);
    setUI("game");
    updateUI();

    renderText(node);
    refreshUI();
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

function refreshUI() {
    updateUI();

    const continueBtn = document.getElementById("continueBtn");
    if (continueBtn) {
        continueBtn.style.display = isTyping || isChoosing ? "none" : "block";
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

    // ======================
    // 🎮 VN 點擊任意繼續（核心手感）
    // ======================
    document.addEventListener("click", (e) => {

        // 點到按鈕不觸發（避免選項/介面誤觸）
        if (e.target.closest("button, input, .sidebar, .save-modal")) return;

        // 如果正在選項畫面 → 不允許跳劇情
        if (isChoosing) return;

        if (isTyping) {
            skipTyping = true;
            return; // ❗阻止進入 handleContinue
        }

        // 點擊繼續（打字中會變 skip）
        handleContinue();
    });
});