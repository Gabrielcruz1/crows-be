const express = require('express')
const app = express()
const PORT = 4006

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/hello', (req, res) => {
    res.send('<h1>Different page</h1>')
})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})