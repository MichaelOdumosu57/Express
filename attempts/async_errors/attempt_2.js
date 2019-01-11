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



app.get('/', function (  req, res, next) {
    
  
  
    handle me im a dangeours uncaught syntax exception
    console.log("i just sent this wasnt  an error here ")
    next()

    
  

},function(err, req,res,next){

  if(err != null){
      console.error(err.message)
      res.send("handled with an async ")  
  }

  else{
      res.send("I should send even if there is no error ")
  }

});




app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))


// here everything works fine when the first async function throw an error, but if there is no error according to the docs 
// err should be equal to null and work as a regular callback

