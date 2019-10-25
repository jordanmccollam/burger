var connection = require("./connection");

var orm = {

    selectAll: function (table, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.table(result);
            callback(result);
        })
    },

    // insertOne: function () {
    //     var queryString = ""; 
    // },

    // updateOne: function () {
    //     var queryString = "";
    // }

};

module.exports = orm;