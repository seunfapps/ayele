const defaultController = require("../controllers/default.controller")

function addRoutes(router) {
    router.route('/').post(defaultController.post).get(defaultController.get);
    return router;
}

module.exports.addRoutes = addRoutes;