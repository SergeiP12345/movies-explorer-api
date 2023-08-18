const router = require('express').Router();

const {
  createMovie,
  getSavedMovie,
  deleteMovie,
} = require('../controllers/movies');

const {
  validateCreateMovie,
  validateMovieId,
} = require('../middlewares/validate');

module.exports = router;

router.post('/', validateCreateMovie, createMovie);

router.get('/', getSavedMovie);

router.delete('/:_id', validateMovieId, deleteMovie);
