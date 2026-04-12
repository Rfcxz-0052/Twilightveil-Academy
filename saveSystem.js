//saveSystem.js
const SAVE_KEY = "moonShadow_slots";

/* ==========================
   📦 取得所有存檔
========================== */
function getAllSaves() {
    return JSON.parse(localStorage.getItem(SAVE_KEY)) || {};
}

/* ==========================
   💾 存檔
========================== */
export function saveSlot(slotId, data) {
    const all = getAllSaves();
    all[slotId] = data;
    localStorage.setItem(SAVE_KEY, JSON.stringify(all));
}

/* ==========================
   📥 讀檔
========================== */
export function loadSlot(slotId) {
    const all = getAllSaves();
    return all[slotId];
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