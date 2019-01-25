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
	var options = {
			domain: '.example.com',
			path: '/admin',
			secure: true,
			expires: new Date(Date.now() + 900000),			
			httpOnly: true,
			items: [1,2,3]
	}

	res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true, expires: new Date(Date.now() + 900000) });
	res.cookie('rememberme', '1', { maxAge:  900000}, {httpOnly: true });	//it can take several objects for the obj parameter
	res.cookie('example','2',options)
	res.clearCookie('example', options);

	//Default encoding
	res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com',{domain:'example.com'});

	//Custom encoding
	res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com',{domain:'example.com', encode: String});		
	res.send("look at the header")
});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
