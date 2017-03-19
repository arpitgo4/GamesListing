const fs = require('fs');
const Game = require('../models').GAME;

const readData = (callback) => {
	fs.readFile(`${__dirname}/games_listing.csv`, (err, data) => {
		if(err) {
			console.log(err);
			return;
		}

		callback(data.toString());
	});
}

const convertToModels = (data) => {
	// spliting and slicing the header.
	const splittedLines = data.split('\n');
	const lines = splittedLines.slice(1, splittedLines.length);

	const games = lines.map(line => {
		const [ title, platform, score, genre, editors_choice ] = line.split(',');
		return new Game({ title, platform, score, genre, editors_choice });	
	});
	
	return games;
}

const removeAllGames = () => {
	Game.remove({}, (err) => {
		if(err){
			console.log(err);
			return;
		}
		console.log('All Records removed!!');
	});
}

const insertGames = (games) => {
	games.forEach(game => game.save());
}

readData((fileData) => {
	const games = convertToModels(fileData);
	removeAllGames();
	insertGames(games);
});


