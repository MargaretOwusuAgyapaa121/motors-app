const express = require('express')
require('dotenv').config()
const cors = require('cors')
const contactRoute = require('./routes/contactRoute')


const app = express()
const PORT=5000 || process.env.PORT

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/contact', contactRoute)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})