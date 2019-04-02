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




app.use(function ( err,req, res, next) {
  res.send("the promise caught the error, its a database computing problem but for this error there is no queryDb")
})

app.get('/', function (req, res, next) {
  // do some sync stuff
  queryDb()
    .then(function (data) {
      // handle data
      return makeCsv(data)
    })
    .then(function (csv) {
      res.send("completed db computing heres what you need client ")
    })
    .catch(next)
    
})






app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))


//very strange if you remove the err arg in the app.use here it really handles this strange logic execption this is a security flaw
// if query_db is not defined node should make an uncaught exception

