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

    insertOne: function (table, cols, vals, callback) {
        var queryString = "INSERT INTO ??";
        queryString += "(?)";
        queryString += "VALUES (?)";
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) throw err;
            console.table(result);
            callback(result);
        })
    },

    // updateOne: function () {
    //     var queryString = "";
    // }

};

module.exports = orm;