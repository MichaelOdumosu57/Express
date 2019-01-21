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




app.get('/',function(req,res,next){
	// parse header from request
	var range = req.range(1000)

	console.log(range)
	// the type of the range
	if (range.type === 'bytes') {
	  // the ranges
	  range.forEach(function (r) {
	    // do something with r.start and r.end	    
	  })
	}	
})

var greet = express.Router();

greet.get('/jp', function (req, res) {
  console.log(req.baseUrl); // /greet
  res.send('Konichiwa!');
});

// app.use('/greet', greet); 
app.use(['/gre+t', '/hel{2}o'], greet);



app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
