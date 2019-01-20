

const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(   '/top_lev', express.static(   path.join(   __dirname,'top_lev', 'sub_lev_acc'   )   )   )
app.get('/top_lev', (req, res) => res.send('Hello World!'))
console.log(     __dirname )
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
