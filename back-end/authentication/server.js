let express = require('express'),
    app = express(),
    port = process.env.PORT || 4001,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0/authen');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

let routes = require('./routes/authen_route');
routes(app);

app.listen(port);
