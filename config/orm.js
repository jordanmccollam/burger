var connection = require("./connection");

var orm = {

    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.table(result);
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