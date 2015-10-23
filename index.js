var express = require ('express');
var outlet = require('./outlet')
var sensor = require('./sensor')
var app = express();

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

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/sensorstatus', function(req, res){
  res.send(JSON.stringify(sensors));
})

app.get('/outletstatus', function(req, res){
  res.send(JSON.stringify(outlets));
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
