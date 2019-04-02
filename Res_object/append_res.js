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
	res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
	res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
	res.append('Warning', '199 Miscellaneous warning');
	res.set()
	res.send('look at the header')
});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))


