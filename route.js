//route.js
import { logDebug } from "./debugSystem.js";

let route = null;

function setRoute(value) {
    route = value;

    logDebug("ROUTE", {
        route
    });
}

function getRoute() {
    return route;
}

function resetRoute() {
    route = null;
}

export { setRoute, getRoute, resetRoute };