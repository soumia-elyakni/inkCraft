const mongoose = require('mongoose')

const LanguesSchema = new mongoose.Schema({
    name: {
        type: String,
    }
}
)


module.exports = mongoose.model('Langues', LanguesSchema)