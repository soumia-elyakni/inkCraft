const mongoose = require('mongoose')

const PersonnagesSchema = new mongoose.Schema({
    name : {
        type : String,
        
    },

    role : {
        type : String

    },

    impact : {
        type : String
    },

    type : {
        type : String,
        enum: ['principale', 'secondaire']
    },

    storie_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stories"
    },

    objectif : {
        type : String
    },

    objectif_motifs : {
        type : String
    },

    obstacles : {
        type : String
    },

    birth_place : {
        type : String
    },

    birth_date : {
        type : Date
    },

    gendre : {
        type : String, 
        enum : ['feminin' , 'masculin']
    }
})

module.exports = mongoose.model('Personnages', PersonnagesSchema)