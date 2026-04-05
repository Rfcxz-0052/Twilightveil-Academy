// lightShadow.js

const lightShadow = {
    light: 0,
    shadow: 0
};

function changeLightShadow(type, value) {
    if (lightShadow.hasOwnProperty(type)) {
        lightShadow[type] += value;
        console.log(`${type} 值變為: ${lightShadow[type]}`);
    }
}

function getLightShadowBalance() {
    return lightShadow.light - lightShadow.shadow;
}

function resetLightShadow() {
    lightShadow.light = 0;
    lightShadow.shadow = 0;
}

export { lightShadow, changeLightShadow, getLightShadowBalance, resetLightShadow };