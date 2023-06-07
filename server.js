const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

require('dotenv').config();
require("./config/db.connection")

const {PORT, MONGODB_URI} = process.env 

//Controllers 
const authController = require("./controllers/auth");

//MIDDLEWARE
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use("/auth", authController);


// app.get('/', (req, res) => {
//     res.send('<h1>Hello World</h1>')
// })

app.all("/*", (req, res) => {
    return res.status(404).json({ error: "No resource found" });
});

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})