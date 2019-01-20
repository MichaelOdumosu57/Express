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
const required_dir = path.join(process.env.HOME, 'My_Computer/NVM/NODE/MINI_PROJECTS/PIPE_STREAM')
const circular_replacer = require(required_dir +'/circular_replacer.js')
app.use(compression())
var admin = express();



admin.on('mount', function (parent) {
  console.log('Admin Mounted');
  console.log(circular_replacer)
  console.log(        parent.toString()      ); // refers to the parent app

});


admin.get('/get',function(req,res,next){
	console.log(admin.get('title'))
})

admin.get('/', function (req, res) {
  console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
  res.send('Admin Homepage');
});

var secret = express();
secret.get('/', function (req, res) {
  console.log(secret.mountpath); // /secr*t
  res.send('Admin Secret');
});

admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin); // load the 'admin' router on '/adm*n' and '/manager', on the parent app







app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
