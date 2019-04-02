
const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]


var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('header workd')
  next()
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the content will be sent by the next function ...')
  next()
}, function (req, res) {
  res.sendFile(__dirname + '/template.html')
})


app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
