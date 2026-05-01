import { affection } from "../affection.js";
import { setRoute } from "../route.js";

// chapter2
const storyNodes = {
    // 第二章 進入裡世界

    inner: {
        bgm: "inner",
        speaker: "player",

        characters: {   
            player: "normal",        
            baiqi: "normal",
            yanzhen: "normal",
            moxing: "normal",
        },
        text: [
            "突然，三股截然不同的靈壓同時逼近。",
            "一熱、一靜、一冷。",
            "你抬頭，看見三道身影。你首先看向..."
        ],
        background: "image/InnerWorld.webp",
        choices: [
            { text: "看向紅髮男子，氣場逼人", next: "inner01", affection: { yanzhen: 2 } },
            { text: "看向黑髮男子，目光溫柔", next: "inner02", affection: { moxing: 2 } },
            { text: "看向銀髮男子，冷意熟悉", next: "inner00", affection: { baiqi: 2 } }
        ]
    },

    //白祈 (男主1，中間派)
    inner00: {
        bgm: "inner",
        speaker: "baiqi",

        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "……別站在那裡。",
            "這裡的氣息，妳還承受不了。"
        ],
        background: "image/InnerWorld.webp",
        choices: [
            { text: "試著靠近他", next: "inner03", affection: { baiqi: 2 }, lightShadow: { light: 1 } },
            { text: "追問熟悉感", next: "inner03", affection: { baiqi: 1 }, lightShadow: { shadow: 1 } },
            { text: "保持距離觀察", next: "inner03", affection: { baiqi: 0 } }
        ]
    },

    //炎燼 (男主2，滅鬼派)
    inner01: {
        bgm: "inner",
        speaker: "yanzhen",

        characters: {
            player: "normal",
            yanzhen: "normal",
        },
        text: [
            "第一次來?站到我這邊。妳還不夠強。",
            "你承受不了這裡的氣息，不要傻站在那裡",
        ],
        background: "image/InnerWorld.webp",
        choices: [
            { text: "聽從他的指示", next: "inner03", affection: { yanzhen: 2 }, lightShadow: { shadow: 1 } },
            { text: "反問他的態度", next: "inner03", affection: { yanzhen: 0 } },
            { text: "拒絕被支配", next: "inner03", affection: { yanzhen: 1 }, lightShadow: { light: 1 } }
        ]
    },

    //墨行 (男主3，渡鬼派)
    inner02: {
        bgm: "inner",
        speaker: "moxing",

        characters: {
            player: "normal",
            moxing: "normal",
        },
        text: [
            "第一次來這裡?別害怕!剛來都會不適應",
            "這裡氣息強烈，你要不要先離開？"
        ],
        background: "image/InnerWorld.webp",
        choices: [
            { text: "接受他的關心", next: "inner03", affection: { moxing: 2 }, lightShadow: { light: 1 } },
            { text: "多看他一眼", next: "inner03", affection: { moxing: 1 } },
            { text: "強撐不退", next: "inner03", affection: { moxing: 0 }, lightShadow: { shadow: 1 } }
        ]
    },

    inner03: {
        bgm: "inner",
        speaker: "male",

        characters: {
            player: "normal",
            male: "normal",
        },
        text: [
            "此時，一個和藹的老爺爺突然出現，微笑看著你。",
            "小姑娘，別理那三個莽撞的臭小子",
            "你剛來這裡，一定有很多疑惑吧？",
        ],
        background: "image/InnerWorld.webp",
        choices: [
            { text: "爺爺你好，請問您是?", next: "inner04" },
        ]
    },

    inner04: {
        bgm: "inner",
        speaker: "male",

        characters: {
            player: "normal",
            male: "normal",
        },
        text: [
            "我是學院的引路人，專門引領剛進來的覺醒者",
            "你剛覺醒靈力，",
            "再加上你身上的界膜曾被某股力量劃破，",
            "所以你會比較難適應這裡的氣息。"
        ],
        background: "image/InnerWorld.webp",
        choices: [
            { text: "爺爺你能跟我說說什麼是靈力和界膜嗎？", next: "inner05" },
        ]
    },

    inner05: {
        bgm: "inner",
        speaker: "male",

        characters: {
            player: "normal",
            male: "normal",
        },
        text: [
            "先說說界膜吧!它是每一個人出生天然擁有的",
            "可以區隔人還活著的表世界，和亡者所在的裡世界",
            "所以界膜可以防止活人被一般的鬼魂所傷",
            "爺爺，那我這是來到地獄了嗎?",
            "不，這裡是與冥界，也就是你說的地獄的交際處"
        ],
        background: "image/InnerWorld.webp",
        next: "inner06"
    },

    inner06: {
        bgm: "inner",
        speaker: "male",

        characters: {
            player: "normal",
            male: "normal",
        },
        text: [
            "按你們的說法，就是鬼門關",
            "鬼魂必須被陰差引領通過鬼門關後，經過審判，才能投胎",
            "位於鬼門關前的靈學院",
            "正是為了處理靈力暴走的鬼魂而存在的",
        ],
        background: "image/InnerWorld.webp",
        next: "inner07"
    },

    inner07: {
        bgm: "inner",
        speaker: "male",

        characters: {
            player: "normal",
            male: "normal",
        },
        text: [
            "至於靈力，是被破除界膜後，才有可能覺醒",
            "靈學院靈力漫佈，再加上你剛剛才剛滅掉一個鬼魂",
            "你需要學習如何穩定你的靈力",
            "你的靈力才不會暴走"
        ],
        background: "image/InnerWorld.webp",
        choices: [
            { text: "爺爺，請問該如何控制我的靈力呢?", next: "inner08" },
        ]
    },

    inner08: {
        bgm: "inner",
        speaker: "male",

        characters: {
            player: "normal",
            male: "normal",
        },
        text: [
            "先坐下打坐，閉上眼睛感受妳身體裡的力量",
            "然後深呼吸，在呼吸之間平穩你的心神",
            "告訴自己，危機已過去",
            "這樣你的靈力就可以平息下來了"
        ],
        background: "image/InnerWorld.webp",
        next: "inner08_1"
    },

    inner08_1: {
        bgm: "suspense",
        speaker: "player",

        characters: {
            player: "normal",
        },
        text: [
            "(胸口突然一陣劇痛)",
            "……好痛……！",
            "視線開始扭曲，周圍的景色像是被撕裂",
            "那些聲音……是誰在哭？"
        ],
        background: "image/InnerWorld.webp",
        next: "inner08_2"
    },

    inner08_2: {
        bgm: "suspense",
        speaker: "yanzhen",

        characters: {
            baiqi: "normal",
            yanzhen: "normal",
            moxing: "normal",
        },
        text: [
            "炎燼驚呼道:糟了，她的靈力要暴走了！"
        ],
        background: "image/InnerWorld.webp",
        choices: [
            { text: "白祈沒有碰你，但默默觀察你的靈力狀況", next: "inner08_baiqi" },
            { text: "炎燼強行壓制", next: "inner08_yanzhen" },
            { text: "墨行安撫", next: "inner08_moxing" }
        ]
    },

    inner08_baiqi: {
        bgm: "suspense",
        speaker: "baiqi",

        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "她不是失控，是在共鳴",
            "你需要穩定心神，別讓這裡的靈影響你"
        ],
        background: "image/InnerWorld.webp",
        next: "inner08_3"
    },

    inner08_yanzhen: {
        bgm: "suspense",
        speaker: "yanzhen",

        characters: {
            player: "normal",
            yanzhen: "normal",
        },
        text: [
            "控制不了就別亂用",
            "這裡的殘靈直接滅了就好"
        ],
        background: "image/InnerWorld.webp",
        next: "inner08_3"
    },

    inner08_moxing: {
        bgm: "suspense",
        speaker: "moxing",

        characters: {
            player: "normal",
            moxing: "normal",
        },
        text: [
            "別緊張，深呼吸，慢慢來",
            "這裡的靈只是想和你分享他們的過往"
        ],
        background: "image/InnerWorld.webp",
        next: "inner08_3"
    },

    inner08_3: {
        bgm: "suspense",
        speaker: "player",
        characters: {
            player: "normal",
        },
        text: [
            "無數不屬於我的記憶湧進腦海。",
            "像是有人在我腦中翻找什麼。",
            "我快分不清，那些到底是不是「我」的過去。"
        ],
        background: "image/InnerWorld.webp",
        next: "inner08_4"
    },

    inner08_4: {
        bgm: "suspense",
        speaker: "player",
        characters: {
            player: "normal",
        },
        text: [
            "但在混亂中，一個畫面突然浮現。",
            "早上的餐桌，媽媽說今天會做我喜歡的菜。",
            "她說：『晚上別加班太晚，記得早點回來吃飯。』",
            "那份想回家的念頭，被放大了。",
            "像是有什麼東西，也在呼喚『孩子』這個詞。"
        ],
        background: "image/InnerWorld.webp",
        next: "inner08_5",
    },

    inner08_5: {
        bgm: "suspense",
        se: "ghost",
        speaker: "player",

        characters: {
            player: "normal",
            red: "normal"
        },
        text: [
            "視線邊緣出現一抹紅色。",
            "像傘，又像血。",
            "但下一瞬間又消失。"
        ],
        background: "image/InnerWorld.webp",
        choices: [
            {
                text: "先回家再說",
                next: "inner08_6",
                lightShadow: { light: 1 },
                affection: { baiqi: 1 }
            },
            {
                text: "追問那個身影",
                next: "inner08_6",
                lightShadow: { shadow: 1 },
                affection: { moxing: 1 }
            },
            {
                text: "壓下異樣感",
                next: "inner08_6",
                lightShadow: { shadow: 1 },
                affection: { yanzhen: 1 }
            }
        ]
    },

    inner08_6: {
        bgm: "inner",
        speaker: "player",

        characters: {
            player: "normal",
            male: "normal"
        },
        text: [
            "爺爺，我能回去自己的世界嗎?太晚了，我的母親還在等我回家"
        ],
        background: "image/InnerWorld.webp",
        next: "inner09"
    },

    inner09: {
        bgm: "inner",
        speaker: "male",

        characters: {
            player: "normal",
            male: "normal"
        },
        text: [
            "哈哈!是個有孝心的好孩子",
            "別擔心，在這裡時間是靜止的",
            "不過你這樣回去，你身上的靈力會吸引鬼魂的覬覦",
            "我身邊這三位臭小子，分別是白祈、炎燼和墨行，你選一位護送你回去吧!"
        ],
        background: "image/InnerWorld.webp",
        next: "inner10_interaction"
    },

    inner10_interaction: {
        bgm: "inner",
        speaker: "player",
        characters: {
            player: "normal",
            baiqi: "normal",
            yanzhen: "normal",
            moxing: "normal"
        },
        text: [
            "三人的氣息各不相同。",
            "一個冷靜、一個炙熱、一個溫柔。",
            "你不只是感受到他們的力量——",
            "還感覺到，他們在看你。",
            "像是在等你選擇。"
        ],
        background: "image/InnerWorld.webp",
        choices: [
            { text: "選白祈", next: "bond_baiqi_1" },
            { text: "選炎燼", next: "bond_yanzhen_1" },
            { text: "選墨行", next: "bond_moxing_1" }
        ]
    },

    bond_baiqi_1: {
        bgm: "inner",
        speaker: "baiqi",
        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "……別靠太近。",
            "妳的靈力還不穩。",
            "這裡的殘靈，會優先盯上妳這種狀態。"
        ],
        background: "image/InnerWorld.webp",
        next: "bond_baiqi_2"
    },

    bond_baiqi_2: {
        bgm: "inner",
        speaker: "player",
        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "你是在提醒我……還是在擔心我？"
        ],
        background: "image/InnerWorld.webp",
        choices: [
            {
                text: "試著靠近他",
                next: "bond_baiqi_close",
                affection: { baiqi: 2 },
                lightShadow: { shadow: 1 }
            },
            {
                text: "停下來觀察他",
                next: "bond_baiqi_watch",
                affection: { baiqi: 1 },
                lightShadow: { light: 1 }
            }
        ]
    },

    bond_baiqi_close: {
        bgm: "inner",
        speaker: "baiqi",
        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "……我說過了。",
            "別靠太近。",
            "（但他沒有後退）",
            "……至少，現在站在我這邊。"
        ],
        background: "image/InnerWorld.webp",
        next: "bond_return"
    },

    bond_baiqi_watch: {
        bgm: "inner",
        speaker: "baiqi",
        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "……還算冷靜。",
            "記住這種距離。",
            "這裡，不是妳可以隨便靠近的地方。"
        ],
        background: "image/InnerWorld.webp",
        next: "bond_return"
    },

    bond_yanzhen_1: {
        bgm: "inner",
        speaker: "yanzhen",
        characters: {
            player: "normal",
            yanzhen: "normal"
        },
        text: [
            "終於肯過來了？",
            "剛剛那種狀態，還敢亂動。"
        ],
        background: "image/InnerWorld.webp",
        next: "bond_yanzhen_2"
    },

    bond_yanzhen_2: {
        bgm: "inner",
        speaker: "player",
        characters: {
            player: "normal",
            yanzhen: "normal"
        },
        text: [
            "你一直在看我？"
        ],
        background: "image/InnerWorld.webp",
        choices: [
            {
                text: "語氣帶刺回應",
                next: "bond_yanzhen_provoke",
                affection: { yanzhen: 2 },
                lightShadow: { shadow: 1 }
            },
            {
                text: "承認有點不安",
                next: "bond_yanzhen_soft",
                affection: { yanzhen: 1 },
                lightShadow: { light: 1 }
            }
        ]
    },

    bond_yanzhen_provoke: {
        bgm: "inner",
        speaker: "yanzhen",
        characters: {
            player: "normal",
            yanzhen: "normal"
        },
        text: [
            "……呵。",
            "還敢頂嘴。",
            "比剛剛那副快倒的樣子好多了。"
        ],
        background: "image/InnerWorld.webp",
        next: "bond_return"
    },

    bond_yanzhen_soft: {
        bgm: "inner",
        speaker: "yanzhen",
        characters: {
            player: "normal",
            yanzhen: "normal"
        },
        text: [
            "怕就站我這邊。",
            "我會清掉所有靠近妳的東西。"
        ],
        background: "image/InnerWorld.webp",
        next: "bond_return"
    },

    bond_moxing_1: {
        bgm: "inner",
        speaker: "moxing",
        characters: {
            player: "normal",
            moxing: "normal"
        },
        text: [
            "還好妳過來了。",
            "剛剛那種共鳴……其實很危險。"
        ],
        background: "image/InnerWorld.webp",
        next: "bond_moxing_2"
    },

    bond_moxing_2: {
        bgm: "inner",
        speaker: "player",
        characters: {
            player: "normal",
            moxing: "normal"
        },
        text: [
            "共鳴……？"
        ],
        background: "image/InnerWorld.webp",
        next: "bond_moxing_3"
    },

    bond_moxing_3: {
        bgm: "inner",
        speaker: "moxing",
        characters: {
            player: "normal",
            moxing: "normal"
        },
        text: [
            "妳會感受到他們的情緒。",
            "如果太深……會分不清是誰的。",
            "所以——"
        ],
        background: "image/InnerWorld.webp",
        choices: [
            {
                text: "讓他握住你的手",
                next: "bond_moxing_touch",
                affection: { moxing: 2 },
                lightShadow: { light: 1 }
            },
            {
                text: "自己穩住情緒",
                next: "bond_moxing_hold",
                affection: { moxing: 1 }
            }
        ]
    },

    bond_moxing_touch: {
        bgm: "inner",
        speaker: "moxing",
        characters: {
            player: "normal",
            moxing: "normal"
        },
        text: [
            "……手很冷。",
            "別一個人撐。",
            "我會幫妳分擔一點。"
        ],
        background: "image/InnerWorld.webp",
        next: "bond_return"
    },

    bond_moxing_hold: {
        bgm: "inner",
        speaker: "moxing",
        characters: {
            player: "normal",
            moxing: "normal"
        },
        text: [
            "不錯。",
            "但真的撐不住的時候，記得找我。"
        ],
        background: "image/InnerWorld.webp",
        next: "bond_return"
    },

    bond_return: {
        bgm: "inner",
        speaker: "player",
        characters: {
            player: "normal",
            baiqi: "normal",
            yanzhen: "normal",
            moxing: "normal"
        },
        text: [
            "你重新看向三人。",
            "心裡，好像已經有答案了。"
        ],
        background: "image/InnerWorld.webp",
        next: "inner10_confirm"
    },

    inner10_confirm: {
        bgm: "inner",
        speaker: "player",

        text: [
            "那就麻煩你了。"
        ],
        background: "image/InnerWorld.webp",

        next: (state) => {
            const { baiqi = 0, yanzhen = 0, moxing = 0 } = state.affection;

            if (baiqi > yanzhen && baiqi > moxing) {
                setRoute("baiqi");
                return "inner11_1";
            }

            if (yanzhen > baiqi && yanzhen > moxing) {
                setRoute("yanzhen");
                return "inner11_2";
            }

            if (moxing > baiqi && moxing > yanzhen) {
                setRoute("moxing");
                return "inner11_3";
            }

            // 🔥 tie fallback（一定要有 route）
            setRoute("baiqi");
            return "inner11_tie";
        }
    },

    inner11_tie: {
        bgm: "suspense",
        speaker: "player",

        characters: {
            player: "normal",
            baiqi: "normal",
            yanzhen: "normal",
            moxing: "normal"
        },

        text: [
            "你還沒開口——",
            "三股力量，已經同時靠近你。",
            "像是誰都不打算讓步。"
        ],
        background: "image/InnerWorld.webp",
        next: "inner11_tie_2"
    },

    inner11_tie_2: {
        bgm: "suspense",
        speaker: "yanzhen",

        characters: {
            player: "normal",
            baiqi: "normal",
            yanzhen: "normal",
            moxing: "normal"
        },

        text: [
            "「她跟我走。」",
            "炎燼語氣毫不猶豫。",
            "「她現在的狀態，不適合被情緒牽動。」"
        ],
        background: "image/InnerWorld.webp",
        next: "inner11_tie_3"
    },

    inner11_tie_3: {
        bgm: "suspense",
        speaker: "moxing",

        characters: {
            player: "normal",
            baiqi: "normal",
            yanzhen: "normal",
            moxing: "normal"
        },

        text: [
            "「你這樣只會讓她更失控。」",
            "墨行輕聲反駁。",
            "「她需要的是安撫，不是壓制。」"
        ],
        background: "image/InnerWorld.webp",
        next: "inner11_tie_4"
    },

    inner11_tie_4: {
        bgm: "suspense",
        speaker: "baiqi",

        characters: {
            player: "normal",
            baiqi: "normal",
            yanzhen: "normal",
            moxing: "normal"
        },

        text: [
            "「……都錯。」",
            "白祈的聲音很低。",
            "「她現在的狀態，是『共鳴未穩定』。」",
            "「你們兩個，只會干擾她。」"
        ],
        background: "image/InnerWorld.webp",
        next: "inner11_tie_5"
    },

    inner11_tie_5: {
        bgm: "suspense",
        speaker: "player",

        characters: {
            player: "normal",
            baiqi: "normal",
            yanzhen: "normal",
            moxing: "normal"
        },

        text: [
            "三種聲音，同時壓在你身上。",
            "胸口，再次開始發熱。",
            "不只是靈力——",
            "還有情緒。"
        ],
        background: "image/InnerWorld.webp",
        next: "inner11_tie_6"
    },

    inner11_tie_6: {
        bgm: "suspense",
        speaker: "player",

        characters: {
            player: "normal",
        },

        text: [
            "心跳開始失控。",
            "不是我的情緒。",
            "也不是他們的——",
            "而是全部混在一起。"
        ],
        background: "image/InnerWorld.webp",
        next: "inner11_tie_7"
    },

    inner11_tie_7: {
        bgm: "suspense",
        se: "ghost",
        speaker: "player",

        characters: {
            player: "normal",
            red: "normal"
        },

        text: [
            "——「孩子……」",
            "那個聲音，再次出現。",
            "比剛剛更近。"
        ],
        background: "image/InnerWorld.webp",
        next: "inner11_tie_8"
    },

    inner11_tie_8: {
        bgm: "suspense",
        speaker: "player",

        characters: {
            player: "normal",
            baiqi: "normal",
            yanzhen: "normal",
            moxing: "normal"
        },

        text: [
            "「……不對。」",
            "白祈瞬間變了臉色。",
            "「這不是她的情緒。」"
        ],
        background: "image/InnerWorld.webp",
        next: "inner11_tie_9"
    },

    inner11_tie_9: {
        bgm: "suspense",
        speaker: "yanzhen",

        characters: {
            player: "normal",
            yanzhen: "normal"
        },

        text: [
            "「有東西在靠近。」",
            "炎燼皺眉。",
            "「而且已經鎖定她了。」"
        ],
        background: "image/InnerWorld.webp",
        next: "inner11_tie_10"
    },

    inner11_tie_10: {
        bgm: "suspense",
        speaker: "moxing",

        characters: {
            player: "normal",
            moxing: "normal"
        },

        text: [
            "「來不及了……」",
            "「她已經被『牽上』了。」"
        ],
        background: "image/InnerWorld.webp",
        next: "inner11_tie_11"
    },

    inner11_tie_11: {
        bgm: "red",
        se: "ghost",
        speaker: "player",

        characters: {
            player: "normal",
            red: "normal"
        },

        text: [
            "紅色，從視線邊緣蔓延。",
            "像傘。",
            "也像血。",
            "——然後，一切被吞沒。"
        ],
        background: "image/InnerWorld.webp",
        next: "inner11_tie_split"
    },

    inner11_tie_split: {
        bgm: "red",
        speaker: "player",

        text: [
            "失控的共鳴撕裂了空間——",
            "有人抓住了你。"
        ],
        background: "image/InnerWorld.webp",

        next: () => {
            const rand = Math.random();

            if (rand < 0.33) {
                setRoute("baiqi");
                return "inner11_1";
            }
            if (rand < 0.66) {
                setRoute("yanzhen");
                return "inner11_2";
            }
            setRoute("moxing");
            return "inner11_3";
        }
    },

    inner11_1: {
        bgm: "inner",
        speaker: "baiqi",

        characters: {
            player: "normal",
            baiqi: "normal",
        },
        text: [
            "嗯!走吧",
        ],
        background: "image/InnerWorld.webp",
        next: "red_b01"
    },

    inner11_2: {
        bgm: "inner",
        speaker: "yanzhen",

        characters: {
            player: "normal",
            yanzhen: "normal",
        },
        text: [
            "要不是看在老頭子的面子上，我才懶得帶新人",
        ],
        background: "image/InnerWorld.webp",
        next: "red_y01"
    },

    inner11_3: {
        bgm: "inner",
        speaker: "moxing",

        characters: {
            player: "normal",
            moxing: "normal",
        },
        text: [
            "別客氣，叫我墨行就好，我會安全護送你到家的",
        ],
        background: "image/InnerWorld.webp",
        next: "red_m01"
    },
};

export default storyNodes;