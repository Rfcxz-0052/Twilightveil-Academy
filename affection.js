// affection.js
const affection = {
    baiqi: 0,   // 白祈
    yanzhen: 0, // 炎燼
    moxing: 0  // 墨行
};

/**
 * 調整好感度
 * @param {string} character - 'baiqi', 'yanzhen', 'moxing'
 * @param {number} value - 增加或減少的數值
 */
function changeAffection(character, value) {
    if (affection.hasOwnProperty(character)) {
        affection[character] += value;
        console.log(`${character} 好感度變為: ${affection[character]}`);
    } else {
        console.warn(`角色 ${character} 不存在`);
    }
}

/**
 * 取得角色好感度
 * @param {string} character 
 * @returns {number} 好感度
 */
function getAffection(character) {
    return affection[character] || 0;
}

function resetAffection() {
    Object.keys(affection).forEach(key => {
        affection[key] = 0;
    });
}