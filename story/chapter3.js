// chapter3
const storyNodes = {
    // 第三章 紅傘女
    red_start: {
        next: {
            cases: [
                ["route === 'baiqi'", "red_baiqi_01"],
                ["route === 'yanzhen'", "red_yanzhen_01"],
                ["route === 'moxing'", "red_moxing_01"]
            ],
            default: "__ERROR__"
        }
    },

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
            { text: "消滅她", next: "red_b06", lightShadow: { shadow: 2 } },
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
            "這種東西，留著只會出事。",
            "我現在就解決她。"
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
            "夜市的燈光像被什麼吞掉。",
            "地面開始變得潮濕、冰冷。",
            "你眨了一下眼——"
        ],
        background: "image/nightmarket02.webp",
        next: "red_transition"
    }, 

    red_transition: {
        bgm: "red",
        speaker: "player",
        characters: {
            player: "normal",
            red: "normal"
        },
        text: [
            "夜市消失了。",
            "取而代之的，是一棵孤立在黑暗中的樹。",
            "林投樹。",
            "空氣中只剩海風與繩索的摩擦聲。"
        ],
        background: "image/lintou_tree.webp",
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
        background: "image/lintou_tree.webp",
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
        background: "image/lintou_tree.webp",

        choices: [
            {
                text: {
                    default: "詢問她在找什麼",
                    cases: [
                        ["light > shadow", "溫柔詢問她的孩子"],
                        ["shadow > light", "直接質問她的異常"]
                    ]
                },
                next: "red_06"
            }
        ],
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
        background: "image/lintou_tree.webp",
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
            "有什麼東西，輕輕拉住你的衣角。",
            "你低頭——",
            "是一個小女孩。",
            "她的手，很冰。",
            "「姐姐……妳看得見我嗎？」"           
        ],
        background: "image/lintou_tree.webp",
        choices: [
            {
                text: "蹲下來回應她",
                next: "red_08",
                lightShadow: { light: 1 }
            },
            {
                text: "遲疑地看著她",
                next: "red_08",
            },
            {
                text: "覺得不對勁想甩開",
                next: "red_08",
                lightShadow: { shadow: 1 }
            }
        ]
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
            "她緊緊抓著你。",
            "像是怕你一鬆手，就會消失。",
            "我一直在媽媽旁邊……",
            "可是她都看不見我……",
            "姐姐，你能幫幫我嗎?",          
        ],
        background: "image/lintou_tree.webp",
        choices: [
            {
                text: "我會幫妳",
                next: "red_09",
                lightShadow: { light: 1 }
            },
            {
                text: "先告訴我發生什麼事",
                next: "red_09",
            },
            {
                text: "這不關我的事",
                next: "red_09",
                lightShadow: { shadow: 1 }
            }
        ]
    },
    
    red_09: {
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
        background: "image/lintou_tree.webp",
        choices: [
            {
                text: "她就在妳身邊！妳看不到嗎？",
                next: "red_11",
                lightShadow: { light: 1 }
            },
            {
                text: "冷靜一點，妳現在不對勁",
                next: "red_11",
            },
            {
                text: "直接拉開距離防備",
                next: "red_11",
                lightShadow: { shadow: 1 }
            }
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
            "孩子?不!我的孩子早在我得知被拋棄後就流掉", 
            "所以我才選擇在林投樹上吊，為了陪我的孩子",   
            "妳騙我，妳一定是在騙我!!!",                              
        ],
        background: "image/lintou_tree.webp",
        choices: [
            {
                text: "妳的孩子一直在等妳面對她",
                next: "red_11_01",
                lightShadow: { light: 2 }
            },
            {
                text: "妳只是無法接受事實",
                next: "red_11_01",
                lightShadow: { shadow: 1 }
            },
            {
                text: "（沉默）",
                next: "red_11_01"
            }
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
            "不……不可能……",
            "我明明一直在找她……",
            "為什麼……為什麼找不到……",
            "為什麼妳聽得到她，我卻聽不到……"                            
        ],
        background: "image/lintou_tree.webp",
        next: "red_12"
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
        background: "image/lintou_tree.webp",
        choices: [
            {
                text: "我不是你的孩子",
                next: "red_13",
                lightShadow: { light: 2 }
            },
            {
                text: "先順著她的話",
                next: "red_13",
                lightShadow: { shadow: 2 }
            }
        ]
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
        background: "image/lintou_tree.webp",
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

        background: "image/lintou_tree.webp",

        next: {
            cases: [
                ["light > shadow", "red_route_good"],
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
        bgm: "red",
        speaker: "moxing",
        characters: {
            player: "normal",
            moxing: "normal"
        },
        text: [
            "「她不是看不見。」",
            "墨行低聲說。",
            "「她只是……不敢面對。」",
            "他握住你的手。",
            "「陪她一起。」",
            "……",
        ],
        background: "image/lintou_tree.webp",
        next: "red_good_moxing_01"
    },

    red_good_moxing_01: {
        bgm: "red",
        speaker: "moxing",
        characters: {
            player: "normal",
            moxing: "normal"
        },
        text: [
            "「不是每個人，都做得到面對。」",
            "「有些人，只能一邊逃，一邊活下去。」",
            "「那也沒有錯。」",
            "……",
            "「所以——」",
            "「不用逼她。」",
            "「我們在這裡，就夠了。」"
        ],
        background: "image/lintou_tree.webp",
        next: "red_good_moxing_02"
    },

    red_good_moxing_02: {
        bgm: "red",
        speaker: "red",
        characters: {
            player: "normal",
            red: "normal",
            redchild: "normal"
        },
        text: [
            "紅傘女的腳步停下。",
            "她的身體開始顫抖。",
            "「……我找不到她……」",
            "「我不敢停下來……」",
            "「萬一……她恨我，我該怎麼面對她?」"
        ],
        background: "image/lintou_tree.webp",
        next: "red_good_moxing_03",
    },

    red_good_moxing_03: {
        bgm: "red",
        speaker: "redchild",
        characters: {
            player: "normal",
            red: "normal",
            redchild: "normal"
        },
        text: [
            "小女孩輕輕抱住她。",
            "「媽媽……我一直在。」",
            "「我不恨你，我知道你是不得已的」",
            "……",
            "紅傘女崩潰地跪下。",
            "她終於抱住她。",
            "像是終於允許自己——",
            "停下來。"
        ],
        background: "image/lintou_tree.webp",
        next: "red_reunion",
    },

    red_good_baiqi: {
        bgm: "red",
        speaker: "baiqi",
        characters: {
            player: "normal",
            baiqi: "normal"
        },
        text: [
            "「別急。」",
            "白祈的聲音很輕。",
            "「妳已經看見了。」",
            "「接下來，只差一件事。」",
            "他沒有出手。",
            "只是看著你。",
            "「讓她也看見。」"
        ],
        background: "image/lintou_tree.webp",
        next: "red_good_baiqi_01"
    },

    red_good_baiqi_01: {
        bgm: "red",
        speaker: "player",
        characters: {
            player: "normal",
            red: "normal",
            redchild: "normal"
        },
        text: [
            "你伸出手。",
            "不是對紅傘女——",
            "而是對那個小女孩。",
            "「再說一次。」",
            "「讓她聽見。」"
        ],
        background: "image/lintou_tree.webp",
        next: "red_good_baiqi_02"
    },

    red_good_baiqi_02: {
        bgm: "red",
        speaker: "redchild",
        characters: {
            player: "normal",
            red: "normal",
            redchild: "normal"
        },

        text: [
            "小女孩愣了一下。",
            "然後，用盡力氣喊出來——",
            "「媽媽！！」",
            "聲音，不再微弱。",
            "那一瞬間——",
            "整個空間安靜了。"
        ],
        background: "image/lintou_tree.webp",
        next: "red_good_baiqi_03"
    },

    red_good_baiqi_03: {
        bgm: "red",
        speaker: "red",
        characters: {
            player: "normal",
            red: "normal",
            redchild: "normal"
        },
        text: [
            "紅傘女的身體，猛地一震。",
            "她緩緩轉頭。",
            "……",
            "「……聲音？」",
            "「這個聲音……」",
            "她的手開始顫抖。",
            "「為什麼……這麼清楚……？」"
        ],
        background: "image/lintou_tree.webp",
        next: "red_good_baiqi_break"
    },

        red_good_baiqi_break: {
        bgm: "red",
        speaker: "red",
        characters: {
            player: "normal",
            red: "normal",
            redchild: "normal"
        },
        text: [
            "「不對……」",
            "「我聽到了……但這不是真的……」",
            "她抱住頭，開始後退。",
            "「如果是真的……」",
            "「那我這麼久……到底在逃什麼？」",
            "她的聲音開始崩潰。",
            "「不可以……我不能承認……」"
        ],
        next: "red_good_baiqi_04"
    },

    red_good_baiqi_04: {
        bgm: "red",
        speaker: "baiqi",
        characters: {
            player: "normal",
            baiqi: "normal",
            red: "normal",
        },
        text: [
            "「因為妳終於願意聽了。」"
        ],
        background: "image/lintou_tree.webp",
        next: "red_good_baiqi_05"
    },

    red_good_baiqi_05: {
        bgm: "red",
        speaker: "red",
        characters: {
            player: "normal",
            red: "normal",
            redchild: "normal"
        },
        text: [
            "紅傘女睜大雙眼。",
            "她像是終於意識到什麼。",
            "「……我一直在找妳……」",
            "「可是我不敢……」",
            "「我怕，我怕你恨我……」",
            "她的聲音開始崩潰。",
            "「所以我才……看不見妳……？」"
        ],
        background: "image/lintou_tree.webp",
        next: "red_good_baiqi_06"
    },

    red_good_baiqi_06: {
        bgm: "red",
        speaker: "player",
        characters: {
            player: "normal",
            red: "normal",
            redchild: "normal"
        },
        text: [
            "小女孩沒有再說話。",
            "她只是走過去。",
            "輕輕地，抱住她。",
            "……",
            "這一次——",
            "紅傘女沒有錯過。"
        ],
        background: "image/lintou_tree.webp",
        next: "red_good_baiqi_07"
    },

    red_good_baiqi_07: {
        bgm: "red",
        speaker: "baiqi",
        characters: {
            player: "normal",
            baiqi: "normal"
        },
        text: [
            "光芒慢慢擴散。",
            "白祈看著那一幕。",
            "語氣依舊平靜。",
            "……",
            "「聲音從來沒有消失。」",
            "「只是，有些人——」",
            "「太害怕聽見。」"
        ],
        background: "image/lintou_tree.webp",
        next: "red_reunion",
    },

    red_good_yanzhen: {
        bgm: "red",
        speaker: "yanzhen",
        characters: {
            player: "normal",
            yanzhen: "normal",
            red: "normal",
            redchild: "normal"
        },
        text: [
            "「……妳還要拖多久？」",
            "炎燼看著你。",
            "「現在不動手，就會失控。」",
            "……",
            "炎燼的火焰已經點燃。",
            "只差一瞬間——",
            "紅傘女就會被燒盡。"
        ],
        background: "image/lintou_tree.webp",
        next: "red_good_yanzhen_01",
    },

    red_good_yanzhen_01: {
        bgm: "red",
        speaker: "player",
        characters: {
            player: "normal",
            red: "normal",
            redchild: "normal"
        },
        text: [
            "你抓住他的手，沒有後退。",
            "你站在紅傘女面前。",
            "擋住了炎燼。",
            "「再給她一次機會。」"
        ],
        background: "image/lintou_tree.webp",
        next: "red_good_yanzhen_02",
    },

        red_good_yanzhen_02: {
        bgm: "red",
        speaker: "red",
        characters: {
            player: "normal",
            red: "normal",
            redchild: "normal"
        },
        text: [
            "紅傘女愣住。",
            "她慢慢看向你。",
            "再看向那個小女孩。",
            "……",
            "「……孩子？」",
            "聲音顫抖。",
            "然後崩潰。",
            "她抱住她。",
            "炎燼沒有再動手。"
        ],
        background: "image/lintou_tree.webp",
        next: "red_reunion",
    },

    red_bad_yanzhen: {
        bgm: "red",
        speaker: "yanzhen",
        characters: {
            player: "normal",
            yanzhen: "normal"
        },
        text: [
            "「我說過了，不需要猶豫。」",
            "火焰，在一瞬間爆發。",
            "紅傘女的身影被吞沒。",
            "她的聲音，在火中扭曲——",
            "「孩子……」",
            "——然後，消失了。",
            "……",
            "世界安靜下來。"
        ],
        background: "image/lintou_tree.webp",
        next: "red_bad_after",
    },

    red_bad_baiqi: {
        bgm: "red",
        speaker: "baiqi",
        characters: {
            player: "normal",
            baiqi: "normal"
        },
        text: [
            "靈力鎖鏈收緊。",
            "紅傘女被封印。",
            "她掙扎著。",
            "「孩子……我還沒找到……」",
            "聲音逐漸消失。",
            "……",
            "白祈淡淡開口。",
            "「這是最穩定的處理方式。」",
            "「她已經失控了。」"
        ],
        background: "image/lintou_tree.webp",
        next: "red_bad_after",
    },

    red_bad_moxing: {
        bgm: "red",
        speaker: "moxing",
        characters: {
            player: "normal",
            moxing: "normal"
        },
        text: [
            "黑暗擴散。",
            "紅傘女的身影被吞沒。",
            "「……太晚了。」",
            "她的聲音逐漸崩解。",
            "「孩子……對不起……」",
            "——然後，一切歸於寂靜。",
            "墨行沒有說話。",
            "只是慢慢放下手。"
        ],
        background: "image/lintou_tree.webp",
        next: "red_bad_after",
    },

    red_reunion: {
        bgm: "red",
        speaker: "player",

        characters: {
            player: "normal",
            red: "normal",
            redchild: "normal"
        },

        text: [
            "風，慢慢停了下來。",
            "林投樹下。",
            "紅傘女緊緊抱著小女孩。",
            "這一次——",
            "她終於真正感受到她的存在。",
            "小女孩開心地笑了。",
            "「媽媽終於找到我了。」",
            "紅傘女沒有再哭喊。",
            "只是顫抖地抱著她。",
            "像是想把這些年缺失的一切，全都補回來。",
            "……",
            "那把紅傘，慢慢滑落地面。",
            "而周圍扭曲的黑暗，也開始逐漸消散。"
        ],

        background: "image/red_good_ending.webp",

        next: "red_epilogue_good"
    },

    red_epilogue_good: {
        bgm: "surface",
        se:"nightmarket",
        speaker: "player",
        characters: {
            player: "normal",
        },
        text: [
            "夜市的聲音回來了。",
            "人群依舊擁擠。",
            "燈光依舊閃爍。",
            "……",
            "彷彿什麼都沒發生過。",
            "但你知道——",
            "剛剛，有一段等待，被結束了。",
            "……",
            "你下意識看向人群。",
            "那裡，已經沒有那把紅傘了。",
            "……",
            "但你忽然停下腳步。",
            "剛才那個小女孩的聲音——",
            "還殘留在你的耳邊。",
            "「媽媽。」",
            "……",
            "你輕輕閉上眼。",
            "那聲音，沒有消失。",
            "只是變得很遠，很遠。"
        ],
        background: "image/nightmarket01.webp",
        next: "red_epilogue_good_01"
    },

    red_epilogue_good_01: {
        bgm: "surface",
        se:"nightmarket",
        speaker: "player",
        characters: {
            player: "normal",
        },
        text: [
            "你走進人群。",
            "但你忽然有種感覺——",
            "以後......",
            "也許，還會看見她們。",
            "(故事未完，待續......)",
        ],
        background: "image/nightmarket01.webp",
        next: "__HOME__"
    },

    red_bad_after: {
        bgm: "red",
        speaker: "redchild",
        characters: {
            player: "normal",
            redchild: "normal"
        },
        text: [
            "……你感覺，有什麼還在原地。",
            "你低頭。",
            "那個小女孩，還站在那裡。",
            "她沒有消失。",
            "……",
            "她慢慢看向剛剛媽媽消失的位置。",
            "「……媽媽？」",
            "……",
            "沒有回應。",
            "她的手，拿著媽媽留下的紅傘。",
            "「……姐姐？」",
            "她轉頭看向你。",
            "眼神裡沒有恐懼。",
            "只有困惑。",
            "……",
            "「為什麼……媽媽還是看不見我？」"
        ],
        background: "image/lintou_tree.webp",
        next: "red_bad_reunion"
    },

        red_bad_reunion: {
        bgm: "red",
        speaker: "redchild",

        characters: {
            player: "normal",
            redchild: "normal"
        },

        text: [
            "小女孩慢慢跑向剛才紅傘女消失的位置。",
            "那裡，已經什麼都沒有了。",
            "……",
            "她蹲下身。",
            "地上，只剩下一把破舊的紅傘。",
            "小女孩輕輕抱住那把傘。",
            "「媽媽……？」",
            "她的聲音很小。",
            "像是害怕太大聲，就會承認某件事。",
            "……",
            "沒有回應。",
            "海風吹過林投樹。",
            "繩索輕輕搖晃。",
            "而小女孩，只是安靜地抱著那把紅傘。",
            "再也沒有放開。"
        ],

        background: "image/lintou_tree.webp",

        next: "red_epilogue_bad"
    },

    red_epilogue_bad: {
        bgm: "surface",
        se:"nightmarket",
        speaker: "player",
        characters: {
            player: "normal",
        },
        text: [
            "夜市恢復了熱鬧。",
            "人聲再次填滿四周。",
            "彷彿什麼都沒發生過。",
            "……",
            "但你知道，有什麼被留下來了。",
            "你不自覺回頭。",
            "人群之中——",
            "好像有個小小的身影。",
            "站在原地。",
            "……",
            "她還在等。",
            "(故事未完，待續......)"
        ],
        background: "image/nightmarket01.webp",
        next: "__HOME__"
    },

    __ERROR__: {
        bgm: "surface",
        text: [
            "……不對。",
            "這裡的空間，好像被扭曲了。",
            "（畫面異常）"
        ],
        next: "__HOME__"
    }
}

export default storyNodes;