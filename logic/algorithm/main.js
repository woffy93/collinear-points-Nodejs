const ds = require('../dataStructures');
const combinatorics = require('../utils/combinatorics');
let givenPoints = [];

let addPt = function (point) {
    givenPoints.push(point);
};

let getPts = function () {
    return givenPoints;
};

let clearPoints = function () {
    givenPoints = [];
};

let run = function () {
    let lines = [];

//( -5, 7 ), ( - 4, 5 ) and ( 1, -5 )


    if(givenPoints.length>0){
        console.log("INITIAL LENGTH "+givenPoints);
        let candidates = combinatorics.k_combinations(givenPoints, 2);

        candidates.forEach(function (candidate) {
            let line = new ds.Line();
            let point1 = new ds.Point(candidate[0].x, candidate[0].y);
            let point2 = new ds.Point(candidate[1].x, candidate[1].y);
            line.addPoint(point1);
            line.addPoint(point2);
            line.setSlope();
            lines.push(line);
        });



        let i = lines.length;
        while (i--) {
            let j = lines.length;
            while (j--) {
                if (i !== j) {
                    let line = lines[i];
                    let otherLine = lines[j];
                    if (i<0) break;
                    if ((line.getSlope() === otherLine.getSlope()) && (line.hasPoint(otherLine.getPoints()[0]))) {
                        //if the two lines have the same slope and fixed a point on the first dy/dx with a point on the other line
                        // is the same as dy/dx with a point on the first line
                        console.log("FOUND");
                        line.setPoints(line.getPoints().concat(otherLine.getPoints()));
                        line.duplicatesCleaner();
                        lines.splice(j, 1);
                        i--; //update indexes
                        j--;
                        console.log("I:"+i+"J:"+j);
                    }
                }
            }
        }

        for (let i =lines.length-1; i>=0;i--){ //another approach in avoid array copying
            let lin = lines[i];
            if (lin.getPoints().length<=2){
                lines.splice(i,1);
            }
            else{
                lin.setPoints(lin.getPoints().sort(function (p1,p2) {
                    if(p1.x<p2.x){
                        return -1;
                    }
                    else if(p1.x>p2.x){
                        return 1;
                    }
                    else return 0;
                }));
            }
        }

        return lines;
    }
};


function getSegments(n) {
    let l = run();
    let segments = [];
    l.forEach(function (line) {
        let points = line.getPoints();
        for (let i = points.length-1; i>=0; i--){
            for (let j=0; j<points.length;j++){
                if (j-i>=n-1){
                    segments.push([points[i],points[j]]);
                }
            }
        }
    });
    return segments;
}

module.exports.run=run;
module.exports.addPt=addPt;
module.exports.getSegments=getSegments;
module.exports.getPts=getPts;
module.exports.clearPoints=clearPoints;