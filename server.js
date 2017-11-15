var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var users;

app.use(express.static('client'));
app.use(bodyParser.json());
app.listen(8080,'127.0.0.1');

