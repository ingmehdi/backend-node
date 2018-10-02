const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    login: String,
    email: String,
    password: String,
    role: String,

}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);