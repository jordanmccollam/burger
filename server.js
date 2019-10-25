var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();


// parse config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

