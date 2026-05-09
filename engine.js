//engine.js
import storyNodes from './story/storyData.js';
import { affection, changeAffection, resetAffection, affectionNameMap } from './affection.js';
import {lightShadow, changeLightShadow, resetLightShadow, getLightShadowBalance, getShadowText } from './lightShadow.js';
import { playSE, stopSE, switchBGM, setBGMVolume, setSEVolume, stopAllAudio, currentBGMName } from './audioController.js';
import { saveSlot, loadSlot, clearSlot, clearAllSaves } from './saveSystem.js';
import { evaluate, resolveText, resolveValue } from './condition.js';
import { characterConfig } from "./characterConfig.js";
import { setRoute, getRoute, resetRoute } from './route.js';
import { preloadCharacters } from "./assetManager.js";
import * as debugSystem from "./debugSystem.js";

const { logDebug } = debugSystem;

// ⏱️ 延遲工具
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ======================
// 🎮 狀態
// ======================
let currentNode = "start";
let textIndex = 0;
let isChoosing = false;
let isTyping = false;
let skipTyping = false;
let debugUnlocked = false;
let logInitialized = false;

const preloadedNodes = new Set();

function getState() {
    return {
        affection: { ...affection },
        lightShadow: { ...lightShadow },
        currentNode,
        route: getRoute()
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
        lightShadow: { ...lightShadow },
        route: getRoute()
    };
}

window.getGameState = getGameState;

export function loadGameData() {
    const data = loadSlot(1);
    if (!data) return;

    applySaveData(data);
}

function applySaveData(data) {
    resetAffection();
    resetLightShadow();

    for (const key in affection) {
        affection[key] = data.affection?.[key] ?? 0;
    }

    for (const key in lightShadow) {
        lightShadow[key] = data.lightShadow?.[key] ?? 0;
    }

    // ⭐ 關鍵：還原路線
    setRoute(data.route || null);

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
    resetRoute();

    stopAllAudio();
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
        isTyping = false;
        continueBtn.style.display = "block";
        refreshUI();
        return;
    }

        buffer += char;

        // 每 3 字更新一次
        if (buffer.length % 3 === 0) {
            p.textContent = buffer;

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

    if (node.text && textIndex < node.text.length - 1) {
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

        const nextNode = resolveValue(node.next, state);
        showNode(nextNode);
    }
}

