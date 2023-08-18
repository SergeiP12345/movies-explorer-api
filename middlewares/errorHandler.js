const UnhandledError = require('../errors/UnhandledError');

module.exports = (err, req, res, next) => {
  const code = err.code || UnhandledError.code;
  const message = code === UnhandledError.code ? 'Внутренняя ошибка сервера' : err.message;
  res.status(code).send({ message });

  next();
};
