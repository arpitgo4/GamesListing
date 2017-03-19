
module.exports = (req, res, next) => {
	res.header('ACCESS-CONTROL-ALLOW_ORIGIN', '*');
	res.header('ACCESS-CONTROL-ALLOW-METHODS', 'GET,POST,PUT');
	res.header('ACCESS-CONTORL-ALLOW-HEADERS', 'Origin,X-Requested-With,Content-Type,Accept');
  	next();
};