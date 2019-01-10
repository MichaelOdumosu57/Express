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




// var promise = new Promise(function(resolve, reject) {
//   // do a thing, possibly async, then…
//   // throw new Error("catch me ")

//   if (false) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"))

//     // .then(function (){
    	
//     // },function(rej){
//     // 	console.log(rej)
//     // });

//   }
// });




app.get('/', function ( req, res, next) {
	// promise.then(function(a){
	// 	res.send(a)
	// }).catch(function(){
	// 	console.log(b)
	// 	next()
	// }) 
  console.error("thrown error")
  next()

		
	

});

app.use(function(req,res,next){

  res.send("handled with an async ")

})







app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
