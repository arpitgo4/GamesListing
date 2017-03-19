const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cluster = require('cluster');
const passport = require('passport');
require('./middlewares/passport.middleware');

if(cluster.isMaster)   
	require('./config/LoadMongo');  

const index = require('./routes/index');

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(passport.initialize());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('./middlewares/cors.middleware'));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', index);
app.use('/', (req, res, next) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

// catch 404 and forward to error handler
app.use(require('./middlewares/errorhandler.middleware').pagenotfoundhandler);

// error handler
app.use(require('./middlewares/errorhandler.middleware').errorhandler);

module.exports = app;
