const router = require('express').Router();
const { updateUser, getUser } = require('../controllers/users');
const {
  validateUserUpdate,
  validateUserInfo,
} = require('../middlewares/validate');

module.exports = router;

router.patch('/me', validateUserUpdate, updateUser);

router.get('/me', validateUserInfo, getUser);
