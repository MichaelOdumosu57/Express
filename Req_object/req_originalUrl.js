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

app.use('/admin', function(req, res, next) {  // GET 'http://www.example.com/admin/new'
  console.log("req.originalUrl",req.originalUrl); // '/admin/new'
  console.log("req.baseUrl",req.baseUrl); // '/admin'
  console.log("req.path",req.path); // '/new'
  next();
});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
