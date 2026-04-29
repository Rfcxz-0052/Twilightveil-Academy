// chapter3
const storyNodes = {
    // 第三章 紅傘女
    red_b01: {
        bgm: "surface",
        se:"nightmarket",
        speaker: "player",

        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "白祈先生，我家要走過夜市才能到，謝謝你送我回家",
        ],
        background: "image/nightmarket01.webp",
        next: "red_b02"
    },

    red_b02: {
        bgm: "surface",
        se:"nightmarket",        
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
        se:"nightmarket",
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
        se:"nightmarket",
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
        se:"nightmarket",
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
        se:"nightmarket",
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
        se:"nightmarket",
        speaker: "player",

        characters: {
            player: "normal",
            moxing: "normal",
        },
        text: [
            "墨行先生，我家要走過夜市才能到，謝謝你送我回家",
        ],
        background: "image/nightmarket01.webp",
        next: "red_m02"
    },

    red_m02: {
        bgm: "surface",
        se:"nightmarket",
        speaker: "moxing",

        characters: {
            player: "normal",
            moxing: "normal",
        },
        text: [
            "夜市啊……人很多，你應該會比較安心一點。",
            "如果覺得不舒服，記得跟我說。"
        ],
        background: "image/nightmarket01.webp",
        next: "red_m03"
    }, 

    red_m03: {
        bgm: "surface",
        se:"nightmarket",
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
        se:"nightmarket",
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
        background: "image/nightmarket01.webp",
        next: "red_m05"
    },

    red_m05: {
        bgm: "surface",
        se:"nightmarket",
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
        background: "image/nightmarket01.webp",
        next: "red_m06"
    },

    red_m06: {
        bgm: "surface",
        se:"nightmarket",
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
        background: "image/nightmarket01.webp",
        next: "red_03"
    },


    red_y01: {
        bgm: "surface",
        se:"nightmarket",
        speaker: "player",

        characters: {
            player: "normal",
            yanzhen: "normal",
        },
        text: [
            "炎燼先生，我家要走過夜市才能到，謝謝你送我回家",
        ],
        background: "image/nightmarket01.webp",
        next: "red_y02"
    },

    red_y02: {
        bgm: "surface",
        se:"nightmarket",
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
        background: "image/nightmarket01.webp",
        next: "red_y03"
    },
    
    red_y03: {
        bgm: "surface",
        se:"nightmarket",
        speaker: "yanzhen",

        characters: {
            player: "normal",
            yanzhen: "normal",
        },
        text: [
            "……找到了。"
        ],
        background: "image/nightmarket01.webp",
        choices: [
            { text: "找到什麼？", next: "red_y04", lightShadow: { light: 1 } },
            { text: "你要做什麼？", next: "red_y04", lightShadow: { shadow: 1 } }
        ]
    },

    red_y04: {
        bgm: "surface",
        se:"nightmarket",
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
        background: "image/nightmarket01.webp",
        next: "red_y05"
    },

    red_y05: {
        bgm: "surface",
        se:"nightmarket",
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
        background: "image/nightmarket01.webp",
        choices: [
            { text: "等等，她好像沒有惡意", next: "red_y06", lightShadow: { light: 1 } },
            { text: "交給你了", next: "red_03", lightShadow: { shadow: 1 } }
        ]
    },

    red_y06: {
        bgm: "surface",
        se:"nightmarket",
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
        background: "image/nightmarket01.webp",
        next: "red_03"
    },

    red_03: {
        bgm: "red",
        speaker: "player",

        characters: {
            player: "normal",
            red: "normal"
        },
        text: [
            "……人聲，突然消失了。",
        ],
        background: "image/nightmarket02.webp",
        next: "red_04"
    }, 

    red_04: {
        bgm: "red",
        speaker: "red",

        characters: {
            player: "normal",
            red: "normal"
        },
        text: [
            "她卻越走越靠近你",
            "你忽然驚覺，周圍的人都消失了",
            "小姑娘，剛剛與我共鳴的是你嗎?",
            "她撐著紅傘，你看不清她。"
        ],
        background: "image/nightmarket02.webp",
        next: "red_05"
    },  
    
    red_05: {
        bgm: "red",
        speaker: "red",

        characters: {
            player: "normal",
            red: "normal"
        },
        text: [
            "我感應到你對母親的思念",
            "你在想媽媽嗎?",
            "她開始喃喃自語",
            "「孩子!我的孩子……你在哪裡……」"
        ],
        background: "image/nightmarket02.webp",

        choices: [
            {
                text: {
                    default: "詢問她在找什麼",
                    cases: [
                        ["light >= 2", "溫柔詢問她的孩子"],
                        ["shadow >= 2", "直接質問她的異常"]
                    ]
                },
                next: "red_06"
            }
        ]
    },

    red_06: {
        bgm: "red",
        speaker: "red",

        characters: {
            player: "normal",
            red: "normal"
        },
        text: [
            "「幫我找我的孩子」",
            "並且一直喃喃自語著",
            "「我的孩子……你在哪裡……」",
            "「都是媽媽的錯，是媽媽沒有保護好你，孩子，你在哪?」",            
        ],
        background: "image/nightmarket02.webp",
        next: "red_07"
    },

    red_07: {
        bgm: "red",
        speaker: "redchild",

        characters: {
            player: "normal",
            redchild: "normal",
            red: "normal"
        },
        text: [
            "此時你感覺有什麼在拉著你的衣服",
            "你轉頭一看",
            "是一個小女孩",
            "姐姐，你看的見我嗎?",            
        ],
        background: "image/nightmarket02.webp",
        next: "red_08"
    }, 
    
    red_08: {
        bgm: "red",
        speaker: "redchild",

        characters: {
            player: "normal",
            redchild: "normal",
            red: "normal"
        },
        text: [
            "此時你感覺有什麼在拉著你的衣服",
            "你轉頭一看",
            "是一個小女孩",
            "姐姐，你看的見我嗎?",            
        ],
        background: "image/nightmarket02.webp",
        choices: [
            { text: "是啊，你拉我有什麼事嗎?", next: "red_09"},
        ]
    },
    
    red_09: {
        bgm: "red",
        speaker: "redchild",

        characters: {
            player: "normal",
            redchild: "normal",
            red: "normal"
        },
        text: [
            "媽媽，她總是看不見我",
            "但我一直在媽媽的身邊",
            "姐姐，你能幫幫我嗎?",            
        ],
        background: "image/nightmarket02.webp",
        choices: [
            { text: "我該怎麼幫妳呢?", next: "red_10"},
        ]
    },

    red_10: {
        bgm: "red",
        speaker: "red",

        characters: {
            player: "normal",
            redchild: "normal",
            red: "normal"
        },
        text: [
            "妳不幫我找我的孩子，妳在和誰說話!",          
        ],
        background: "image/nightmarket02.webp",
        choices: [
            { text: "我在和妳的孩子說話", next: "red_11"},
        ]
    },

    red_11: {
        bgm: "red",
        speaker: "red",

        characters: {
            player: "normal",
            redchild: "normal",
            red: "normal"
        },
        text: [
            "孩子?不!我的孩子早在我得知被拋棄後就流掉", 
            "所以我才選擇在林投樹上吊，為了陪我的孩子",   
            "妳騙我，妳一定是在騙我!!!",                              
        ],
        background: "image/nightmarket02.webp",
        choices: [
            { text: "不，妳的孩子一直在你的身邊，妳看不見嗎?", next: "red_12"},
        ]
    },

    red_12: {
        bgm: "red",
        speaker: "red",

        characters: {
            player: "normal",
            redchild: "normal",
            red: "normal"
        },
        text: [
            "啊!我知道了，妳就是我的孩子", 
            "孩子，妳留下來吧!",   
            "媽媽會好好補償妳的",                                                     
        ],
        background: "image/nightmarket02.webp",
        next: "red_13"
    },
    
    red_13: {
        bgm: "red",
        speaker: "redchild",

        characters: {
            player: "normal",
            redchild: "normal",
            red: "normal"
        },
        text: [ 
            "小女孩焦急地看著紅傘女",
            "一直喊著:媽媽，我在這，一直在這",                                                     
        ],
        background: "image/nightmarket02.webp",
        next: "red_14"
    },

    red_14: {
        bgm: "red",
        speaker: "player",

        characters: {
            player: "normal",
            redchild: "normal",
            red: "normal"
        },

        text: [
            "紅傘女的氣息開始失控。",
            "她的聲音在哭與笑之間扭曲。",
            "你必須做出選擇——",
            "而你已經沒有時間再思考了。"
        ],

        background: "image/nightmarket02.webp",

        next: {
            cases: [
                ["light >= shadow", "red_route_good"],
                ["shadow > light", "red_route_bad"]
            ],
            default: "red_route_bad"
        }
    },

    red_route_good: {
        next: {
            cases: [
                ["route === 'baiqi'", "red_good_baiqi"],
                ["route === 'yanzhen'", "red_good_yanzhen"],
                ["route === 'moxing'", "red_good_moxing"]
            ]
        }
    },

    red_route_bad: {
        next: {
            cases: [
                ["route === 'baiqi'", "red_bad_baiqi"],
                ["route === 'yanzhen'", "red_bad_yanzhen"],
                ["route === 'moxing'", "red_bad_moxing"]
            ]
        }
    },

    red_good_moxing: {
        bgm: "surface",
        speaker: "moxing",
        characters: {
            player: "normal",
            moxing: "normal"
        },
        background: "image/nightmarket02.webp",
        next: "red_epilogue_good",
        text: [
            "……她不是在傷人。",
            "她只是，一直在找她的孩子。",
            "墨行握住你的手，引導靈力。",
            "「一起讓她看見吧。」",
            "光芒擴散。",
            "母女相擁，在光中消散。"
        ]
    },

    red_good_baiqi: {
        bgm: "surface",
        speaker: "baiqi",
        characters: {
            player: "normal",
            baiqi: "normal"
        },
        background: "image/nightmarket02.webp",
        next: "red_epilogue_good",
        text: [
            "這是她自己的執念。",
            "白祈讓你穩住靈力。",
            "你讓孩子的聲音被聽見。",
            "紅傘女崩潰。",
            "她終於抱住孩子。"
        ]
    },

    red_good_yanzhen: {
        bgm: "surface",
        speaker: "yanzhen",
        characters: {
            player: "normal",
            yanzhen: "normal"
        },
        background: "image/nightmarket02.webp",
        next: "red_epilogue_good",
        text: [
            "「下不為例。」",
            "他沒有阻止你。",
            "你讓母女相見。",
            "執念崩解。"
        ]
    },

    red_bad_yanzhen: {
        bgm: "red",
        speaker: "yanzhen",
        characters: {
            player: "normal",
            yanzhen: "normal"
        },
        background: "image/nightmarket02.webp",
        next: "red_epilogue_bad",
        text: [
            "火焰瞬間爆發。",
            "紅傘女被吞噬。",
            "「不需要猶豫。」",
            "但你心裡不太對勁。"
        ]
    },

    red_bad_baiqi: {
        bgm: "red",
        speaker: "baiqi",
        characters: {
            player: "normal",
            baiqi: "normal"
        },
        background: "image/nightmarket02.webp",
        next: "red_epilogue_bad",
        text: [
            "靈力鎖鏈封印她。",
            "「她已經失控。」",
            "但聲音仍在回響。",
            "孩子……"
        ]
    },

    red_bad_moxing: {
        bgm: "red",
        speaker: "moxing",
        characters: {
            player: "normal",
            moxing: "normal"
        },
        background: "image/nightmarket02.webp",
        next: "red_epilogue_bad",
        text: [
            "黑暗吞沒一切。",
            "他沒能救到她。",
            "「……還是太慢了。」"
        ]
    },

    red_epilogue_good: {
        bgm: "surface",
        se:"nightmarket",
        speaker: "player",
        characters: {
            player: "normal",
        },
        characters: {
            player: "normal",
        },

        text: [
            "夜市的聲音回來了。",
            "彷彿什麼都沒發生過。",
            "但你知道，有什麼已經改變了。"
        ],
        background: "image/nightmarket01.webp",
        next: "__HOME__"
    },

    red_epilogue_bad: {
        bgm: "surface",
        se:"nightmarket",
        speaker: "player",
        characters: {
            player: "normal",
        },
        characters: {
            player: "normal",
        },

        text: [
            "夜市恢復了熱鬧。",
            "但你的心，卻沉了下去。",
            "那個聲音，仍在你耳邊回響。"
        ],
        background: "image/nightmarket01.webp",
        next: "__HOME__"
    },
}

export default storyNodes;