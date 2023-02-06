const mongoose = require('mongoose')

const PersonCharactersSchema = new mongoose.Schema({
      personnage_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Personnages"
      },

      character_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Characteres"
    },
      
})

module.exports = mongoose.model('PersonCharacters', PersonCharactersSchema)
