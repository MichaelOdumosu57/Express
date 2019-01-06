
const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('root')
})

app.get('/sub_directory', function (req, res) {
  res.send('sub_directory')
})

//app.get('/ab?cd', function (req, res) {
//  res.send('ab?cd')
//})

//app.get('/ab+cd', function (req, res) {
//	  res.send('ab+cd')
//})

// app.get('/ab*cd', function (req, res) {
//   res.send('ab*cd')
// })

// app.get(/a/, function (req, res) {
//   res.send('/a/')
// })	 

app.get(/.*fly$/, function (req, res) {
	res.send('/.*fly$/')
})	 		

app.listen(port, () => console.log(`root_dir app listening on port ${port}!`))
