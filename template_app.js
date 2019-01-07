
const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')

app.get('/[sample]', function (req, res, next) {
});





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
