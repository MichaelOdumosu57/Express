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




var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['txt', 'html'],
  index: false,
  maxAge: '1d',
  fallthrough: false,
  redirect: false,
  lastModified:false,
  redirect:true,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options))
app.get('/', function (req, res, next) {
  res.send("HEllo world")
});

app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
