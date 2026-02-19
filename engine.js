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

    if (nodeId === "enter" || nodeId === "restart") {
        dialogBox.classList.add("no-box"); 
    } else { 
        dialogBox.classList.remove("no-box"); 
    }

    const storyDiv = document.getElementById("storyText");
    storyDiv.innerHTML = node.text.map(line => `<p>${line}</p>`).join('');

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
