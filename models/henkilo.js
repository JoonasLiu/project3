const mongoose = require('mongoose')

//Luodaan henkilö-skeema
const henkiloSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    whyHyva: {
        type: String,
        required: true
    },
    addDate: {
        type: Date,
        required: true,
        default: Date.now
    }

})

module.exports = mongoose.model('Henkilo', henkiloSchema)