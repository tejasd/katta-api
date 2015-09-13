'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Defining routes that are delegated to different files

var api = require('./routes/api/v1');

// Third party middleware

app.use(bodyParser.json());

// Routing

app.use('/api/v1', api);

app.get('/', function(req, res) {
	res.send('You\'ve reached Katta.');
});

// Express Listening

app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Katta is being hosted at http://%s:%s', host, port);
});