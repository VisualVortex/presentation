var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static(__dirname));

var port = process.env.PORT || 8013;
server.listen(port);
console.log('Presentation start at ', port);