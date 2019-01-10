
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))	
app.get('/', (req, res) => res.send('Hello World!'))
console.log(__dirname + '/top_lev')
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
