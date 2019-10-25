var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.use(function(req, res) {
    burger.selectAll(function(data) {

        var burgersObject = {
            burgers:  data
        }

        res.render("index", burgersObject);
    })
})

module.exports = router;