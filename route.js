//route.js
let route = null;

function setRoute(value) {
    route = value;
    console.log("當前路線:", route);
}

function getRoute() {
    return route;
}

function resetRoute() {
    route = null;
}

export { setRoute, getRoute, resetRoute };