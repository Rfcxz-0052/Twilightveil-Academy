// chapter2
const storyNodes = {
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
            { text: "一頭紅色短髮，氣場強勢，彷彿理所當然要妳站到他身邊的男子", next: "inner01", affection: { yanzhen: 2 } }, //炎燼好感度+1
            { text: "一頭黑色短髮，目光溫柔，像是在擔心妳是否害怕的男子", next: "inner02", affection: { moxing: 2}  }, //墨行好感度+1
            { text: "一頭銀白色長髮，他的目光冷淡，卻讓你產生一種莫名的熟悉感。" , next: "inner00", affection: { baiqi: 1 } } //白祈好感度+1
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
            { text: "……我們是不是在哪裡見過？（壓下想靠近他的衝動)", next: "inner03", affection: { baiqi: 2 }, lightShadow: { light: 1 } }, //白祈好感度+2
            { text: "為什麼……我會覺得你很熟悉？（忍不住向他走近）", next: "inner03", affection: { baiqi: 1 }, lightShadow: { shadow: 1 } }, //白祈好感度+1
            { text: "你是誰?", next: "inner03",affection: { baiqi: 0 } }  //白祈好感度沒有增加
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
            { text: "……好，我準備走向你。", next: "inner03", affection: { yanzhen: 2 }, lightShadow: { shadow: 1 } }, //炎燼好感度+2
            { text: "你憑什麼命令我？", next: "inner03", affection: { yanzhen: 0 } }, //炎燼好感度沒有增加
            { text: "我自己可以站著。", next: "inner03", affection: { yanzhen: 1 }, lightShadow: { light: 1 } }  //炎燼好感度+1
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
            { text: "……謝謝你，我確實有點不舒服。", next: "inner03", affection: { moxing: 2 }, lightShadow: { light: 1 } }, //墨行好感度+2
            { text: "你一直在看著我?", next: "inner03", affection: { moxing: 1 } }, //墨行好感度+1         
            { text: "我還撐得住。",  next: "inner03", affection: { moxing: 0 }, lightShadow: { shadow: 1 } } //墨行好感度沒有增加
        ]
    },

    inner03: {
        bgm: "inner",
        speaker: "character",
        text: [
            "此時，一個和藹的老爺爺突然出現，微笑看著你。",
            "小姑娘，別理那三個莽撞的臭小子",
            "你剛來這裡，一定有很多疑惑吧？",
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male04.webp",
        choices: [
            { text: "爺爺你好，請問您是?", next: "inner04" },
        ]
    },

    inner04: {
        bgm: "inner",
        speaker: "character",
        text: [
            "我是學院的引路人，專門引領剛進來的覺醒者",
            "你剛覺醒靈力，",
            "再加上你身上的界膜曾被某股力量劃破，",
            "所以你會比較難適應這裡的氣息。"
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male04.webp",
        choices: [
            { text: "爺爺你能跟我說說什麼是靈力和界膜嗎？", next: "inner05" },
        ]
    },

    inner05: {
        bgm: "inner",
        speaker: "character",
        text: [
            "先說說界膜吧!它是每一個人出生天然擁有的",
            "可以區隔人還活著的表世界，和亡者所在的裡世界",
            "所以界膜可以防止活人被一般的鬼魂所傷",
            "爺爺，那我這是來到地獄了嗎?",
            "不，這裡是與冥界，也就是你說的地獄的交際處"
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male04.webp",
        next: "inner06"
    },

    inner06: {
        bgm: "inner",
        speaker: "character",
        text: [
            "按你們的說法，就是鬼門關",
            "鬼魂必須被陰差引領通過鬼門關後，經過審判，才能投胎",
            "位於鬼門關前的靈學院",
            "正是為了處理靈力暴走的鬼魂而存在的",
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male04.webp",
        next: "inner07"
    },

    inner07: {
        bgm: "inner",
        speaker: "character",
        text: [
            "至於靈力，是被破除界膜後，才有可能覺醒",
            "靈學院靈力漫佈，再加上你剛剛才剛滅掉一個鬼魂",
            "你需要學習如何穩定你的靈力",
            "你的靈力才不會暴走"
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male04.webp",
        choices: [
            { text: "爺爺，請問該如何控制我的靈力呢?", next: "inner08" },
        ]
    },

    inner08: {
        bgm: "inner",
        speaker: "player",
        text: [
            "先坐下打坐，閉上眼睛感受妳身體裡的力量",
            "然後深呼吸，在呼吸之間平穩你的心神",
            "告訴自己，危機已過去",
            "這樣你的靈力就可以平息下來了",
            "(我按照爺爺的指示，感覺靈力平息後)"
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male04.webp",
        choices: [
            { text: "爺爺，我能回去自己的世界嗎?太晚了，我的母親還在等我回家", next: "inner09" },
        ]
    },

    inner09: {
        bgm: "inner",
        speaker: "player",
        text: [
            "哈哈!是個有孝心的好孩子",
            "別擔心，在這裡時間是靜止的",
            "不過你這樣回去，你身上的靈力會吸引鬼魂的覬覦",
            "我身邊這三位臭小子，分別是白祈、炎燼和墨行，你選一位護送你回去吧!"
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male04.webp",
        next: "inner10"
    },

    inner10: {
        bgm: "inner",
        speaker: "player",
        text: [
            "(我的眼神掃過爺爺話語所指的三位男子)",
            "那就麻煩你了!"
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male02.webp",
        choices: [
            { text: "白祈先生", next: "inner11_1", affection: { baiqi: 1 } },
            { text: "炎燼先生", next: "inner11_2", affection: { yanzhen: 1 } },      
            { text: "墨行先生",  next: "inner11_3", affection: { moxing: 1 } } 
        ]
    },

    inner11_1: {
        bgm: "inner",
        speaker: "character",
        text: [
            "嗯!走吧",
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male.webp",
        next: "red_b01"
    },

    inner11_2: {
        bgm: "inner",
        speaker: "character",
        text: [
            "要不是看在老頭子的面子上，我才懶得帶新人",
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male01.webp",
        next: "__HOME__"
    },

    inner11_3: {
        bgm: "inner",
        speaker: "character",
        text: [
            "別客氣，叫我墨行就好，我會安全護送你到家的",
        ],
        background: "image/InnerWorld.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male02.webp",
        next: "__HOME__"
    },
};

export default storyNodes;