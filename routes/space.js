const express = require("express");
const router = express.Router();
const algorithm = require("../logic/algorithm/main");




router.get('/', function (req, res) {
    res.send(JSON.stringify(algorithm.getPts()));
});
router.delete('/', function (req, res) {
    algorithm.clearPoints();
    res.send("ok");
});
module.exports  = router;