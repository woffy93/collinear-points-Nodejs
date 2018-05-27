const express = require("express");
const router = express.Router();
const algorithm = require("../logic/algorithm/main");
const ds = require("../logic/dataStructures");



router.post('/', function (req, res) {
    if (typeof req.body.x ==="number" && typeof req.body.x ==="number") {
        let point = new ds.Point(req.body.x,req.body.y);
        algorithm.addPt(point);
        res.send("ok");
    }
    else res.send("error");

});
router.get('/', function (req, res) {
    res.send("ok");
});
module.exports  = router;