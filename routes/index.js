const express = require('express');
const path = require('path');
const router = express.Router();

const Game = require('../models').GAME;

router.get('/hello', (req, res, next) => res.send({ msg: 'Hello, ExpressJS! '}));

module.exports = router;
