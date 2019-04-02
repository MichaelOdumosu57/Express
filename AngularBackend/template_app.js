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
const cors = require('cors')
app.use(compression())
app.use(cors())

const heroes = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
    

app.get('/api/heroes', function (req, res, next) {

	res.send(heroes)
});

app.get('/api/heroes/:id', function (req, res, next) {
    console.log(   typeof(   req.params.id   )   )
    for(   i of heroes   ){
        
        
        if(   i.id === +req.params.id   ){
            
            console.log(i)
            res.send(i)
            
            
        }
        
        
    }
});




app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
