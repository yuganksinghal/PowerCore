var express = require ('express');
var outlet = require('./outlet');
var sensor = require('./sensor');
var app = express();
var bodyParser = require('body-parser');

var outlets=[];
var sensors=[];

for (var i = 1; i <= 5; i++){
  var s = 'plug' + i;
  var a = new outlet(s);
  outlets.push(a);
}

var b = new sensor('temperature');
sensors.push(b);
b = new sensor('humidity');
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
  outlets[0].switch=parseInt(req.body.plug1option);
  outlets[1].switch=parseInt(req.body.plug2option);
  outlets[2].switch=parseInt(req.body.plug3option);
  outlets[3].switch=parseInt(req.body.plug4option);
  outlets[4].switch=parseInt(req.body.plug5option);

  sensors[0].threshold=parseInt(req.body.temperature);
  sensors[1].threshold=parseInt(req.body.humidity);
  sensors[2].threshold=parseInt(req.body.luminosity);

  res.send(req.body);
});

app.post('/outlet', function(req, res){
  var data = req.body;
  outlets.forEach(function(value, index, ar){
    if(value.name === body.name){
      value.switch = body.switch;
    }
  })
  res.sendStatus(200);
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
