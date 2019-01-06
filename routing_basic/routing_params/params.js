
const express = require('express')
const app = express()
const port = 3000


// app.get('/users/:userId/books/:bookId', function (req, res) {  
//   res.send(req.params)
// })		

// app.get('/flights/:from-:to', function (req, res) {  
//   res.send(req.params)
// })	

		// app.get('/plantae/:genus.:species', function (req, res) {  
		//   res.send(req.params)
		// })

		app.get('/user/:userId(\\d+)', function (req, res) {  
		  res.send(req.params)
		})				

app.listen(port, () => console.log(`root_params app listening on port ${port}!`))
