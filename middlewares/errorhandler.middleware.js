
const errorhandler = (err, req, res, next) => {
  res.status(err.status || 500);
  const error = req.app.get('env') === 'development' ? err : {};
  res.send({ message: err.message, error });
};

const pagenotfoundhandler = (req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
};

module.exports = {
	errorhandler,
	pagenotfoundhandler
}