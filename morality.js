// morality.js

// 善惡值系統
const morality = {
    light: 0,   // 善意值
    dark: 0     // 黑暗值
};

/**
 * 調整善惡值
 * @param {string} type - 'light' 或 'dark'
 * @param {number} value - 增減數值
 */
function changeMorality(type, value) {
    if (morality.hasOwnProperty(type)) {
        morality[type] += value;
        console.log(`${type} 值變為: ${morality[type]}`);
        updateMoralityUI();
    }
}

/**
 * 取得淨善惡傾向
 */
function getMoralityBalance() {
    return morality.light - morality.dark;
}