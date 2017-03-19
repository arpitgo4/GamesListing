
const mongoose = require('mongoose');

const GameScehma = new mongoose.Schema({
	title: String,
	platform: String,
	score: Number,
	genre: String,
	editors_choice: String,
	created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', GameScehma);

