var express = require("express");
var app = express();

var user = require("./users/user");

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
    console.log("Example api listening at http://%s:%s", host, port)

});