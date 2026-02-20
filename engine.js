let currentNode = "enter";
let firstClick = true;
const dialogBox = document.getElementById("dialogBox");

function showNode(nodeId) {
    const node = storyNodes[nodeId];
    if (!node) return;

    Object.keys(seMap).forEach(key => stopSE(key));
    if (node.se) playSE(node.se);
    document.getElementById("gameBody").style.backgroundImage = `url('${node.background}')`;
    if (!firstClick) switchBGM(node.bgm);

    const middleArea = document.querySelector(".middle-area");

    // 所有節點文字+選項置中
    middleArea.classList.add("centered");

    // 首頁 / restart → 對話框樣式
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

    node.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.onclick = () => {
            if (firstClick) { switchBGM(node.bgm); firstClick = false; }
            currentNode = choice.next;
            showNode(currentNode);
        };
        buttonsDiv.appendChild(btn);
    });
}

// 初始顯示
showNode(currentNode);

// 側邊欄按鈕
const sidebar = document.getElementById("sidebar");
const toggleSidebar = document.getElementById("toggleSidebar");
toggleSidebar.onclick = () => {
    sidebar.classList.toggle("active");
};