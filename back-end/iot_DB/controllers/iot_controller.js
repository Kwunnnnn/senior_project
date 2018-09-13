let mongoose = require('mongoose');
let https = require('https');
let IoT = mongoose.model('IoT');

exports.writedata = function (req, res) {
    let mydata = 'https://api.netpie.io/feed/Kwunnnn?apikey=P2I7EIQnLCzf5cmCC0DFR8lrW9JP70sr&granularity=20second&since=24hour&filter=temp';
    https.get(mydata, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            let mydata = JSON.parse(data);
            // let useData = mydata.data[0];
            // console.log(mydata.data[0].values[1][2]);

            let all_data = [];
            for(var i = 0; i < mydata.data[0].values.length ; i++) {
                let new_data = {'id_number': mydata.data[0].values[i][0], 'temp_data': mydata.data[0].values[i][1]};
                    all_data.push(new_data);
            }
            // for (data in mydata.data[0]) {
            //     let new_data = {'id_number': mydata.data[0].values[0][0], 'temp_data': mydata.data[0].values[0][1]};
            //     all_data.push(new_data);
            // }
            console.log(all_data);

            IoT.collection.insertMany(all_data, {ordered: false}, function (err, data) {
                if (err) {
                    return res.status(200).send(err);
                } else {
                    return res.status(200).send(data);
                }
            })
         });
     }).on("error", (err) => {
         console.log("Error: " + err.message);
     });
};

exports.get_sensor_data = function (req, res) {
    IoT.find({}, function (err, data) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(data);
        }
    });
};

exports.clear_db = function (req, res) {
    IoT.remove({}, function (err, data) {
        if(err) {
            return res.status(200).send(err);
        }
        else {
            return res.status(200).send(data);
        }
    });
};

exports.get_tempData = function (req, res) {
    IoT.find({temp_data : req.body.temp_data}, function (err, data) {
        if (err) {
            return res.status(200).send(err);
        }
        else {
            console.log(req.body.temp_data);
            return res.status(200).send(data);
        }
    });
};