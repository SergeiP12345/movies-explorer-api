const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const {
  validateUserLogin,
  validateUserRegistration,
} = require('../middlewares/validate');
const DocumentNotFoundError = require('../errors/CastError');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post('/signin', validateUserLogin, login);

router.post('/signup', validateUserRegistration, createUser);
router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.use(() => {
  throw new DocumentNotFoundError('страница не найдена');
});

module.exports = router;
