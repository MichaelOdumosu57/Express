
const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]

app.get('/[sample]', function (req, res, next) {
});

app.get('/hang_request', function (req, res, next) {
  //no response method  
})


//download
app.get('/download', function (req, res, next) {
    // res.download(__dirname + '/report-12345.pdf');
    // res.download(__dirname + '/report-12345.pdf',__dirname +  '/report.pdf');
    res.download('report-12345.pdf', 'report.pdf', function(err){
        if (err) {
          // Handle error, but keep in mind the response may be partially-sent
          console.log(err)
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
    res.json([1,2,3,4,5])
    // res.jsonp(null);
    // res.jsonp({ user: 'tobi' });
    // res.status(500).jsonp({ error: 'message' });
             
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

app.get("/redir",function(req,res,next){
    res.send("redirected!!")
})



app.get('/set/:ids', function (req, res, next) {

    if(req.params.ids == 'json'){

        console.log(req.params)
        res.set('Content-Type', 'application/json');
        res.send('<xml>some html</xml>');  


    }


    else{


        res.set('Content-Type', 'text/html');
        res.send('<h1>paragraph</h1>'); 


    }
    // res.set('Content-Type', 'text/html');
    // res.send('<h1>paragraph</h1>'); 
    // res.set({
    //   'Content-Type': 'text/plain',
    //   
      
    // });
    // res.send('<h1>paragraph</h1>');             
});

app.get('/sendFile/:name', function (req, res, next) {

  // var options = {
  //   root: __dirname + '/sendFile_options/',
  //   dotfiles: 'deny',
  //   headers: {
  //       'x-timestamp': Date.now(),
  //       'x-sent': true
  //   }
  // };

  // var fileName = req.params.name;
  // res.sendFile(fileName, options, function (err) {
  //   if (err) {
  //     console.log("file not found error",err)
  //     next("a problem finding the file");
  //   } else {
  //     console.log('Sent:', fileName);
  //   }
  // });


    var name = req.params.name
    mayViewFilesFrom(   name,res   )
      


    
});


    function  mayViewFilesFrom (yes, response){
      if (yes == "a.txt") {
        response.sendFile(__dirname + "/sendFile_options/" + yes);
      } 

      else {
        response.status(403).send("Sorry! You can't see that.");
      }
    }



app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
