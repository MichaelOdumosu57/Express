
const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]

app.get('/hang_request', function (req, res, next) {
  //no response method  
})


//download
app.get('/download', function (req, res, next) {
    // res.download(__dirname + '/report-12345.pdf');
    // res.download(__dirname + '/report-12345.pdf',__dirname +  '/report.pdf');
    res.download('/report-12345.pdf', 'report.pdf', function(err){
        if (err) {
          // Handle error, but keep in mind the response may be partially-sent
          res.send("I couldnt find the first error")
        } 
        else {
          console.log("the user got it:)")
        }
    });    
})

//end
app.get('/end', function (req, res, next) {
    // res.end();
  res.status(403).end();
});


//json & jsonp
app.get('/json', function (req, res, next) {
    // res.json(null);
    // res.json({ user: 'tobi' });
    // res.status(500).json({ error: 'message' });
    // res.json(500)
    // res.json(true)
    // res.json([1,2,3,4,5])
    // res.jsonp(null);
    // res.jsonp({ user: 'tobi' });
    res.status(500).jsonp({ error: 'message' });
             
});


//redirect

app.get('/redirects', function (req, res, next) {
    // res.redirect('/foo/bar');
    // res.redirect('https://nginx.org');
    // res.redirect(301, 'https://nginx.org');
    // console.log('../login')
    // res.redirect('../login');
    res.redirect('redir/');
});



app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
