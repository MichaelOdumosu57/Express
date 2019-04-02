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


app.param(['user','id'] ,function(req, res, next, id) {

  // try to get the user details from the User model and attach it to the request object  
  console.log('CALLED ONLY ONCE with ' + id)
  next()

},function(err,req,res,next,id){
	res.send(err)
});

app.get('/:user/:id', function (req, res, next) {
	console.log("you will see the param method react once")
	next('route')
});

app.get('/:user/:id', function (req, res, next) {
	res.send("it reacted once haha")
});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
