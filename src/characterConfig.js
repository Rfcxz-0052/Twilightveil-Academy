// characterConfig.js

const asset = (path) => import.meta.env.BASE_URL + path;

export const characterConfig = {
    player: {
        normal: asset("image/player.webp")
    },
    xiaoying: {
        normal: asset("image/girl01.webp")
    },
    ghost: {
        normal: asset("image/ghost02.webp")
    },
    male: {
        normal: asset("image/male04.webp")
    },
    baiqi: {
        normal: asset("image/male.webp")
    },
    yanzhen: {
        normal: asset("image/male01.webp")
    },
    moxing: {
        normal: asset("image/male02.webp")
    },
    red: {
        normal: asset("image/red01.webp")
    },
    redchild: {
        normal: asset("image/redchild.webp")
    },
};