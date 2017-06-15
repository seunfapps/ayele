const botController = require("../controllers/bot.controller")

function addRoutes(router) {
    router.route('/bot').post(botController.post).get(botController.get);
    return router;
}

module.exports.addRoutes = addRoutes;