const {Schema, model, ObjectId} = require('mongoose');
const User = require('../models/User');

const Test = new Schema({
    name: {type: String, required: true},
    dateCreate: {type: Date, default: Date.now},
    userCreatedId: { type: Schema.ObjectId, ref: 'User', required: true }
});

module.exports = model('Test', Test);
