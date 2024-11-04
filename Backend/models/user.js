const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  dateOfBirth: {
    type: Date,
    required: false,
  },
  interests: {
    type: [String], // Array of strings to allow multiple options
    required: false,
  },
  about: {
    type: String,
    required: false,
  },
  profilePicture: {
    type: String, // Store the image URL or path
    required: false,
  }
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
