var fs = require("fs");

var user = {
    "name": "mohit",
    "password": "password4",
    "profession": "teacher",
    "id": 4
};

exports.getUsers = function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
};

exports.getUserById = function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        users = JSON.parse( data );
        var user = users.find(function(u) { return u.id == req.params.id;});
        console.log( user );
        res.end( JSON.stringify(user));
    });
};

exports.addUser = function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
};

exports.deleteUser = function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + 2];

        console.log( data );

        res.end( JSON.stringify(data));
    });
};
