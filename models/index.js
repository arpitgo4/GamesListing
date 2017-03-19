const config = require('../config');
const mongoose = require('mongoose');

mongoose.connect(config.DB_URL);

module.exports = {
	GAME: require('./Game.model')
};