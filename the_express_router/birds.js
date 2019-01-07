var express = require('express')
var router = express.Router()

router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  res.send("users here huh?")
})
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

router.put('/', function (req, res) {
  res.send('users here huh')
})


module.exports = router
