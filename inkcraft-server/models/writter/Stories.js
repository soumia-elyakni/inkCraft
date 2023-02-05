const mongoose = require('mongoose')

const StoriesSchema = new mongoose.Schema({
    title : {
        type : String,
        
    },

    description : {
        type : String

    },

    resume : {
        type : String
    },

    introduction : {
        type : String
    },

    periode : {
        type: Date,
    },

    state : {
        type : String
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