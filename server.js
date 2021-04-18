const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT 

//require('dotenv/config')

//Middlewareja
app.use(cors())
app.use(bodyParser.json())

//Kytketään database projektiin
mongoose.connect( 
    process.env.DB_CONNECTION,
    { useNewUrlParser: true})
    const db = mongoose.connection
    db.on('error', (error) => console.error(error))
    db.once('open', () => console.log('Connected to db'))

app.use(express.json())

//Otetaan käyttöön routes-middleware
const henkilotRouter = require('./routes/henkilot')
app.use('/henkilot', henkilotRouter)

//Laitetaan appi käymään portilla
app.listen(PORT, () => console.log('Server running'))

alert(process.env.DB_CONNECTION + "connection")