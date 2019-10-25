var express = require("express");
var handlebars = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();


// parse config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars Config
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes to give server acess to them


