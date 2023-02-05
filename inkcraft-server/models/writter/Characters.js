const mongoose = require('mongoose')

const CharacteresSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    type : {
        type : String,
        enum : ['physic', 'psychic']
    }
}
)


module.exports = mongoose.model('Characteres', CharacteresSchema)