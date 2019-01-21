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
	 var req_http_header_prop = ''
	 var req_http_header_prop_array = [
								"A-IM",
								"Accept",
								"Accept-Charset",
								"Accept-Encoding",
								"Accept-Language",
								"Accept-Datetime",
								"Access-Control-Request-Method",
								"Authorization",
								"Cache-Control",
								"Connection",
								"Content-Length",
								"Content-MD5",
								"Content-Type",
								"Cookie",
								"Date",
								"Expect",
								"Forwarded",
								"From",
								"Host",
								"HTTP2-Settings",
								"If-Match",
								"If-Modified-Since",
								"If-None-Match",
								"If-Range",
								"If-Unmodified-Since",
								"Max-Forwards",
								"Origin",
								"Pragma",
								"Proxy-Authorization",
								"Range",
								"Referer",
								"TE",
								"User-Agent",
								"Upgrade",
								"Upgrade-Insecure-Requests",
								"Via",
								"Warning"
	 					  ]
	 var req_http_header_prop_length_max = 0					  

     for(   req_http_header_prop_i of req_http_header_prop_array   ){
     	req_http_header_prop_i.length > req_http_header_prop_length_max ? req_http_header_prop_length_max =   req_http_header_prop_i.length  : null
     	// app.set(req_http_header_prop_i,true) dont do this unknown results but it will change things

     }	 					  
                  	              
     for(   req_http_header_prop_i of req_http_header_prop_array   ){                  	              
     	req_http_header_prop += "\n" + req_http_header_prop_i + Array(    req_http_header_prop_length_max-req_http_header_prop_i.length+seperator  ).join(" ") 


     	if(   typeof(   req[req_http_header_prop_i]   ) == 'object'   ){


     		req_http_header_prop += JSON.stringify(   req.get(req_http_header_prop_i),null,2   )


     	}


     	else{


     		req_http_header_prop += req.get(req_http_header_prop_i)


     	}
	 }     	
	console.log(   req_http_header_prop   )
	res.send(   'see debugger'   )
});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
