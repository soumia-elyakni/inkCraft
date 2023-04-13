const mongoose = require('mongoose')

const StoriesSchema = new mongoose.Schema({
    title : {
        type : String,
        
    },

    description : {
        type : String

    },

    resume : {
        type : String,
        default : null
    },

    introduction : {
        type : String,
        default : null
    },

    periode : {
        type: String,
        default : null
    },

    state : {
        type : String,
        enum: ["en Cours", "Terminée"]  ,
        default : "en Cours"
    },
    categorie_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },

    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },

    langue_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Langues"
    },
})

module.exports = mongoose.model('Stories', StoriesSchema)