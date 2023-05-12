const express = require('express')
const app = express()

require('dotenv').config();

const {PORT, MONGODB_URI} = process.env 

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})