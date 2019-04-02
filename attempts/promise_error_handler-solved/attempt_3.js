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




app.use(function (  req, res, next) {  
  res.send("the promise caught the error, its a database computing problem but for this error there is no queryDb")
})




app.get("/", function (req, res, next) {
  Promise.resolve()
  .then(function(){
  		console.log("some code")
  })
  .then(function () {
    Asdgasgsdg
  }).catch(next); // Errors will be passed to Express.
}); 




app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))


// here the first theen callback should console log to stdout however it does not, what happens in production when whole code blocks
// of work is errased just becausse of one error 