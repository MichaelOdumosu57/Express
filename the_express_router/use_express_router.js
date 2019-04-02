const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data
const birds = require('./birds')
const router_skip = require('./router_skip')


app.use('/birds/:id', birds)
app.use('/router_skip', router_skip, function (req, res,next) {
  res.sendStatus(404)
})


app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
