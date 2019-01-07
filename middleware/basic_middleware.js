const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data

// var myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }
// app.use(myLogger)
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

//////////////////////////////////////////////////////////////////////

var requestTime = function (req, res, next) {
  req.requestTime = Date()
  next()
}

app.use(requestTime)


app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})


app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
