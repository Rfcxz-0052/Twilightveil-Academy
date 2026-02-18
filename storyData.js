// storyData.js

const storyNodes = {
    enter: {
        bgm: "surface",
        text: ["歡迎來到暮影學院!", "光與影的交際處"],
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
            "你走向聲音來源處，原來是一本書",
            "這不是同學和圖書館借來要請我們訂的書",
            "(書的外觀很破舊，書的底部有紅色印跡，",
            "應該是以前館藏章模糊了吧...)"
        ],
        background: "image/DuskCampus.png",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [
            { text: "翻開書查看", next: "node03" },
            { text: "不碰觸書，放回原處", next: "node03" }
        ]
    },

    node03: {
        bgm: "suspense",
        speaker: "player",
        text: [
            "你眼前出現一位女孩，她對你說:",
            "姐姐，工作很辛苦嗎?",
            "要不要和我一起玩?"
        ],
        background: "image/library.png",
        playerImg: "image/girl01.png",
        characterImg: "image/male.png",
        choices: [
            { text: "(她感覺很危險，先觀察看看)這裡是哪裡?", next: "node04" },
            { text: "你...你要做什麼?", next: "restart" }
        ]
    },

    nodeInner: {
        bgm: "inner",
        speaker: "character",
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
