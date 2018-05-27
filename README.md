# Collinear Points Problem

Project created to solve the following problem: 
Given a set of P feature points in the bidimensional plane, determine every line that contains at least N or
more COLLINEAR points.


### Requests

You should also expose a REST API that will allow the caller to:
* Add a point to the space
```
POST /point with body { "x": ..., "y": ... }
```
* Get all points in the space
```
GET /space
```
Example response:
```
[    
  {"x": 2, "y": 3}, 
  {"x": -2, "y": 1023}, 
  {"x": 3.2, "y": 0}, 
  ... ]
```
* Get all line segments passing through at least N points. Note that a line segment should be a set of COLLINEAR points.
```
GET /lines/n
```
* Remove all points from the space
```
DELETE /space
```


## Description
I have created a NodeJS server with a REST api using Express.js .
The algorithm, a description of the reasoning process I went trough and the data structures can be found in the *logic* folder

### Installing

* Download and run npm-install to install packages from package.json
* Run node app.js
As it is the server runs on localhost:8000


## Authors

* **Francesco Wofford** 




