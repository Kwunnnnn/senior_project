let express = require('express'),
    app = express(),
    port  = process.env.PORT || 4000,
    mongoose = require('mongoose'),
    UserModel = require('./models/user_model'),
    bodyParser = require('body-parser'),
    cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users');

app.use(bodyParser.urlencoded({ extended: true}));
app.use (bodyParser.json());
app.use(cors());

let routes = require('./routes/user_routes');
routes(app);

app.listen(port);
