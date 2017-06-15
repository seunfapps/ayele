let setApplicationRoutes = function (router) {
    router = require("./default.routes").addRoutes(router);
    router = require("./bot.routes").addRoutes(router);
    return router;
}

module.exports = setApplicationRoutes;