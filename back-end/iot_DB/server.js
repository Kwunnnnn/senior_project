let express = require('express'),
    app = express(),
    port = process.env.PORT || 4002,
    mongoose = require('mongoose'),
    IoTModel = require('./models/iot_model'),
    bodyParser = require('body-parser'),
    cors = require('cors');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/iotDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

let routes = require('./routes/iot_route');
routes(app);

app.listen(port);



/*let myiotdb = mongojs('myiotdb');
let dhtdb = mongojs('dht');

let devid, data, datasize, dataset='';
let t,h;

app.get('/', function (req, res) {
    res.send("my iot Protocal ready.");
});

app.get('/write/:data', function (req, res) {
    let strParseWriteReq = JSON.stringify(req.params);
    let strWriteReq = JSON.parse(strParseWriteReq);
    data = strWriteReq.data;
    writedata(data, res);
});

app.get('/read/:datasize', function (req, res) {
    let strParseReadReq = JSON.stringify(req.params);
    let strReadReq = JSON.parse(strParseReadReq);
    datasize = strReadReq.datasize;
    readdata(datasize, res);
});

app.listen(port, function () {
    let nodeStartTime = new Date();
    console.log('my IoT protocol running on port ' + port + ' start at ' + nodeStartTime);
});

async  function writedata(_data, res) {
    return new Promise(function (resolve, reject) {
        let writeCollection = myiotdb.collection('mycollection');
        writeCollection.insert({
            data: Number(_savedata),
            recordTime: new Date().getTime()
        },function (err) {
            if(err) {
                return res.status(500).send(err);
            }
            else {
                return res.status(200).send("record data ok");
            }
        });
    });
}
*/