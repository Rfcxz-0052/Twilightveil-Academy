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
        playerImg: "image/player.webp",
        characterImg: "image/male.webp",
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
        playerImg: "image/player.webp",
        characterImg: "image/male.webp",
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
            "時鐘指向九點。",
            "書店只剩下你一個人的呼吸聲。",
            "——沙。",
            "書頁翻動的聲音，在空無一人的角落響起。",
        ],
        background: "image/DuskCampus.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male.webp",
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
        playerImg: "image/player.webp",
        characterImg: "image/male.webp",
        choices: [
            { text: "翻開書查看", next: "node03" },
            { text: "不碰，放回原處", next: "node03" } //白祈好感度+1
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
            "姐姐，工作辛苦嗎？要不要一起玩？",
            "你心裡一驚，感覺她出現得太突然了。"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "你是誰？", next: "node04" },
            { text: "這裡是哪裡？", next: "node04" }
        ]
    },

    node04: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "姐姐，我是小英",
            "女孩指了指圖書館，語氣天真卻又有些詭異地說:",
            "這裡是圖書館，你喜歡嗎？",
            "我一直在這裡讀書……為了畢業後找到好工作。",
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "為何我會在這裡?", next: "node05" },
        ]
    },

    node05: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "(小瑛沒有回答你的問題，只是渴望的看著你)",
            "姐姐這麼晚了，一個人還在加班",
            "感覺好像很辛苦，我來替你工作好不好？",
            "你看著她渴望的眼神，覺得氣氛越來越奇怪，心裡有一絲不安。"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "嗯……好吧", next: "node06" },
            { text: "不……不用了！謝謝(你往後退)", next: "node06" }
        ]
    },

    node06: {
        bgm: "suspense",
        se: "attack01",
        speaker: "character",
        text: [
            "她的手，突然像利爪般刺向你。",
            "你感覺到什麼看不見的東西擋住了攻擊後，碎掉了，",
            "但臉頰仍被劃出一道淺淺的傷痕，",
            "你心裡一震——這到底是什麼？從來沒遇過這種感覺……"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "等等，你想做什麼?", next: "node07" },
            { text: "後退，保持距離", next: "node07" } 
        ]
    },

    node07: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "女孩的語氣變得急切，眼神渴求你的身體。",
            "不!我不想再等了，我等了好久好久了",
            "姐姐不是常常抱怨要加班",
            "把妳的身體給我，姐姐就可以休息了",
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "這不是你的命運，你要守護自己的努力(你警惕看著她)", next: "node08" },
            { text: "繼續往後退，看看四周哪裡可以逃跑", next: "node09" }
        ]
    },

    node08: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "小英皺了皺眉，似乎感覺到你的防備。",
            "小英的聲音變得顫抖，虛弱的說:。",
            "這裡……好冷……姐姐……抱我……",
            "你心中不忍，慢慢靠近她，想伸出手。"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "慢慢地靠近小英", next: "node10" },  //善意值+1
            { text: "對小英的哀求，你沒有理會，只是一心想著離開", next: "node09" } //黑暗值+1
        ]
    },

    node09: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "面對你的無動於衷，小英冷笑著，冷冷地看著你",
            "沒用的,姐姐,妳跑不出去的", 
            "我在這裡被困了好久",
            "妳也別想離開"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "被小英搶奪身體，你失去了意識...", next: "restart" }
        ]
    },

    node10: {
        bgm: "suspense",
        se:"attack02",
        speaker: "player",
        text: [
            "突然!小英的利爪迅速刺入腹部，劇痛襲來，",
            "你來不及反應，倒在地上，鮮血染紅了地板。",
            "就在絕望之際，一股奇異的力量從體內湧出，溫暖而強烈，",
            "疼痛依舊，但你心裡充滿疑惑——這是……我自己發出的力量嗎？"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "你不想死，還有家人在等妳", next: "node11" },
            { text: "太痛了,你放棄掙扎", next: "node10b" }
        ]
    },

    node10b: {
        bgm: "suspense",
        se:"attack02",
        speaker: "player",
        text: [
            "小英歉意地看著你",
            "抱歉，姐姐，我真的很想離開",
            "我會代替你好好活著的"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "小英進入你的身體，你的意識漸漸消失了...", next: "restart" }
        ]
    },

    node11: {
        bgm: "suspense",
        se:"attack02",
        speaker: "player",
        text: [
            "絕望之際，一股未知的力量從體內升起，溫暖而強烈...",
            "血流慢慢止住，但腹部的疼痛依舊，你看向腹部，心裡充滿疑惑——",
            "這是怎麼做到的？難道是那股未知的力量？"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "你思考著...", next: "node12" },
        ]
    },

    node12: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "小英震驚地看著你，語氣帶著不解和畏懼：",
            "姐姐，你……怎麼辦到的？",
            "她的眼神中透出一絲好奇。"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "你忍著腹部的疼痛站起", next: "node13" }
        ]
    },

    node13: {
        bgm: "suspense",
        se: "ghost01",
        speaker: "character",
        text: [
            "突然，一個猥瑣的胖男鬼出現，笑聲刺耳，盯著女孩不放。",
            "小英嚇得躲到你身後。"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/ghost02.webp",
        choices: [
            { text: "擋在小英前：你是誰？", next: "node14" } //善意值+1
        ]
    },

    node14: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "胖男鬼咧嘴傻笑，伸手靠近你們：",
            "漂亮的小妞，和叔叔玩玩嗎？"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/ghost02.webp",
        choices: [
            { text: "爆發靈力，阻止他靠近", next: "node15" }
        ]
    },

    node15: {
        bgm: "suspense",
        speaker: "player",
        text: [
            "你不和我玩，那我就找她!",
            "男鬼惱羞成怒，指向小英。",
            "像她這種拼命讀書的，最有趣了。",
            "小英微微後退，但她的手心光芒閃動，彷彿準備出手。",
            "不!你不能動她!"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/ghost02.webp",
        choices: [
            { text: "你繼續施展靈力，阻擋男鬼靠近", next: "node17" },
            { text: "逃走，留下女孩", next: "node16" } //黑暗值 +3
        ]
    },

    node16: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "小英被男鬼吞噬，你回到書店，耳邊仍迴響著她的慘叫...",
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "回到遊戲首頁", next: "restart" }
        ]
    },

    node17: {
        bgm: "suspense",
        speaker: "character",
        text: [
            "小英，我感覺到你的力量在與我共鳴",
            "你也來一起幫我，我快抵擋不了了",
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "小英被你點醒，不再害怕，她的力量與你的融合，與你一起消滅男鬼", next: "node18" }
        ]
    },
    
    node18: {
        bgm: "surface",
        speaker: "character",
        text: [
            "小英低著頭，語氣比剛才平靜許多。",
            "「其實……我成績一直都很好。」",
            "「老師說，只要再撐一學期，就可以拿到推薦資格。」",
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "靜靜地聽著小英的敘述...", next: "node19" },
        ]
    },

    node19: {
        bgm: "surface",
        speaker: "character",
        text: [
            "她輕輕笑了一下。",
            "我連畢業照都想好要怎麼拍了。",
            "結果，那天之後，我再也沒有走出圖書館。",
            "姐姐，你說……如果那天我早一點離開，是不是就不一樣了？",
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "我安慰著流淚的小英", next: "node20" }
        ]
    },

    node20: {
        bgm: "surface",
        speaker: "character",
        text: [
            "不過沒關係了。",
            "至少最後一次，是我自己選擇戰鬥的。",
            "姐姐……謝謝你。",
            "她的指尖泛起柔和的光，溫暖順著傷口蔓延開來。",
            "她的身影在光中慢慢透明。"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "我擔憂地看著小英", next: "node21" }
        ]
    },

    node21: {
        bgm: "surface",
        speaker: "character",
        text: [
            "別擔心，姐姐。",
            "我只是要去下一段旅程了。",
            "希望下次，我能走到畢業典禮。"
        ],
        background: "image/library.webp",
        playerImg: "image/player.webp",
        characterImg: "image/girl01.webp",
        choices: [
            { text: "小英，下輩子一定要幸福喔!", next: "node22" }
        ]
    },

    node22: {
        bgm: "inner",
        speaker: "player",
        text: [
            "突然周遭景色開始模糊，我的靈力開始湧現",
            "我到了一個新地方，四周充滿古代的中式建築，周圍靈力滿佈。"
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male.webp",
        choices: [{ text: "我觀察著四周，因為陌生，沒有四處走動", next: "inner" }]
    },

    // 第二章 進入裡世界

    inner: {
        bgm: "inner",
        speaker: "player",
        text: [
            "三股截然不同的靈壓同時逼近。",
            "一熱、一靜、一冷。",
            "你抬頭，看見三道身影。你首先看向..."
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male.webp",
        choices: [
            { text: "一頭紅色短髮，氣場強勢，彷彿理所當然要妳站到他身邊的男子", next: "inner01" }, //炎燼好感度+1
            { text: "一頭黑色短髮，目光溫柔，像是在擔心妳是否害怕的男子", next: "inner02" }, //墨行好感度+1
            { text: "一頭銀白色長髮，他的目光冷淡，卻讓你產生一種莫名的熟悉感。" , next: "inner00" } //白祈好感度+1
        ]
    },

    //白祈 (男主1，中間派)
    inner00: {
        bgm: "inner",
        speaker: "character",
        text: [
            "……別站在那裡。",
            "這裡的氣息，妳還承受不了。"
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male.webp",
        choices: [
            { text: "……我們是不是在哪裡見過？（壓下想靠近他的衝動)", next: "inner03" }, //白祈好感度+2
            { text: "為什麼……我會覺得你很熟悉？（忍不住向他走近）", next: "inner03" }, //白祈好感度+1
            { text: "你是誰?", next: "inner03" }  //白祈好感度沒有增加
        ]
    },

    //炎燼 (男主2，滅鬼派)
    inner01: {
        bgm: "inner",
        speaker: "character",
        text: [
            "第一次來?站到我這邊。妳還不夠強。",
            "你承受不了這裡的氣息，不要傻站在那裡",
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male01.webp",
        choices: [
            { text: "……好，我準備走向你。", next: "inner03" }, //炎燼好感度+2
            { text: "你憑什麼命令我？", next: "inner03" }, //炎燼好感度沒有增加
            { text: "我自己可以站著。", next: "inner03" }  //炎燼好感度+1
        ]
    },

    //墨行 (男主3，渡鬼派)
    inner02: {
        bgm: "inner",
        speaker: "character",
        text: [
            "第一次來這裡?別害怕!剛來都會不適應",
            "這裡氣息強烈，你要不要先離開？"
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male02.webp",
        choices: [
            { text: "……謝謝你，我確實有點不舒服。", next: "inner03" }, //墨行好感度+2
            { text: "你一直在看著我?", next: "inner03" }, //墨行好感度+1         
            { text: "我還撐得住。",  next: "inner03" } //墨行好感度沒有增加
        ]
    },

    inner03: {
        bgm: "inner",
        speaker: "character",
        text: [
            "此時，一個和藹的老爺爺突然出現，微笑看著你",
            "小姑娘，你感到很疑惑吧!",
            "這是因為你才剛覺醒靈力",
            "再加上你身上活人天生的靈氣膜，被鬼撕碎了",
            "所以你會比較難適應"
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male03.webp",
        choices: [
            { text: "爺爺你好，能跟我說說什麼是靈力和靈氣膜嗎？", next: "restart" },
        ]
    },

    restart: {
        bgm: "surface",
        text: [""],
        background: "image/DuskCampus.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male.webp",
        choices: [{ text: "重新開始遊戲", next: "start" }]
    }
};
