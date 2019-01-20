
const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
// var bodyParser = require('body-parser');
// var multer = require('multer'); // v1.0.5
// var upload = multer(); // for parsing multipart/form-data
// const compression = require('compression')
// app.use(compression())

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

// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
      res.send('Update the book')


    console.log(req.body)

    // Get the data as utf8 strings.
    // If an encoding is not set, Buffer objects will be received.
    req.setEncoding('utf8');

    // Readable streams emit 'data' events once a listener is added
    req.on('data', (chunk) => {
      setImmediate(() => {
          req.body += chunk;
      });
    });

    req.on('end', () => {
        setImmediate(() => {  
            console.log(req.body)

            req.body = req.body == undefined ? "nothing here" :  req.body
            const data = JSON.stringify(req.body, getCircularReplacer());    
            const needed_file = __dirname + '/message.txt'            
            fs.open(needed_file, 'w+', (err, fd) => {


                if (err){


                    throw err;


                } 

                else{


                    console.log("file opened")            
                    let buf = Buffer.from(data)
                    pos = 0,offset = 0,
                    len = buf.length;            
                    fs.write(fd, buf, offset, len, pos,
                        (err,bytes,buff) => {
                        if(err){  
                            fs.close(fd, (err) => {
                                if (err){
                                    throw err;
                                } 

                                else{
                                  console.log("file closed")
                                } 


                            });
                        } 


                        else{  
                            fs.close(fd, (err) => {
                                if (err){
                                    throw err;
                                } 

                                else{
                                  console.log("file closed")
                                } 


                            });
                        }       

                                                     
                    });     
                

                }

                fs.close(fd, (err) => {
                    if (err){
                        throw err;
                    } 

                    else{
                      console.log("file closed")
                    } 


                });        



            });            
        });
      

    });




  


  })  





app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))


