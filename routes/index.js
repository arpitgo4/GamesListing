const express = require('express');
const path = require('path');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const Game = require('../models').GAME;
const User = require('../models').USER;

router.post('/login', (req, res, next) => {
	const { username, password } = req.body;
	User.find({ username, password }, (err, user) => {
		if(!user){
			res.send({ msg: 'Username/Password may be incorrect!'});
		}
		console.log('user', config.JWT_SECRET_KEY);
		const payload = { id: user.id };
		const token = jwt.sign(payload, config.JWT_SECRET_KEY);
		res.send({ msg: 'Login Successfull', token, user: user[0] });
	});
});

router.post('/register', (req, res, next) => {

});

router.get('/hello', (req, res, next) => res.send({ msg: 'Hello, ExpressJS! '}));

router.get('/games', (req, res, next) => {
	Game.find({}, (err, games) => res.send(games));
});

module.exports = router;
