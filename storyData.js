const storyNodes = {
    // 第一章 靈力覺醒的契機
    enter: {
        bgm: "surface",
        text: ["歡迎來到暮影學院!", "光與影的交際處"],
        background: "image/DuskCampus.webp",
        choices: [{ text: "進入遊戲", next: "start" }]
    },

    start: {
        bgm: "surface",
        speaker: "player",
        text: [
            "這裡是暮影大學，歷史悠久，附設高中及國中。",
            "你是一個剛入職的大學書店店員，",
            "第一次踏入這裡，心中既興奮又緊張。"
        ],
        background: "image/SurfaceWorld.webp",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [
            { text: "經過幾個月的學習，你對店裡的業務漸漸上手", next: "node00" },
        ]
    },

    node00: {
        bgm: "surface",
        speaker: "player",
        text: [
            "新學期開始，訂書的學生絡繹不絕。",
            "事情還沒做完，你決定..."
        ],
        background: "image/DuskCampus.webp",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [
            { text: "加班完成工作", next: "node01" },
            { text: "不加班，交給明天再處理", next: "restart" }
        ]
    },

    node01: {
        bgm: "suspense",
        se: "page",
        speaker: "player",
        text: [
            "你獨自加班到九點，周圍一片安靜。",
            "突然，你聽到輕微的聲響，好像有人在翻動書頁。"
        ],
        background: "image/DuskCampus.webp",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [
            { text: "走向聲音來源查看", next: "node02" },
            { text: "太可怕了，先收拾東西回家吧", next: "restart" }
        ]
    },


    node02: {
        bgm: "suspense",
        speaker: "player",
        text: [
            "你發現是一本文字泛黃、破損的書，",
            "底部還留著鮮紅的痕跡。",          
            "這不是學校圖書館的書嗎?怎麼會出現在這裡?",
            "難道是學生遺落的?"
        ],
        background: "image/DuskCampus.webp",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [
            { text: "翻開書查看", next: "node03" },
            { text: "不碰，放回原處", next: "node03" }
        ]
    },

    node03: {
        bgm: "suspense",
        se: "ghost",
        speaker: "character",
        text: [
            "四周的光線扭曲，書店的書架變得模糊。",
            "一股奇異力量將你拉向書本，腳步不由自主地踏出。",
            "眼前出現一位女孩，她微笑著，對你說:",
            "「姐姐，工作辛苦嗎？要不要一起玩？」",
            "你心裡一驚，感覺她出現得太突然了。"
        ],
        background: "image/library.webp",
        playerImg: "image/player.png",
        characterImg: "image/girl01.png",
        choices: [
            { text: "她看起來很奇怪，先觀察看看，這裡是哪裡？", next: "node04" },
            { text: "你……你想做什麼？", next: "node04" }
        ]
    },

    node04: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "女孩指了指圖書館，語氣天真卻又有些詭異。",
            "「這裡是圖書館，你喜歡嗎？",
            "我一直在這裡讀書……為了畢業後找到好工作。」",
            "「姐姐這麼辛苦，我來幫你工作好不好？」",
            "你覺得氣氛越來越奇怪，心裡有一絲不安。"
        ],
        background: "image/library.webp",
        playerImg: "image/player.png",
        characterImg: "image/girl01.png",
        choices: [
            { text: "嗯……好吧", next: "node05" },
            { text: "不……不要！(你往後退)", next: "node05" }
        ]
    },

    node05: {
        bgm: "suspense",
        se: "attack01",
        speaker: "character",
        text: [
            "女孩突然揮爪，你的腹部被抓傷，鮮血迅速流下，劇痛讓你倒在地上。"
        ],
        background: "image/library.webp",
        playerImg: "image/player.png",
        characterImg: "image/girl01.png",
        choices: [
            { text: "你這麼努力，一定會有更好的未來", next: "node06" },
            { text: "快逃！", next: "node06" }
        ]
    },

    node06: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "女孩的語氣變得急切，眼神渴求你的身體。",
            "但你感受到體內湧動的力量，一道光芒從心底升起……"
        ],
        background: "image/library.webp",
        playerImg: "image/player.png",
        characterImg: "image/girl01.png",
        choices: [
            { text: "這不是你的命運，你要守護自己的努力", next: "node07" },
            { text: "繼續逃跑", next: "node07" }
        ]
    },

    node07: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "這裡……好冷……姐姐……抱我……",
            "你聽到女孩的哀求。",
            "你心中不忍，慢慢靠近她..."
        ],
        background: "image/library.webp",
        playerImg: "image/player.png",
        characterImg: "image/girl01.png",
        choices: [
            { text: "靠近女孩", next: "node09" },
            { text: "躲避，但心中不安", next: "node08" }
        ]
    },

    node08: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "女孩冷笑，告訴你無路可逃，她被困很久，你也別想離開。"
        ],
        background: "image/library.webp",
        playerImg: "image/player.png",
        characterImg: "image/girl01.png",
        choices: [
            { text: "被女鬼搶奪身體...", next: "restart" }
        ]
    },

    node09: {
        bgm: "suspense",
        se:"attack02",
        speaker: "player",
        text: [
            "利爪刺入腹部，你倒在地上，鮮血染紅了地板。",
            "絕望之際，一股未知的力量在體內湧動，你的靈力覺醒了！"
        ],
        background: "image/library.webp",
        playerImg: "image/player.png",
        characterImg: "image/girl01.png",
        choices: [
            { text: "光芒止住了血，但疼痛沒消失", next: "node10" },
            { text: "放棄掙扎", next: "restart" }
        ]
    },

    node10: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "女孩震驚地看著你，語氣帶著不解和畏懼：",
            "姐姐，你……怎麼辦到的？"
        ],
        background: "image/library.webp",
        playerImg: "image/player.png",
        characterImg: "image/girl01.png",
        choices: [
            { text: "你忍著疼痛站起", next: "node11" }
        ]
    },

    node11: {
        bgm: "suspense",
        se: "ghost01",
        speaker: "character",
        text: [
            "突然，一個猥瑣的胖男鬼出現，笑聲刺耳，盯著女孩不放。",
            "女孩嚇得躲到你身後。"
        ],
        background: "image/library.webp",
        playerImg: "image/player.png",
        characterImg: "image/male01.png",
        choices: [
            { text: "擋住女孩：你是誰？", next: "node12" }
        ]
    },

    node12: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "胖男鬼咧嘴傻笑，伸手靠近你們：",
            "漂亮的小妞，和叔叔玩玩嗎？"
        ],
        background: "image/library.webp",
        playerImg: "image/player.png",
        characterImg: "image/male01.png",
        choices: [
            { text: "爆發靈力，阻止他靠近", next: "node13" }
        ]
    },

    node13: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "你不和我玩，那我就找她!",
            "男鬼惱羞成怒，指向女孩。",
        ],
        background: "image/library.webp",
        playerImg: "image/player.png",
        characterImg: "image/male01.png",
        choices: [
            { text: "與女鬼合作消滅男鬼", next: "nodeinner" },
            { text: "逃走，留下女孩", next: "node14" }
        ]
    },

    node14: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "女孩被男鬼吞噬，你回到書店，耳邊仍迴響著她的慘叫..."
        ],
        background: "image/library.webp",
        playerImg: "image/player.png",
        characterImg: "image/girl01.png",
        choices: [
            { text: "回到遊戲首頁", next: "restart" }
        ]
    },

    nodeinner: {
        bgm: "inner",
        speaker: "player",
        text: [
            "你和女孩一起擊退了男鬼，她的心願得以了結，投胎離去。",
            "你進入裡世界，四周充滿神秘的藍黑宮廷風，這裡只有覺醒的人才能進入。"
        ],
        background: "image/InnerWorld.jpg",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [{ text: "探索裡世界", next: "restart" }]
    },

    // 第二章 進入裡世界

    restart: {
        bgm: "surface",
        text: [""],
        background: "image/DuskCampus.webp",
        playerImg: "image/player.png",
        characterImg: "image/male.png",
        choices: [{ text: "重新開始遊戲", next: "start" }]
    }
};
