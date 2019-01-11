var express = require('express')
var router = express.Router()


	

router.use(function (req, res, next) {
  if (req.headers['x-auth']) return next('router')
  next()
})

router.use(function(res,req,next){
  
  next((a,b) => {
  	a+b
  })
  
})

router.get('/', function (req, res) {
  res.send('hi, user!')
})



module.exports = router 


