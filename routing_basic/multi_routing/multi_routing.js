
const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };            
     

app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res, next) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])




var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res, next) {
  res.send('Hello from D!')
})


app.use('/example/e', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res,next) {
  console.log('hold on')
    next()
}, function (req, res, next,err  ) {

  err = JSON.stringify(err, getCircularReplacer());
  res.send(err.message)
  next()
}, function (req, res, next) {


  res.send(req)
  
})



app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
