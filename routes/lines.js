const express = require("express");
const router = express.Router();
const algorithm = require("../logic/algorithm/main");
const ds = require("../logic/dataStructures");



router.post('/', function (req, res) {
    if (typeof req.body.x ==="number" && typeof req.body.x ==="number") {
        let point = new ds.Point(req.body.x,req.body.y);
        algorithm.addPt(point);
    }
    else res.send("error");
});
router.get('/:n', function (req, res) {
    let input = req.params.n;
    let result = algorithm.getSegments(input);
    res.send(JSON.stringify(result));
});
module.exports  = router;