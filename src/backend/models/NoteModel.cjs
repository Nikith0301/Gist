const mongoose = require('mongoose')

const noteSchema=new mongoose.Schema({
    text:{
        type:String
    },
    user_id: {
        type: String,
        // required: true
      }
}) 

const Notes= mongoose.model('notes',noteSchema)

module.exports = Notes;