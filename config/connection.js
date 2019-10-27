var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
    // DB is JAWSDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "jojo1997",
        database: "burgers_db"
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
})

module.exports = connection;