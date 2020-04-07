const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  walker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  status: {
    pending: { type: Boolean, default: false},
    accepted: { type: Boolean, default: false},
    reject: { type: Boolean, default: false},
    done: { type: Boolean, default: false},
  },
  date: {
    type: Date
  },
  createdAt: {
    type: Number,
    default: Date.now() // Get a timestamp :)
  }
})

const requestModel = mongoose.model('request', requestSchema)
module.exports = requestModel
