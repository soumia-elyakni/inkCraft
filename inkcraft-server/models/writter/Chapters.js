const mongoose = require('mongoose')

const ChaptersSchema = new mongoose.Schema({
    paraphrase: {
        type: String,
    },

    resume : {
        type : String,
    },

    storie_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stories"
    }
}
)


module.exports = mongoose.model('Chapters', ChaptersSchema)