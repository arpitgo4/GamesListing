
const passport = require('passport');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');

const User = require('../models').USER;

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeader(),
	secretOrKey: require('../config/config').JWT_SECRET_KEY
};

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
	//console.log('payload received', jwt_payload);
	const user = User.find({ id: jwt_payload.id }, (err, user) => {
		if(user) next(null, user);
		else next(null, false);
	});
});   

passport.use(strategy);