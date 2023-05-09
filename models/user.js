// username, age, location
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String
  },
  age: {
    type: Number,
    required: true,
    min: 13
  }
})

module.exports = mongoose.model('User', userSchema)