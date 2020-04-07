const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Dog Name is required']
  },
  breed: {
    type: String,
    required: true,
  },
  size:{
    type: Array,
    enum: ['Small', 'Medium', 'Large'],
    required: true,
  },
  goodwith:{
    type: Array,
    enum: ['Children', 'Cats', 'Dogs'],
    required: true,
  },
  character:{
    type: Array,
    enum: ['Active', 'Laid back', 'Lazy', 'Obedient', 'Wild']
  },
  days: {
    monday: { type: Boolean, default: false},
    tuesday: { type: Boolean, default: false},
    wednesday: { type: Boolean, default: false},
    thursday: { type: Boolean, default: false},
    friday: { type: Boolean, default: false},
    saturday: { type: Boolean, default: false},
    sunday: { type: Boolean, default: false}
  },
  birthDate: {
    type: Date,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  rating: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'rating'
  },
  img: {
    type: Array
  }
  createdAt: {
    type: Number,
    default: Date.now() // Get a timestamp :)
  }
})

const userModel = mongoose.model('dog', userSchema)
module.exports = userModel
