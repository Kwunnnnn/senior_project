let mongoose = require('mongoose');
let http = require('http');


exports.check_password = function (req, res) {
    let hostname = 'http://localhost:4000/get_users/' + req.body.username;
    http.get(hostname, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end',() => {
            //console.log(data);
            if(data === '[]'){
                return res.status(500).send("Not found username in Database");
            }
            else {
                data = JSON.parse(data);
                let req_password = String(req.body.password);
                //console.log(data[0].password);
               // console.log(pass);
                if(req_password === data[0].password) {
                    return res.status(200).send(data[0]);
                }
                else {
                    return res.status(500).send("Wrong password");
                }
            }
        });
    }).on("error", (err) => {
        return res.status(500).send("Not username in Database");
    });
};




