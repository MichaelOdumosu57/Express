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



app.get('/set', function (req, res, next) {
	 var settings = ''
	 var setting_array = [
							"case sensitive routing",
							"env",
							"etag",
							"jsonp callback name",
							"json escape",
							"json replacer",
							"json spaces",
							"query parser",
							"strict routing",
							"subdomain offset",
							"trust proxy",
							"views",
							"view cache",
							"view engine",
							"x-powered-by"
	 					  ]
	 var setting_length_max = 0					  

     for(settings_i of setting_array){
     	settings_i.length > setting_length_max ? setting_length_max =   settings_i.length  : null
     	// app.set(settings_i,true) dont do this unknown results but it will change things

     }	 					  
                  	              
     for(settings_i of setting_array){                  	              
     	settings += "\n" + settings_i + Array(    setting_length_max-settings_i.length+3  ).join(" ") + app.get(settings_i) 
	 }             

			  
		console.log(   settings   )
		res.send('check log ')
});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
