var express = require ('express');
var app = express();
var light;

app.get('/', function(req, res) {
    res.send(JSON.stringify(light));
});

app.get('/on', function(req, res) {
    light = 1;
    res.send(200, OK);
});

app.get('/off', function(req, res) {
    light = 0;
    res.send(200, OK);
});

var port = 8080;

var server = app.listen(process.env.PORT || port, function(){
    console.log('Listening on port ' + port);
});
