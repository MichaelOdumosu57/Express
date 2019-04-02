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
	
	res.format({
	  'text/plain': function(){
	  	console.log(   req.accepts(   res.get(   'Content-Type'   )   )   )
	    res.send('hey');
	  },

	  'text/html': function(){
	  	console.log(   req.accepts(   res.get(   'Content-Type'   )   )   )
	  	console.log(res.get('Content-Type'))
	    res.send('<h1>hey</h1>');
	  },

	  'application/json': function(){
	  	console.log(   req.accepts(   res.get(   'Content-Type'   )   )   )
	  	console.log(res.get('Content-Type'))
	    res.send({ message: 'hey' });
	  },

	  'default': function() {
	    // log the request and respond with 406	    
	    res.status(406).send('Not Acceptable');
	  }
	});	


//use one or the other
	// res.format({
	//   text: function(){
	//     res.send('hey');
	//   },

	//   html: function(){
	//     res.send('<h1>hey</h1>');
	//   },

	//   json: function(){
	//     res.send({ message: 'hey' });
	//   }
	// });
});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
