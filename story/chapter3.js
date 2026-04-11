// chapter3
const storyNodes = {
    // 第三章 紅傘女
    red_b01: {
        bgm: "surface",
        speaker: "character",
        text: [
            "白祈先生，我家要走過夜市才能到，謝謝你送我回家",
        ],
        background: "image/DarkCampus.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male.webp",
        next: "red_b02"
    },

    red_b02: {
        bgm: "surface",
        speaker: "character",
        text: [
            "白祈先生，我家要走過夜市才能到，謝謝你送我回家",
        ],
        background: "image/nightmarket01.webp",
        playerImg: "image/player.webp",
        characterImg: "image/male.webp",
        next: "__HOME__"
    },

};

export default storyNodes;