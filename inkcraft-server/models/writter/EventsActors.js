const mongoose = require('mongoose')

const EventsActorsSchema = new mongoose.Schema({
      personnage_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Personnages"
      },

      event_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Events"
    },
      
})

module.exports = mongoose.model('EventsActors', EventsActorsSchema)
