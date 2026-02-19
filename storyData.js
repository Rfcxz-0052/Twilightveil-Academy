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
            "這裡是暮影大學，歷史悠久，附設高中及國中",
            "而你是一個剛入職的大學書店的店員",
        ],
        background: "image/DuskCampus.png",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [
            { text: "經過幾個月的學習，你對店裡的業務漸漸上手", next: "node00" },
        ]
    },

    node00: {
        bgm: "surface",
        speaker: "player", // 整個節點說話者
        text: [
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
        se: "ghost", 
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
        se: "page", 
        speaker: "player",
        text: [
            "你走向聲音來源處，原來是一本書",
            "這不是同學和圖書館借來要請我們訂的書",
            "(書的外觀很破舊，書的底部有紅色印跡...)",
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
            { text: "你...你要做什麼?", next: "node04" }
        ]
    },

    node04: {
        bgm: "suspense",
        speaker: "player",
        text: [
            "這裡是圖書館，姐姐喜歡嗎?",
            "我一直在這裡讀書…為了畢業後找到好工作。",
            "姐姐這麼辛苦，我來幫你工作好不好？"
        ],
        background: "image/library.png",
        playerImg: "image/girl01.png",
        characterImg: "image/male.png",
        choices: [
            { text: "嗯…好吧", next: "node05" },
            { text: "不…不要!(你往後退)", next: "node05" }
        ]
    },

    node05: {
        bgm: "suspense",
        se: "attack01",
        speaker: "player",
        text: [
            "(女孩突然往前揮爪，我臉上出現一道傷痕，開始流血)"
        ],
        background: "image/library.png",
        playerImg: "image/girl01.png",
        characterImg: "image/male.png",
        choices: [
            { text: "等等，你這麼努力一定能找到更好的工作", next: "node06" },
            { text: "啊!(趕緊逃跑)", next: "node06" }
        ]
    },

    node06: {
        bgm: "suspense",
        speaker: "player",
        text: [
            "不!我不想再等了，我等了好久好久了",
            "姐姐不是常常抱怨要加班",
            "把妳的身體給我，姐姐就可以休息了",
        ],
        background: "image/library.png",
        playerImg: "image/girl01.png",
        characterImg: "image/male.png",
        choices: [
            { text: "就算妳代替我，那也不是妳的人生，妳要讓你的努力白費嗎?", next: "node07" },
            { text: "(繼續逃跑中)", next: "node07" }
        ]
    },

    node07: {
        bgm: "suspense",
        speaker: "player",
        text: [
            "但是這裡好冷啊!好冷好冷啊!",
            "姐姐抱我一下，好不好"
        ],
        background: "image/library.png",
        playerImg: "image/girl01.png",
        characterImg: "image/male.png",
        choices: [
            { text: "我感到不忍，緩緩走近女孩", next: "node09" },
            { text: "(發現跑不出去，但也不敢靠近)", next: "node08" }
        ]
    },

    node08: {
        bgm: "suspense",
        speaker: "player",
        text: [
            "沒用的,姐姐,妳跑不出去的",
            "我在這裡被困了好久",
            "妳也別想離開"
        ],
        background: "image/library.png",
        playerImg: "image/girl01.png",
        characterImg: "image/male.png",
        choices: [
            { text: "被女鬼搶奪身體，只能眼睜睜看著她代替妳活著...", next: "restart" }
        ]
    },

    node09: {
        bgm: "suspense",
        se:"",
        speaker: "player",
        text: [
            "在我走近女孩，她的利爪刺進我的腹部",
            "我倒在地上，流著血，難道我要死了..."
        ],
        background: "image/library.png",
        playerImg: "image/girl01.png",
        characterImg: "image/male.png",
        choices: [
            { text: "不!我的家人還在等著我... (突然我發出一道光，身上的傷都好了)", next: "node09" },
            { text: "我放棄掙扎，昏過去, 被女鬼搶奪身體，只能眼睜睜看著她代替妳活著...", next: "restart" }
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
