const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    CartItems: Number
});

const user = mongoose.model('users', userSchema);
module.exports = user;