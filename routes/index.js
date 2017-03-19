const express = require('express');
const path = require('path');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const Game = require('../models').GAME;
const User = require('../models').USER;

router.post('/login', (req, res, next) => {
	const { username, password } = req.body;
	User.find({ username, password }, (err, user) => {
		console.log(user);
		if(user.length === 0){
			res.send({ msg: 'Username/Password may be incorrect!', token: null, user: null });
			return;
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
			const user = new User({ firstname, lastname, username, password });
			user.save((err, user) => {
				if(err){
					res.send({ msg: 'Error occured during registration!!', user: null });
					return;
				}
				res.send({ msg: 'Registration successfull!', user: user });
			});
		}
	});
});

router.get('/hello', (req, res, next) => res.send({ msg: 'Hello, ExpressJS! '}));

router.get('/games', passport.authenticate('jwt', { session: false }), (req, res, next) => {
	Game.find({}, (err, games) => res.json(games));
});

module.exports = router;
