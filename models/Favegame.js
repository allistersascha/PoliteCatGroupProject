// imports mongoose module 

const mongoose = require('mongoose')


// sets up the structure of the data that is saved to MongoDB collection

const FaveGameSchema = new mongoose.Schema({
  Game: {
    type: String,
    required: true,
  },
  boardGame: {
    type: Boolean,
  },
  videoGame: {
    type: Boolean,
  },
 cardGame: {
    type: Boolean,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('FaveGame', FaveGameSchema)


