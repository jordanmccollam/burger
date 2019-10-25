var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.use(function(req, res) {
    res.render("index");
})

module.exports = router;