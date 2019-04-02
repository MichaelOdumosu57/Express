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




app.use(function ( err, req, res, next) {  
  res.send("the promise caught the error, its a database computing problem but for this error there is no queryDb")
})




app.get("/", function (req, res, next) {
  Promise.resolve()
  .then(function () {
    tasfgsg  
  }).catch(next); // Errors will be passed to Express.
}); 




app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))


// here the Promise goes to the callback, but its not an error handler if you remove the err arg, it will work 