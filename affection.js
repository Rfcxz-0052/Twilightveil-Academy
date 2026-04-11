// affection.js

const affection = {
    baiqi: 0,   // 白祈
    yanzhen: 0, // 炎燼
    moxing: 0   // 墨行
};

/**
 * 增加 / 減少好感度（唯一入口）
 */
function changeAffection(character, value) {
    if (!affection.hasOwnProperty(character)) return;

    affection[character] += value;

    console.log(`${character} 好感度變為: ${affection[character]}`);
}

/**
 * 取得單一角色好感度
 */
function getAffection(character) {
    return affection[character] || 0;
}

/**
 * 重置所有好感度
 */
function resetAffection() {
    Object.keys(affection).forEach(key => {
        affection[key] = 0;
    });
}

export {
    affection,
    changeAffection,
    getAffection,
    resetAffection
};