const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    first_name : {
        type : String,
        
    },

    last_name : {
        type : String

    },

    email : {
        type : String
    },

    password : {
        type : String
    },

    role_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roles"
    },

    cin_number : {
        type : String
    }
})

module.exports = mongoose.model('Users', UsersSchema)