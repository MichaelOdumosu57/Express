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
	 var res_obj_prop = ''
	 var res_obj_prop_array = [
	 						"app",
	 						"headersSent",
	 						"locals"

	 					  ]
	 var res_obj_prop_length_max = 0					  

     for(   res_obj_prop_i of res_obj_prop_array   ){
     	res_obj_prop_i.length > res_obj_prop_length_max ? res_obj_prop_length_max =   res_obj_prop_i.length  : null
     	// app.set(res_obj_prop_i,true) dont do this unknown results but it will change things
     }	 					  
                  	              
     for(   res_obj_prop_i of res_obj_prop_array   ){                  	              
     	res_obj_prop += "\n" + res_obj_prop_i + Array(    res_obj_prop_length_max-res_obj_prop_i.length+seperator  ).join(" ") 


     	if(   typeof(   req[res_obj_prop_i]   ) == 'object'   ){


     		res_obj_prop += JSON.stringify(   res[res_obj_prop_i],null,2   )


     	}


     	else{


     		res_obj_prop += res[res_obj_prop_i]


     	}
	 }     	
	console.log(   res_obj_prop   )
	res.send(   'see debugger'   )
});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
