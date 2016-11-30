var express = require("express");
var app = express();
var fs = require('fs');
//var logger = require('morgan');

var logger = require('./common/logger');


var user = require("./users/user");

//app.use(logger('dev'));

//var accessLogStream = fs.createWriteStream(__dirname + '/log/access.log', {flags: 'a'});
//console.log(__dirname);
// setup the logger
//app.use(logger('combined', {stream: accessLogStream}));

app.use(logger);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/user/listUsers', user.getUsers);

app.get('/user/:id', user.getUserById);

app.post('/user/addUser', user.addUser);

app.delete('user/deleteUser/id', user.deleteUser);

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log("Example api listening at http://%s:%s", host, port);

});