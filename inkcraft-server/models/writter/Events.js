const mongoose = require('mongoose')

const EventsSchema = new mongoose.Schema({
    title: {
        type: String,
    },

    text : {
        type : String,
    },

    date : {
        type : Date,
    },

    chapter_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chapters"
    },
    place_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Places"
    }
}
)


module.exports = mongoose.model('Events', EventsSchema)