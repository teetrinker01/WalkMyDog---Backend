const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  walker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  rating: {
    type: Number,
  },
  createdAt: {
    type: Number,
    default: Date.now() // Get a timestamp :)
  }
})

const ratingModel = mongoose.model('rating', ratingSchema)
module.exports = ratingModel
