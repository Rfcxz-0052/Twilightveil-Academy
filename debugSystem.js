// debugSystem.js
import { changeAffection } from "./affection.js";
import { changeLightShadow } from "./lightShadow.js";
import { saveSlot, loadSlot } from "./saveSystem.js";

let debugEnabled = true; // 🔥 可開關
const logs = [];

function logDebug(type, payload) {
    if (!debugEnabled) return;

    const entry = {
        time: new Date().toLocaleTimeString(),
        type,
        payload
    };

    logs.push(entry);

    console.log(`🧪 [${type}]`, payload);

    renderDebug(entry);
}

function renderDebug(entry) {
    const panel = document.getElementById("debugLog");
    if (!panel) return;

    const div = document.createElement("div");

    div.className = "debug-log";
    div.innerHTML =
        `<span class="log-time">[${entry.time}]</span> 
        <b>${entry.type}</b> → ${JSON.stringify(entry.payload)}`;

    panel.appendChild(div);

    panel.scrollTop = panel.scrollHeight;
}

function clearDebug() {
    const panel = document.getElementById("debugLog");
    if (panel) panel.innerHTML = "";
}

function setDebugEnabled(val) {
    debugEnabled = val;
}

// ======================
// 🧪 Debug 控制（給 HTML onclick 用）
// ======================

// 好感
window.debugAddAffection = (char, val) => {
    changeAffection(char, val);

    window.refreshGameUI?.();

    logDebug("DEBUG_ADD_AFFECTION", {
        char,
        val
    });
};

// 光影
window.debugAddLight = (type, val) => {
    changeLightShadow(type, val);

    window.refreshGameUI?.();

    logDebug("DEBUG_ADD_LIGHT", {
        type,
        val
    });
};

// 跳節點
window.debugGoNode = () => {
    const id = document.getElementById("debugNodeInput").value;
    if (!id) return;

    logDebug("DEBUG_JUMP", { to: id });
    window.showNode(id);
};

// 存檔
window.debugSave = () => {
    if (window.getGameState) {
        saveSlot(1, window.getGameState());
        logDebug("DEBUG_SAVE", { slot: 1 });
    } else {
        console.warn("getGameState 不存在");
    }
};

// 讀檔
window.debugLoad = () => {
    const data = loadSlot(1);
    if (!data) return;

    logDebug("DEBUG_LOAD", { slot: 1 });

    window.applySaveData(data);
};

// 重置
window.debugReset = () => {
    logDebug("DEBUG_RESET", {});
    location.reload();
};

export {
    logDebug,
    clearDebug,
    setDebugEnabled
};