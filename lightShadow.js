// lightShadow.js
// 🔥 光影數值物件
const lightShadow = {
    light: 0,
    shadow: 0
};

// 🔥 修改光影值
function changeLightShadow(type, value) {
    if (lightShadow.hasOwnProperty(type)) {
        lightShadow[type] += value;
        console.log(`${type} 值變為: ${lightShadow[type]}`);
    }
}

// 🔥 取得光影傾向值
function getLightShadowBalance() {
    return lightShadow.light - lightShadow.shadow;
}

// 🔥 重置光影值
function resetLightShadow() {
    lightShadow.light = 0;
    lightShadow.shadow = 0;
}

// 🔥 光影對話設定
const shadowConfig = {
    node03: (playerState) => {
        if (playerState.shadow >= 1) {
            return {
                shadowText1: "女孩的笑容帶著詭異的氣息，讓你心頭一緊。",
            };
        } else if (playerState.light >= 1) {
            return {
                shadowText1: "女孩的笑容帶著些許孤單，但讓人想靠近。",
            };
        }
    },
};

// 🔥 取得節點光影對話
function getShadowText(playerState, nodeId) {
    if (shadowConfig[nodeId]) {
        return shadowConfig[nodeId](playerState);
    }
    return { shadowText1: ""};
}

export { lightShadow, changeLightShadow, getLightShadowBalance, resetLightShadow, getShadowText };