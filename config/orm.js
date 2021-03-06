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
        var queryString = "INSERT INTO " + table;
        queryString += "(";
        queryString += cols;
        queryString += ") ";
        queryString += "VALUES(";
        queryString += vals;
        queryString += ") ";
        connection.query(queryString, function(err, result) {
            if (err) throw err;

            console.table(result);
            callback(result);
        })
    },

    updateOne: function (table, col, val, colToUpdate, valToUpdate, callback) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, col, val, colToUpdate, valToUpdate], function(err, result) {
            if (err) throw err;

            console.table(result);
            callback(result);
        })
    }

};

module.exports = orm;