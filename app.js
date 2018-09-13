let App = require('microgear');
let https = require('https');

const KEY    = 'xCf1Wme51isFf97';
const SECRET = 'jdC6q5MmHiaYxQTZBwCSPisLx';
const APPID  = 'smartFarmTest1';

let microgear = App.create({
    key : KEY,
    secret : SECRET
});

microgear.on('connected', function () {
    console.log('Connected...');
    microgear.setAlias("esp8266");
    setInterval(function () {
        microgear.writefeed("Kwunnnn", "temp: 23.3, humid:55.2", "P2I7EIQnLCzf5cmCC0DFR8lrW9JP70sr");
        microgear.chat('esp8266', 'Hello world');
    },1000);
});

microgear.on('message', function (topic, body) {

    // setInterval(function () {
    //     let hostname = 'http://localhost:4002/writedata';
    //     https.post(hostname, (resp) => {
    //         let data = '';
    //         resp.on('data', (chunk) => {
    //             data += chunk;
    //         });
    //
    //         resp.on('end',() => {
    //             while(true) {
    //
    //
    //
    //             }
    //         })
    //     })
    //
    //
    // },1500);
    console.log('incomming : ' + topic + ' : ' + body);
});

microgear.on('closed', function () {
    console.log('Closed...');
});

microgear.connect(APPID);
