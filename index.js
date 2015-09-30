var express = require ('express');
var app = express();

app.get('/', function(req, res) {
    res.send('HELLO THIS IS POWERCORE!');
});

var port = 8080;

var server = app.listen(process.env.PORT || port, function(){
    console.log('Listening on port ' + port);
});
