var express = require('express');
var mongoose = require('mongoose');

var app = express.createServer();

app.get('/', function(req, res) {
	res.send('Hello Express');
});

var port = process.env.PORT || 8080;
app.listen(port);
