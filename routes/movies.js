const router = require('express').Router();

const MoviesController = require('../controllers/moviesController');

// Begin routes

router.get('/', MoviesController.index);
router.get('/releaseds', MoviesController.releaseds);
router.get('/upcoming', MoviesController.upcoming);
router.get('/new', MoviesController.new);
router.get('/:id', MoviesController.show);
router.get('/:id/edit', MoviesController.edit);
router.post('/', MoviesController.create);
router.post('/update', MoviesController.update);
router.post('/destroy', MoviesController.destroy);

// We have to export our changes
module.exports = router;