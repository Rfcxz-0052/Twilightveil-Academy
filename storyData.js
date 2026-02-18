// storyData.js

const storyNodes = {
    enter: {
        bgm: "surface",
        text: ["暮影學院", "光與影的交際處"],
        background: "image/DuskCampus.png",
        choices: [{ text: "進入遊戲", next: "start" }]
    },

    start: {
        bgm: "surface",
        speaker: "player", // 整個節點說話者
        text: [
            "你是一個剛入職的大學書店的店員",
            "經過幾個月的學習，你對店裡的業務漸漸上手",
            "然而現在剛開學，很多學生訂購新學期的教科書",
            "事情很多都還沒做完,",
            "於是你打算......"
        ],
        background: "image/DuskCampus.png",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [
            { text: "加班做完", next: "node01" },
            { text: "不加班，交給明天的我了", next: "restart" }
        ]
    },

    node01: {
        bgm: "suspense",
        speaker: "player",
        text: [
            "你獨自加班到九點，周圍都沒有人，極為安靜",
            "突然!你聽到奇怪的聲音",
            "好像是哭泣聲"
        ],
        background: "image/DuskCampus.png",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [
            { text: "你走向聲音來源處", next: "node02" },
            { text: "好可怕! 還是趕緊收拾東西回家吧!", next: "restart" }
        ]
    },

    node02: {
        bgm: "suspense",
        speaker: "player",
        text: [
            "你走向哭泣聲來源處，原來是一本書",
            "書名是紅衣小女孩……",
            "奇怪?店裡什麼時候有這本書?"
        ],
        background: "image/DuskCampus.png",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [
            { text: "翻開書查看", next: "nodeInner" },
            { text: "不碰觸書，再觀察一下", next: "restart" }
        ]
    },

    nodeInner: {
        bgm: "inner",
        speaker: "player",
        text: [
            "你進入裡世界，四周充滿神秘的藍黑宮廷風",
            "這裡只有覺醒的人才能進入"
        ],
        background: "image/InnerWorld.jpg",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [{ text: "探索裡世界", next: "restart" }]
    },

    restart: {
        bgm: "surface",
        text: ["回到遊戲首頁"],
        background: "image/DuskCampus.png",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [{ text: "重新開始遊戲", next: "start" }]
    }
};
