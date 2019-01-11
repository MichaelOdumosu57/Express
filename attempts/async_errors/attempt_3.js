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


app.use(function(err, req,res,next){

  if(err != null){
      console.error(err.message)
  }

      res.send("handled with an async ")  

});


app.get('/', function (  req, res, next) {
    
  
  
    // throw new Error("handle me Im a dangerous uncaught exception")
    console.log("i just sent this wasnt  an error here ")  
    // res.send("I should send even if there is no error ")
    next()
    

    
  

});




app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))


// here app.use is supposed to wait for the app.get fuction to execute but that just not the case, its as if
 // the get is a callaback to the use method here
 
 // however if there is no error we have the same problem as attempt_2 where callback with the err argument when its
  // caller function has no error 

