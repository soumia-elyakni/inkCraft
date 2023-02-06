const mongoose = require('mongoose')

const StorieCategoriesSchema = new mongoose.Schema({
      storie_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stories"
      },

      categorie : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    }

})

module.exports = mongoose.model('StorieCategories', StorieCategoriesSchema)
