const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    modellen: {
        modelNaam: String,
        PI: Number,
        klasse: String,
        prijs: Number,
        bouwjaar: Number,
        handling: Number
    }
}, {
    collection: 'Modellen'
})


module.exports = mongoose.model('Modellen', modelSchema);