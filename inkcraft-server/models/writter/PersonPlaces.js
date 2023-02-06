const mongoose = require('mongoose')

const PersonPlacesSchema = new mongoose.Schema({
      personnage_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Personnages"
      },

      place_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Places"
    },

     relation : {
        type : String,
        enum : ['owner', "reisdent", "visitor", "worker"]
    },

})

module.exports = mongoose.model('PersonPlaces', PersonPlacesSchema)
