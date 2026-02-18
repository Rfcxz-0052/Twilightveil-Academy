let currentNode = "enter";
let firstClick = true;

function showNode(nodeId) {
    const node = storyNodes[nodeId];
    if (!node) return;

    // ❗ 先停止哭聲（避免殘留）
    stopSE("cry");

    // 如果是 node01 或 node02 才播放哭聲
    if (nodeId === "node01" || nodeId === "node02") {
        playSE("cry");
    }

    // 背景圖
    document.getElementById("gameBody").style.backgroundImage =
        `url('${node.background}')`;

    // BGM
    if (!firstClick) {
        switchBGM(node.bgm);
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
