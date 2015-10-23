var express = require ('express');
var outlet = require('./outlet')
var app = express();

var a = new outlet();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/status', function(req, res){
  res.send(JSON.stringify(a));
})

app.get('/on', function(req, res) {
    a.turnOn();
    res.sendStatus(200);
});

app.get('/off', function(req, res) {
    a.turnOff();
    res.sendStatus(200);
});

var port = 8080;

var server = app.listen(process.env.PORT || port, function(){
    console.log('Listening on port ' + port);
});
