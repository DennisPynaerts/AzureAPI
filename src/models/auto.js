const mongoose = require('mongoose');

const autoSchema = new mongoose.Schema({
    autos: {
        merkNaam: String,
        land: String,
        modellen: {
            modelNaam: String,
            PI: Number,
            klasse: String,
            prijs: Number,
            bouwjaar: Number,
            handling: Number
        }
    }
}, {
    collection: 'Cars'
})


module.exports = mongoose.model('Cars', autoSchema);