const {Schema, model, ObjectId} = require('mongoose');

const User = new Schema({
  login: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  lastName: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

module.exports = model('User', User);
