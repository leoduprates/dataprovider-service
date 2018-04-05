var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function() {
  var app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.text());


  consign()
    .include('models')
    .then('api')
    .then('routes')
    .into(app);

  return app;
}
