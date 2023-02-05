const mongoose = require('mongoose')

const UsersLanguesSchema = new mongoose.Schema({
      user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
      },

      langue_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Langues"
    },
      
})

module.exports = mongoose.model('UsersLangues', UsersLanguesSchema)