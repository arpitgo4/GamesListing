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
			res.send({ msg: 'Username/Password may be incorrect!', token: null, user: null });
		}
		const payload = { id: user.id };
		const token = jwt.sign(payload, config.JWT_SECRET_KEY);
		res.send({ msg: 'Login Successfull', token, user: user[0] });
	});
});

router.post('/register', (req, res, next) => {
	const { firstname, lastname, username, password } = req.body;
	User.find({ username }, (err, user) => {
		if(user.length > 0){
			res.send({ msg: 'User with this username already exists!!' });
		}else {
			new User({ firstname, lastname, username, password }).save((err) => {
				if(err){
					res.send({ msg: 'Error occured during registration!!' });
				}
				res.send({ msg: 'Registration successfull!', user: { firstname, lastname, username, password } });
			});
		}
	});
});

router.get('/hello', (req, res, next) => res.send({ msg: 'Hello, ExpressJS! '}));

router.get('/games', (req, res, next) => {
	Game.find({}, (err, games) => res.send(games));
});

module.exports = router;
