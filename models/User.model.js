
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	username: String,
	password: String,
	created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);