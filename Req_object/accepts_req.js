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

	console.group('req accepts`')
		// Accept: text/html
		console.log(  "req.accepts('html')" , req.accepts('html')   )
		// => "html"

		// Accept: text/*, application/json
		console.log(  req.accepts('html')   )
		// => "html"
		console.log( "req.accepts('text/html')",  req.accepts('text/html')   )
		// => "text/html"
		console.log(  "req.accepts(['json', 'text']) " ,req.accepts(['json', 'text'])   )
		// => "json"
		console.log(  "req.accepts('application/json')",req.accepts('application/json')   )
		// => "application/json"

		// Accept: text/*, application/json
		console.log(  "req.accepts('image/png')",req.accepts('image/png')   )
		console.log(  "req.accepts('png'",req.accepts('png')   )
		// => undefined

		// Accept: text/*;q=.5, application/json
		console.log(  "req.accepts(['html', 'json'])",req.accepts(['html', 'json'])   )
		// => "json"	

		console.log(  "req.accepts('doda_protocol')",req.accepts('doda_protocol')   )	
	console.groupEnd()


	console.group('charsets')
		console.log("req.acceptsCharsets('utf8')",req.acceptsCharsets('utf8'))
		console.log("req.acceptsCharsets('ascii')",req.acceptsCharsets('ascii'))
		console.log("req.acceptsCharsets('buffer')",req.acceptsCharsets('buffer'))
		console.log("req.acceptsCharsets('gtech-9')",req.acceptsCharsets('gtech-9'))
	console.groupEnd()
	res.send('what did ')


	console.group('encoding')
		console.log("req.acceptsEncodings('gzip')",req.acceptsEncodings('gzip'))
		console.log("req.acceptsEncodings('toomab')",req.acceptsEncodings('toomab'))
		console.log("req.acceptsEncodings('deflate')",req.acceptsEncodings('deflate'))
		console.log("req.acceptsEncodings('br')",req.acceptsEncodings('br'))
	console.groupEnd()

	console.group('languages')
		console.log("req.acceptsLanguages('en')",req.acceptsLanguages('en'))
		console.log("req.acceptsLanguages('sp')",req.acceptsLanguages('sp'))
		console.log("req.acceptsLanguages('ab')",req.acceptsLanguages('ab'))
	console.groupEnd()

	console.group('')
	console.groupEnd()	

});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
