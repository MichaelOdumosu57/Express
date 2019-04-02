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
const router = express()
app.use(compression())

app.get('/app/locals', function (req, res, next) {
	// app.locals.email = 'hey@hmail.com'
	res.send(app.locals)
});



router.get('/mountpath', function (req, res, next) {
	// app.locals.email = 'hey@hmail.com'
	res.send(router.mountpath)
});

app.use('/router', router); // mount the sub app






app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
