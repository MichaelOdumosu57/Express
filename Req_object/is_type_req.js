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

	req.setEncoding('utf8')
	req.on('data',(chunk) =>{
		req.body += chunk
		console.log(req.body)
	})


	console.group('Content-Type: text/html; charset=utf-8')
		console.log(   "req.is('html');",   req.is('html')    )      // => 'html'
		console.log(   "req.is('text/html')",   req.is('text/html')    )  // => 'text/html'
		console.log(   "req.is('text/*');",   req.is('text/*')    )    // => 'text/*'
	console.groupEnd()


	console.group('Content-Type is application/json')
		console.log(   "req.is('json');", req.is('json')   )              // => 'json'
		console.log(   "req.is('application/json')", req.is('application/json')   )  // => 'application/json'
		console.log(   "req.is('application/*');", req.is('application/*')   )     // => 'application/*'
	console.groupEnd()


	console.group('Content-Type is undefined')
		console.log(   "req.is('html');",   req.is('html')    )  
		console.log(   "req.is(undefined);",   req.is(undefined)    )  
	console.groupEnd()


	console.group('')
	console.groupEnd()	

	res.send('req.istype')
});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
