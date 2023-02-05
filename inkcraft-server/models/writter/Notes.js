const mongoose = require('mongoose')

const NotesSchema = new mongoose.Schema({
    keywords: {
        type: Array,
    },

    note : {
        type : String,
    },

    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
}
)


module.exports = mongoose.model('Notes', NotesSchema)