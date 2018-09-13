module.exports = function (app) {
    let iotController = require('../controllers/iot_controller');

    app.route('/writedata')
        .post(iotController.writedata);

    app.route('/get_sensor_data')
        .get(iotController.get_sensor_data);

    app.route('/clear_db')
        .delete(iotController.clear_db);

    app.route('/get_temp')
        .get(iotController.get_tempData);
};