let mongoose = require('mongoose');
let User = mongoose.model('User');

exports.create_user = function (req, res) {
    let new_user = User(req.body);
    new_user.save(function (err, user) {
        if(err){
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(user);
        }
    });
};

exports.get_all_user = function (req, res) {
    User.find({}, function (err, user) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(user);
        }
    });
};

exports.clear_users = function (req, res) {
    User.remove({}, function (err, user) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(user);
        }
    });
};

exports.get_users = function (req, res) {
    User.find({username: req.params.username},function (err, user) {
        if(err){
            return res.status(500).send(err);
        }
        else {
           return res.status(200).send(user);
        }
    });
};


