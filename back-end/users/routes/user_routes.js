module.exports = function (app) {
    let userController = require('../controllers/userControllers');

    app.route('/create_user')
        .post(userController.create_user);

    app.route('/get_all_user')
        .get(userController.get_all_user);

    app.route('/clear_users')
        .delete(userController.clear_users);

    app.route('/get_users/:username')
        .get(userController.get_users);
}