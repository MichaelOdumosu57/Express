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
	// res.attachment();
	// Content-Disposition: attachment

	res.attachment('path/to/logo.jpg');
	//Content-Dispotion
	// Content-type
	res.send('comment one or another')
});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))


