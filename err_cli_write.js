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

app.get('/', function (req, res, next) {
	res.download('/report-12345.pdf', 'report.pdf');
},errorHandler);




		function errorHandler (err, req, res, next) {
		  if (res.headersSent) {
		    console.log("i gave the client a corrrupted resource")
		    // hope client makes a different request,prepare server to do things differently
		  }
		  res.status(500)
		  res.render('error', { error: err })
		} 

app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
