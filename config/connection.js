var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3360,
    user: "root",
    password: "",
    database: "burgers_db"
})