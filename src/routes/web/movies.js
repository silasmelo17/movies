
const express = require('express');
const router = express.Router();

const loadCategories = require('../../middlewares/loadCategories');
const renderView = require('../../middlewares/renderView');

const moviesController = require('../../controller/web/moviesController');



router.get( '/movies/', moviesController.index );
router.get( '/movies/:slug', moviesController.get );
router.get( '/register/movie', moviesController.create );

router.use(loadCategories);
router.use(renderView);



module.exports = router;
