const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const user = mongoose.model('users', userSchema);
module.exports = user;