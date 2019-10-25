var express = require("express");
var handlebars = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars Config
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes to give server acess to them
var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
})

