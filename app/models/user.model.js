const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    surname: String,
    role: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);