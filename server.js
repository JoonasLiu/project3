const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

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

//Laitetaan appi käymään localhost portilla 3000
app.listen(3000, () => console.log('Server running'))