const mongoose = require('mongoose')

const PlacesSchema = new mongoose.Schema({
    name : {
        type : String,
        
    },

    etat : {
        type : String,
        enum: ['old', 'usable']

    },

    confident : {
        type : String,
        enum: ['public', 'private']
    },

    type : {
        type : String,
    },

    description : {
        type : String
    },

    storie_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stories"
    }

})

module.exports = mongoose.model('Places', PlacesSchema)