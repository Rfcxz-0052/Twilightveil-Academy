let currentNode = "enter";
let firstClick = true;
const dialogBox = document.getElementById("dialogBox");

function showNode(nodeId) {
    const node = storyNodes[nodeId];
    if (!node) return;

    // 停止所有音效（可自行擴充）
    Object.keys(seMap).forEach(key => stopSE(key));

    // 如果節點有設定音效就播放
    if (node.se) {
        playSE(node.se);
    }

    // 背景圖
    document.getElementById("gameBody").style.backgroundImage =
        `url('${node.background}')`;

    // BGM
    if (!firstClick) {
        switchBGM(node.bgm);
    }
    
    // 首頁 / restart 節點隱藏對話框背景
    if (nodeId === "enter" || nodeId === "restart") {
         dialogBox.classList.add("no-box"); 
    } else { 
        dialogBox.classList.remove("no-box"); 
    }

    // 顯示文字
    const storyDiv = document.getElementById("storyText");
    storyDiv.innerHTML = node.text
        .map(line => `<p>${line}</p>`)
        .join('');

    // 顯示玩家/角色圖片
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

    // 顯示選項按鈕
    const buttonsDiv = document.getElementById("choiceButtons");
    buttonsDiv.innerHTML = "";

    node.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.innerText = choice.text;

        btn.onclick = () => {
            if (firstClick) {
                switchBGM(node.bgm);
                firstClick = false;
            }

            currentNode = choice.next;
            showNode(currentNode);
        };

        buttonsDiv.appendChild(btn);
    });
}

// 初始顯示
showNode(currentNode);

const settingsPanel = document.getElementById("settingsPanel");
const openBtn = document.getElementById("openSettings");
const closeBtn = document.getElementById("closeSettings");

const bgmSlider = document.getElementById("bgmSlider");
const seSlider = document.getElementById("seSlider");

// 預設值
bgmSlider.value = bgmVolume;
seSlider.value = seVolume;

// 開關設定面板
openBtn.onclick = () => settingsPanel.classList.remove("hidden");
closeBtn.onclick = () => settingsPanel.classList.add("hidden");

// 滑桿控制
bgmSlider.oninput = (e) => setBGMVolume(e.target.value);
seSlider.oninput = (e) => setSEVolume(e.target.value);
