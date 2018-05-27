
function Point (x,y){
    this.x=x;
    this.y=y;
}

function Line() {
    let points = [];
    let slope = null;


    this.getPoints = function () {
        return points;
    };
    this.setPoints = function (p) {
        points=p;
    };
    this.addPoint = function (point) {
        points.push(point);
    };

    this.duplicatesCleaner = function () {
        this.setPoints(
            this.getPoints().filter((point, index, self) =>
                index === self.findIndex((t) => (
                    t.x === point.x && t.y === point.y
                ))
            )
        )
    };

    this.calcSlope =function (pointA,pointB) {
        return ((pointB.y - pointA.y) / (pointB.x - pointA.x));
    };


    this.setSlope = function () {
        slope = this.calcSlope(points[0],points[1]);
    };
    this.getSlope = function () {
        return slope;
    };

    this.hasPoint = function(point) { //checks if given a point that point is in line
        console.log("RESULT "+this.calcSlope(point, this.getPoints()[0]));
        return (this.calcSlope(point, this.getPoints()[0]) === this.calcSlope(this.getPoints()[0],this.getPoints()[1]));

    }


}

module.exports.Point = Point;
module.exports.Line = Line;
