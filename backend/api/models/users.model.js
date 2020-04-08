const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  profileimages: {
    type: Array,
  },
  dog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'dog'
  },
  request: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'request'
  },
  createdAt: {
    type: Number,
    default: Date.now() // Get a timestamp :)
  }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
