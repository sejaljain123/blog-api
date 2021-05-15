const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, function (error, encrypted) {
    user.password = encrypted;
    next();
  });
});

module.exports = mongoose.model('user', userSchema);
