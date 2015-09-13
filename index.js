'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

// Routing

app.get('/', function(req, res) {
	res.send('You\'ve reached Katta.');
})

// Express Listening

var server = app.listen(app.get('port'), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Katta is being hosted at http://%s:%s', host, port);
});