// ======================
// 📖 render text
// ======================
async function renderText(node) {

    // ✅ 防呆
    if (!node.text || !node.text.length) {
        handleContinue();
        return;
    }

    let line = node.text[textIndex];

    const state = getState();

    line = resolveText(line, state);

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
            logDebug("CHOICE_CLICK", {
                text: btn.innerText
            });

            if (choice.action) {
                choice.action();
            }

            if (choice.affection) {
                for (const [k, v] of Object.entries(choice.affection)) {
                    changeAffection(k, v);
                    logDebug("AFFECTION_CHANGE", { k, v });
                }
            }

            if (choice.lightShadow) {
                for (const [k, v] of Object.entries(choice.lightShadow)) {
                    changeLightShadow(k, v);
                    logDebug("LIGHT_SHADOW_CHANGE", { k, v });
                }
            }

            updateUI();
            const state = getState();

            const nextNode = resolveValue(choice.next, state);

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

    img.loading = "lazy";
    img.decoding = "async";
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
    
    logDebug("NODE_ENTER", {
        from: currentNode,
        to: nodeId
    });

    if (nodeId === "__HOME__") {
        goHome();
        return;
    }

    const node = storyNodes[nodeId];

    if (!node) {
        console.error("找不到 node:", nodeId);
        return;
    }

    // 🔥 預載這個節點的角色圖片
    preloadCharacters(node, characterConfig);

    currentNode = nodeId;
    textIndex = 0;
    isChoosing = false;

    document.getElementById("choiceButtons").innerHTML = "";

    if (node.se) {
        playSE(node.se);
    } else {
        stopSE(); // ⭐ 沒有 SE 就清掉上一個
    }

    if(node.bgm){
        switchBGM(node.bgm);
    }

    // ✅ 防呆 background
    if (node.background) {
        document.getElementById("gameBody").style.backgroundImage =
            `url('${node.background}')`;
    }

    updateCharacters(node);
    setUI("game");
    updateUI();

    const state = getState();

    // ======================
    // 🔥 核心：無 text 節點支援
    // ======================
    if (!node.text || node.text.length === 0) {

        if (node.next) {
            const nextNode = resolveValue(node.next, state);

            // 🔥 避免無限 loop
            if (!nextNode) {
                console.error("nextNode 無效:", nodeId);
                return;
            }

            showNode(nextNode);
            return;
        }

        // 如果連 next 都沒有
        console.warn("空節點且沒有 next:", nodeId);
        return;
    }

    renderText(node);
    refreshUI();

    if (node.next) {
        const nextNodeId = resolveValue(node.next, state);

        if (!preloadedNodes.has(nextNodeId)) {
            const nextNode = storyNodes[nextNodeId];

            if (nextNode) {
                preloadCharacters(nextNode, characterConfig);
                preloadedNodes.add(nextNodeId);
            }
        }
    }
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

        // ✅ UI 層全部隔離
        if (e.target.closest(".ui-layer")) return;

        // ✅ 明確補 logPopup（保險）
        if (e.target.closest("#logPopup")) return;

        if (e.target.closest(".sidebar, .save-modal")) return;

        if (isChoosing) return;

        if (isTyping) {
            skipTyping = true;
            return;
        }

        handleContinue();
    });

    document.getElementById("debugToggle").onclick = () => {
    document.getElementById("debugPanel").classList.toggle("active");
    };

    const btn = document.getElementById("debugUnlockBtn");
    const input = document.getElementById("debugPassword");
    const lockScreen = document.getElementById("debugLockScreen");
    const content = document.getElementById("debugContent");
    const stateText = document.getElementById("debugLockState");

    btn.onclick = () => {
        if (input.value === "0906") {

            debugUnlocked = true;

            lockScreen.style.display = "none";
            content.style.display = "block";

            stateText.textContent = "🔓 系統已解鎖";
        } 
        else {
            stateText.textContent = "❌ 訪問碼錯誤";
        }
    };

    function initLogPopupV2() {
        const logPopup = document.getElementById("logPopup");
        if (!logPopup) return;

        const header = logPopup.querySelector(".log-popup-header");
        const resizeHandle = logPopup.querySelector(".log-resize-handle");
        const closeBtn = document.getElementById("closeLogBtn");
        const zoomIn = document.getElementById("logZoomIn");
        const zoomOut = document.getElementById("logZoomOut");

        if (!header || !resizeHandle) return;

        // ======================
        // 🧠 單一狀態源（核心）
        // ======================
        const logState = {
            x: 100,
            y: 100,
            scale: 1,
            width: 360,
            height: 240,
            dragging: false,
            resizing: false,
            offsetX: 0,
            offsetY: 0,
            startW: 0,
            startH: 0,
            startX: 0,
            startY: 0
        };

        // ======================
        // 💾 記憶位置（localStorage）
        // ======================
        const saveState = () => {
            localStorage.setItem("logPopup_state", JSON.stringify({
                x: logState.x,
                y: logState.y,
                scale: logState.scale,
                width: logState.width,
                height: logState.height
            }));
        };

        const loadState = () => {
            const saved = localStorage.getItem("logPopup_state");
            if (!saved) return;

            const data = JSON.parse(saved);
            Object.assign(logState, data);
        };

        loadState();

        // ======================
        // 🎨 render
        // ======================
        function render() {
            logPopup.style.transform =
                `translate(${logState.x}px, ${logState.y}px) scale(${logState.scale})`;

            logPopup.style.width = logState.width + "px";
            logPopup.style.height = logState.height + "px";

            logPopup.style.transformOrigin = "top left";
        }

        render();

        // ======================
        // 🖱️ 拖曳
        // ======================
        header.addEventListener("pointerdown", (e) => {
            if (e.target.closest(".log-controls")) return;
            if (e.target.closest(".log-resize-handle")) return;

            logState.dragging = true;

            logState.offsetX = e.clientX - logState.x;
            logState.offsetY = e.clientY - logState.y;

            header.setPointerCapture(e.pointerId);
        });

        document.addEventListener("pointermove", (e) => {

            // ======================
            // 🖱️ drag
            // ======================
            if (logState.dragging) {
                const rect = logPopup.getBoundingClientRect();

                const maxX = window.innerWidth - rect.width;
                const maxY = window.innerHeight - rect.height;

                logState.x = Math.max(0, Math.min(e.clientX - logState.offsetX, maxX));
                logState.y = Math.max(0, Math.min(e.clientY - logState.offsetY, maxY));

                render();
            }

            // ======================
            // 📏 resize
            // ======================
            if (logState.resizing) {

                const newW = logState.startW + (e.clientX - logState.startX);
                const newH = logState.startH + (e.clientY - logState.startY);

                logState.width = Math.max(260, Math.min(newW, window.innerWidth));
                logState.height = Math.max(180, Math.min(newH, window.innerHeight));

                render();
            }
        });

        document.addEventListener("pointerup", () => {
            if (logState.dragging || logState.resizing) {
                saveState();
            }

            logState.dragging = false;
            logState.resizing = false;
        });

        // ======================
        // 📏 縮放
        // ======================
        resizeHandle.addEventListener("pointerdown", (e) => {
            e.stopPropagation();

            logState.resizing = true;

            logState.startW = logState.width;
            logState.startH = logState.height;

            logState.startX = e.clientX;
            logState.startY = e.clientY;

            document.body.style.userSelect = "none";
        });

        // ======================
        // 🔍 zoom
        // ======================
        zoomIn?.addEventListener("click", (e) => {
            e.stopPropagation();
            logState.scale = Math.min(logState.scale + 0.1, 2);
            render();
            saveState();
        });

        zoomOut?.addEventListener("click", (e) => {
            e.stopPropagation();
            logState.scale = Math.max(logState.scale - 0.1, 0.6);
            render();
            saveState();
        });

        // ======================
        // ❌ close
        // ======================
        function closeLog(e) {
            e.preventDefault();
            e.stopPropagation();

            logPopup.classList.add("hidden");
        }

        // 🔥 防拖曳（最早攔）
        closeBtn?.addEventListener("pointerdown", (e) => {
            e.stopPropagation();
        });

        // 🔥 正式關閉（標準 click）
        closeBtn?.addEventListener("click", closeLog);

        // ======================
        // 🧱 UI 隔離
        // ======================
        logPopup.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        console.log("LogPopup v2 initialized");
    }

    initLogPopupV2();

    const openLogBtn = document.getElementById("openLogBtn");
    const logPopup = document.getElementById("logPopup");

    openLogBtn.onclick = (e) => {
        e.stopPropagation();

        if (!logInitialized) {
            logInitialized = true;
        }

        logPopup.classList.remove("hidden");
    };

});

window.showNode = showNode;
window.getGameState = getGameState;
window.applySaveData = applySaveData;
window.refreshGameUI = refreshUI;