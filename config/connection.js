var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "qyxsjdcrup4y1o01",
    password: "lqjyt9bcltjjl568",
    database: "	rtod9o2x2vkysy6l"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
})

module.exports = connection;