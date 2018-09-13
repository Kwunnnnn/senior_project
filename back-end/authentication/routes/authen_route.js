module.exports = function (app) {
    let authenController = require('../controllers/authentication_controller');

    app.route('/check_password')
        .post(authenController.check_password);
}