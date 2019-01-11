const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data
const compression = require('compression')
app.use(compression())


var middleware = function(req,res,next){
    res.send("no errors lemme continue to do stuff")
    next()
}

var error_handler = function(err,req,res,next){
    console.log("error_handler")
    // res.json("error handled you may continue ")
    next()
}

app.get('/', function (  req, res, next) {
    
  
  
    
    // adsgagaso
    console.log("i just sent this wasnt  an error here ")  
    next()
    

    
  

},[error_handler,middleware]);




app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))


// here the problem is eventually solved taking advatange of the previous attempt facts that if there is not an error in the caller
//  the error callback is skipped  however according to attempt_1 I ask the maintainer, was that the intended result for problem 1
 // I say keep this solution, it rejects injected error handlers by hackers by simply skipping them and ensures only your error handler
  // handles the exceptions your code throws
