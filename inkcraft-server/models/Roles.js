const mongoose = require('mongoose')

const RolesSchema = new mongoose.Schema({
    name: {
        type: String,
    }
}
)


module.exports = mongoose.model('Roles', RolesSchema)