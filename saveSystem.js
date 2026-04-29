const SAVE_KEY = "moonShadow_slots";

/* ==========================
   📦 取得所有存檔
========================== */
function getAllSaves() {
    try {
        return JSON.parse(localStorage.getItem(SAVE_KEY)) || {};
    } catch (e) {
        console.warn("存檔讀取失敗，已重置", e);
        return {};
    }
}

/* ==========================
   🧱 建立標準存檔資料
========================== */
function buildSaveData({ affection, lightShadow, currentNode, route }) {
    return {
        version: 1, // ⭐ 版本控管（未來升級用）
        timestamp: Date.now(),

        affection: { ...affection },
        lightShadow: { ...lightShadow },
        currentNode,
        route
    };
}

/* ==========================
   💾 存檔
========================== */
export function saveSlot(slotId, state) {
    const all = getAllSaves();

    const saveData = buildSaveData(state);

    all[slotId] = saveData;

    localStorage.setItem(SAVE_KEY, JSON.stringify(all));

    console.log("✅ 已存檔:", slotId, saveData);
}

/* ==========================
   📥 讀檔
========================== */
export function loadSlot(slotId) {
    const all = getAllSaves();

    const data = all[slotId];

    if (!data) {
        console.warn("⚠️ 存檔不存在:", slotId);
        return null;
    }

    // ⭐ 防舊版本炸掉
    if (!data.version) {
        console.warn("⚠️ 舊版存檔，可能不完整");
    }

    return data;
}

/* ==========================
   🧹 刪除單格
========================== */
export function clearSlot(slotId) {
    const all = getAllSaves();

    delete all[slotId];

    localStorage.setItem(SAVE_KEY, JSON.stringify(all));
}

/* ==========================
   🧨 清空全部
========================== */
export function clearAllSaves() {
    localStorage.removeItem(SAVE_KEY);
}