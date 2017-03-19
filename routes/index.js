const express = require('express');
const path = require('path');
const router = express.Router();

const Game = require('../models').GAME;

router.get('/hello', (req, res, next) => res.send({ msg: 'Hello, ExpressJS! '}));

router.get('/games', (req, res, next) => {
	Game.find({}, (err, games) => res.send(games));
});

module.exports = router;
