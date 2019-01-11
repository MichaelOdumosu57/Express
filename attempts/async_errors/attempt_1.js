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


app.use("/",function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})    


app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))



// instead we get in the client if accessed from the search bar of a browser 
// Cannot GET /