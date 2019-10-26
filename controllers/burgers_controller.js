var express = require("express");
var burger = require("../models/burger");
var connection = require("../config/connection");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {

        var burgersObject = {
            burgers:  data
        }

        res.render("index", burgersObject);
    })
});

router.post("/", function(req, res) {
    console.log([req.body.name, false]);
    burger.insertOne(["'" + req.body.name + "'", false]);
})

module.exports = router;