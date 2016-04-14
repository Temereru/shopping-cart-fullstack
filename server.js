var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// mongoose.connect('mongodb://localhost/notes');
var client = require("./amazon");

var app = express();

app.use(bodyParser.json());   // This is the type of body we're interested in
app.use(bodyParser.urlencoded({extended: false}));

app.listen(8080);

app.use(express.static('public'));
app.use(express.static('node_modules'));
