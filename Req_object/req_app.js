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

app.get(['/','/*','/:param/:more_param(\\d+)'], function (req, res, next) {

	 var seperator = 5
	 var req_obj_prop = ''
	 var req_obj_prop_array = [
	 						"app",
	 						"baseUrl", //for routes only
	 						"cookies",
	 						"fresh",
	 						"hostname",
	 						"ip",
	 						"ips",
	 						"method",
	 						"originalUrl",
	 						"params",
	 						"path",
	 						"protocol",
	 						"query",
	 						"route",
	 						"secure",
	 						"signedCookies",
	 						"stale",
	 						"subdomains",
	 						"xhr"
	 					  ]
	 var req_obj_prop_length_max = 0					  

     for(   req_obj_prop_i of req_obj_prop_array   ){
     	req_obj_prop_i.length > req_obj_prop_length_max ? req_obj_prop_length_max =   req_obj_prop_i.length  : null
     	// app.set(req_obj_prop_i,true) dont do this unknown results but it will change things

     }	 					  
                  	              
     for(   req_obj_prop_i of req_obj_prop_array   ){                  	              
     	req_obj_prop += "\n" + req_obj_prop_i + Array(    req_obj_prop_length_max-req_obj_prop_i.length+seperator  ).join(" ") 


     	if(   typeof(   req[req_obj_prop_i]   ) == 'object'   ){


     		req_obj_prop += JSON.stringify(   req[req_obj_prop_i],null,2   )


     	}


     	else{


     		req_obj_prop += req[req_obj_prop_i]


     	}
	 }     	
	console.log(   req_obj_prop   )
	res.send(   'see debugger'   )
});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
