const fs = require('fs');
const Game = require('../models').GAME;

fs.readFile(`${__dirname}/games_listing.csv`, (err, data) => {
	if(err) {
		console.log(err);
		return;
	}

	console.log(data.toString());
});