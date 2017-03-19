const config = require('../config/config');
const mongoose = require('mongoose');

mongoose.connect(config.DB_URL);

module.exports = {
	GAME: require('./Game.model'),
	USER: require('./User.model')
};