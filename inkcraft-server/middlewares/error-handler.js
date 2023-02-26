
const errorHandler = (err, req, res, next) => {
  const status = err.response && err.response.status;
  const message = err.message;

  res.status(status || 500).send(message);
};

module.exports = { errorHandler };



