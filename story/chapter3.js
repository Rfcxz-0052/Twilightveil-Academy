// chapter3
const storyNodes = {
    // 第三章 紅傘女
    red_b01: {
        bgm: "surface",
        speaker: "player",

        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "白祈先生，我家要走過夜市才能到，謝謝你送我回家",
        ],
        background: "image/DarkCampus.webp",
        next: "red_b02"
    },

    red_b02: {
        bgm: "surface",
        speaker: "player",

        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "夜市的燈光一盞盞亮起，人聲鼎沸。",
            "這裡明明很熱鬧，但你卻感到一絲違和。",
            "……好像少了什麼。"
        ],
        background: "image/nightmarket01.webp",
        next: "red_b03"
    },

    red_b03: {
        bgm: "surface",
        speaker: "baiqi",

        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "……妳感覺到了？",
            "他站在你身旁，語氣平靜。",
            "「這裡的『聲音』太多了。」",
            "「多到……有些東西，反而被蓋掉了。」"
        ],
        background: "image/nightmarket01.webp",
        choices: [
            { text: "什麼意思？", next: "red_b04", lightShadow: { light: 1 } },
            { text: "你是不是知道什麼？", next: "red_b04", lightShadow: { shadow: 1 } }
        ]
    },

    red_b04: {
        bgm: "surface",
        speaker: "baiqi",

        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "白祈沒有直接回答。",
            "他只是看著人群。",
            "「有些靈，會選擇留在『最熱鬧的地方』。」",
            "「因為這樣，看起來就不孤單。」",
            "……",
            "「但那只是看起來而已。」"
        ],
        background: "image/nightmarket01.webp",
        next: "red_b05"
    },

    red_b05: {
        bgm: "surface",
        speaker: "baiqi",

        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "他轉頭看向你。",
            "「如果妳看見了——」",
            "「妳會選擇讓她留下、讓她離開，還是消滅她？」"
        ],
        background: "image/nightmarket01.webp",
        choices: [
            { text: "消滅她", next: "red_b06", lightShadow: { light: 2 } },
            { text: "讓她離開", next: "red_b06", lightShadow: { light: 1 } },
            { text: "讓她留下", next: "red_b06", lightShadow: { shadow: 1 } }
        ]
    },

    red_b06: {
        bgm: "surface",
        speaker: "player",

        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "你還來不及細想。",
            "人群之中——",
            "一抹紅色，映入眼中。",
            "……",
            "一個撐著紅傘的女人，站在人群之中。",
            "沒有人注意到她。",
            "除了你。"
        ],
        background: "image/nightmarket01.webp",
        next: "red_03"
    },

    red_m01: {
        bgm: "surface",
        speaker: "player",

        characters: {
            player: "normal",
            moxing: "normal",
        },
        text: [
            "墨行先生，我家要走過夜市才能到，謝謝你送我回家",
        ],
        background: "image/DarkCampus.webp",
        next: "red_m02"
    },

    red_m02: {
        bgm: "surface",
        speaker: "moxing",

        characters: {
            player: "normal",
            moxing: "normal",
        },
        text: [
            "夜市啊……人很多，你應該會比較安心一點。",
            "如果覺得不舒服，記得跟我說。"
        ],
        background: "image/DarkCampus.webp",
        next: "red_m03"
    }, 

    red_m03: {
        bgm: "surface",
        speaker: "moxing",

        characters: {
            player: "normal",
            moxing: "normal",
        },
        text: [
            "……等一下。",
            "你先別走那邊。",
            "那裡的氣息，有點不對。"
        ],
        background: "image/nightmarket01.webp",
        choices: [
            { text: "你感覺到了什麼？", next: "red_m04", lightShadow: { light: 1 } },
            { text: "只是夜市而已吧？", next: "red_m04", lightShadow: { shadow: 1 } }
        ]
    },

    red_m04: {
        bgm: "surface",
        speaker: "moxing",

        characters: {
            player: "normal",
            moxing: "normal",
        },
        text: [
            "有些靈，會待在人多的地方。",
            "不是因為喜歡熱鬧……",
            "而是因為這樣比較不孤單。",
            "……",
            "也比較不容易被發現。"
        ],
        background: "image/DarkCampus.webp",
        next: "red_m05"
    },

    red_m05: {
        bgm: "surface",
        speaker: "moxing",

        characters: {
            player: "normal",
            moxing: "normal",
        },
        text: [
            "……妳看那邊。",
            "人群之中，一個撐著紅傘的女人。",
            "她沒有影子。"
        ],
        background: "image/DarkCampus.webp",
        next: "red_m06"
    },

    red_m06: {
        bgm: "surface",
        speaker: "moxing",

        characters: {
            player: "normal",
            moxing: "normal",
        },
        text: [
            "先別靠太近。",
            "她的狀態……不像是惡意。",
            "比較像是……在找什麼。"
        ],
        background: "image/DarkCampus.webp",
        next: "red_03"
    },


    red_y01: {
        bgm: "surface",
        speaker: "player",

        characters: {
            player: "normal",
            yanzhen: "normal",
        },
        text: [
            "炎燼先生，我家要走過夜市才能到，謝謝你送我回家",
        ],
        background: "image/DarkCampus.webp",
        next: "red_y02"
    },

    red_y02: {
        bgm: "surface",
        speaker: "yanzhen",

        characters: {
            player: "normal",
            yanzhen: "normal",
        },
        text: [
            "嘖，人太多了。",
            "這種地方最麻煩。",
            "……氣息全混在一起。"
        ],
        background: "image/DarkCampus.webp",
        next: "red_y03"
    },
    
    red_y03: {
        bgm: "surface",
        speaker: "yanzhen",

        characters: {
            player: "normal",
            yanzhen: "normal",
        },
        text: [
            "……找到了。"
        ],
        background: "image/DarkCampus.webp",
        choices: [
            { text: "找到什麼？", next: "red_y04", lightShadow: { light: 1 } },
            { text: "你要做什麼？", next: "red_y04", lightShadow: { shadow: 1 } }
        ]
    },

    red_y04: {
        bgm: "surface",
        speaker: "yanzhen",

        characters: {
            player: "normal",
            yanzhen: "normal",
        },
        text: [
            "人群裡那個撐紅傘的。",
            "看到了嗎？",
            "那種靈壓，不會錯。"
        ],
        background: "image/DarkCampus.webp",
        next: "red_y05"
    },

    red_y05: {
        bgm: "surface",
        speaker: "yanzhen",

        characters: {
            player: "normal",
            yanzhen: "normal",
        },
        text: [
            "在這種地方徘徊的，通常都不乾淨。",
            "拖越久，越容易出事。",
            "我去處理掉。"
        ],
        background: "image/DarkCampus.webp",
        choices: [
            { text: "等等，她好像沒有惡意", next: "red_y06", lightShadow: { light: 1 } },
            { text: "交給你了", next: "red_03", lightShadow: { shadow: 1 } }
        ]
    },

    red_y06: {
        bgm: "surface",
        speaker: "yanzhen",

        characters: {
            player: "normal",
            yanzhen: "normal",
        },
        text: [
            "……妳在猶豫什麼？",
            "她是靈。",
            "這就夠了。"
        ],
        background: "image/DarkCampus.webp",
        next: "red_03"
    },

    red_03: {
        bgm: "surface",
        speaker: "player",

        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "她卻越走越靠近你",
            "你忽然驚覺，周圍的人都消失了",
            "小姑娘，剛剛與我共鳴的是你嗎?",
            "她撐著紅傘，你看不清她。"
        ],
        background: "image/nightmarket01.webp",
        next: "__HOME__"
    },    

};

export default storyNodes;