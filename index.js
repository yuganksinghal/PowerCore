var express = require ('express');
var outlet = require('./outlet');
var sensor = require('./sensor');
var app = express();
var bodyParser = require('body-parser');

var outlets=[];
var sensors=[];

for (var i = 0; i < 5; i++){
  var s = 'plug' + i;
  var a = new outlet(s);
  outlets.push(a)
}

var b = new sensor('temperature');
sensors.push(b);
b=new sensor('humidity');
sensors.push(b);
b = new sensor('luminosity');
sensors.push(b);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/sensorstatus', function(req, res){
  res.send(JSON.stringify(sensors));
});

app.get('/outletstatus', function(req, res){
  res.send(JSON.stringify(outlets));
});

app.post('/update', function(req, res){
  res.send(JSON.stringify(req));
});

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
