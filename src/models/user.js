const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String },
    permissionlevel: [{ type: String }]
}, {
    collation: 'users'
});

module.exports = mongoose.model('User', UserSchema);