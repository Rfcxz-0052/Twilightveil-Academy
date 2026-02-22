// lightShadow.js

// 光影值系統
const lightShadow = {
    light: 0,   // 光之值
    shadow: 0   // 影之值
};

/**
 * 調整光影值
 * @param {string} type - 'light' 或 'shadow'
 * @param {number} value - 增減數值
 */
function changeLightShadow(type, value) {
    if (lightShadow.hasOwnProperty(type)) {
        lightShadow[type] += value;
        console.log(`${type} 值變為: ${lightShadow[type]}`);
        updateLightShadowUI();
    }
}

/**
 * 取得淨光影傾向
 */
function getLightShadowBalance() {
    return lightShadow.light - lightShadow.shadow;
}

/**
 * 重置光影值
 */
function resetLightShadow() {
    lightShadow.light = 0;
    lightShadow.shadow = 0;
    updateLightShadowUI();
}