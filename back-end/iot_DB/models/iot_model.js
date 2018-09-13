let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let iotSchema = new Schema({
    id_number: {type: Number, required: false},
    temp_data: {type: Number, required: false},
    iot_time:  {type: Date, default: Date.now()}
});

module.exports = mongoose.model('IoT', iotSchema);