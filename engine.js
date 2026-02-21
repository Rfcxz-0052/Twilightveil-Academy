// engine.js
let currentNode = "enter";
let firstClick = true;

const characterNames = {
    baiqi: "白祈",   // 白祈
    yanzhen: "炎燼", // 炎燼
    moxing: "墨行"  // 墨行
};

const dialogBox = document.getElementById("dialogBox");

// 更新側邊欄好感度
function updateAffectionUI() {
    const affectionDiv = document.getElementById("affectionDisplay");
    if (!affectionDiv) return;

    affectionDiv.innerHTML =
        `<h3>❤️ 好感度</h3>` +
        Object.entries(affection)
            .map(([char, score]) => {
                const displayName = characterNames[char] || char;
                return `<p>${displayName}：${score}</p>`;
            })
            .join(''); 
}

function updateMoralityUI() {
    const moralityDiv = document.getElementById("moralityDisplay");
    if (!moralityDiv) return;

    moralityDiv.innerHTML = `
        <h3>⚖️ 善惡傾向</h3>
        <p>🌿 善意：${morality.light}</p>
        <p>🌑 黑暗：${morality.dark}</p>
        <p>✨ 傾向值：${getMoralityBalance()}</p>
    `;
}

function showNode(nodeId) {
    if (nodeId === "restart") {
    resetAffection();
    }

    const node = storyNodes[nodeId];
    if (!node) return;

    Object.keys(seMap).forEach(key => stopSE(key));
    if (node.se) playSE(node.se);
    document.getElementById("gameBody").style.backgroundImage = `url('${node.background}')`;
    if (!firstClick) switchBGM(node.bgm);

    const middleArea = document.querySelector(".middle-area");
    middleArea.classList.add("centered");

    if (nodeId === "enter" || nodeId === "restart") {
        dialogBox.classList.add("no-box");
    } else {
        dialogBox.classList.remove("no-box");
    }

    // 顯示文字
    const storyDiv = document.getElementById("storyText");
    storyDiv.innerHTML = node.text.map(line => `<p>${line}</p>`).join('');

    // 角色圖片顯示
    const playerImgDiv = document.getElementById("playerImg");
    const characterImgDiv = document.getElementById("characterImg");

    if (node.speaker === "player") {
        playerImgDiv.style.display = "flex";
        playerImgDiv.querySelector("img").src = node.playerImg;
        characterImgDiv.style.display = "none";
    } else if (node.speaker === "character") {
        characterImgDiv.style.display = "flex";
        characterImgDiv.querySelector("img").src = node.characterImg;
        playerImgDiv.style.display = "none";
    } else {
        playerImgDiv.style.display = "none";
        characterImgDiv.style.display = "none";
    }

    // 選項按鈕
    const buttonsDiv = document.getElementById("choiceButtons");
    buttonsDiv.innerHTML = "";

    if (node.choices && node.choices.length > 0) {
        node.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.innerText = choice.text;
            btn.onclick = () => {
                // 加好感度
                if (choice.affection) {
                    for (const [char, value] of Object.entries(choice.affection)) {
                        if (affection[char] !== undefined) {
                            affection[char] += value;
                        }
                    }
                }

                // 加善惡值
                if (choice.morality) {
                    for (const [type, value] of Object.entries(choice.morality)) {
                        changeMorality(type, value);
                    }
                }

                // 更新側邊欄
                updateAffectionUI();

                if (firstClick) { switchBGM(node.bgm); firstClick = false; }
                currentNode = choice.next;
                showNode(currentNode);
            };
            buttonsDiv.appendChild(btn);
        });
    }

    // ▼ 下一步提示控制
    const nextIndicator = document.getElementById("nextIndicator");

    if (nextIndicator) {

        // 先清除舊事件（避免重複綁定）
        nextIndicator.onclick = null;

        // 如果沒有選項 → 顯示 ▼
        if (!node.choices || node.choices.length === 0) {

            nextIndicator.style.display = "block";

            // 點擊 ▼ 跳到下一節點
            nextIndicator.onclick = () => {
                if (node.next) {
                    currentNode = node.next;
                    showNode(currentNode);
                }
            };

        } else {
            nextIndicator.style.display = "none";
        }
    }

    // 更新好感度側邊欄
    updateAffectionUI();
    updateMoralityUI();
}

// 初始顯示
showNode(currentNode);

// 側邊欄按鈕
const sidebar = document.getElementById("sidebar");
const toggleSidebar = document.getElementById("toggleSidebar");
toggleSidebar.onclick = () => {
    sidebar.classList.toggle("active");
};