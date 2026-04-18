//condition.js
export function evaluate(expr, state) {
    if (typeof expr === "function") {
        return expr(state);
    }

    if (typeof expr !== "string") {
        return expr;
    }

    const context = {
        ...state.affection,
        ...state.lightShadow,
        balance: state.lightShadow.light - state.lightShadow.shadow,
        node: state.currentNode
    };

    try {
        return new Function(
            ...Object.keys(context),
            `return (${expr});`
        )(...Object.values(context));
    } catch (e) {
        console.error("DSL 錯誤:", expr);
        return false;
    }
}

export function evaluateCases(config, state) {
    const { cases = [], default: def } = config;

    for (const [condition, result] of cases) {
        if (evaluate(condition, state) === true) {
            return result;
        }
    }

    return def;
}

// ✅ cases
export function buildChoiceText(config, state) {
    const { cases = [], default: def } = config;

    for (const item of cases) {
        if (!Array.isArray(item) || item.length < 2) {
            console.warn("cases 格式錯誤:", item);
            continue;
        }

        const [condition, text] = item;

        if (evaluate(condition, state) === true) {
            return typeof text === "function"
                ? text(state)
                : text;
        }
    }

    return typeof def === "function"
        ? def(state)
        : def;
}

// ✅ 統一入口（🔥重點）
export function resolveText(val, state) {

    if (typeof val === "function") {
        return val(state);
    }

    // cases DSL
    if (val && typeof val === "object" && Array.isArray(val.cases)) {
        return buildChoiceText(val, state);
    }

    if (typeof val === "string") {
        return val;
    }

    return "";
}