
import express from 'express';

import moviesController from '@Controllers/moviesController/index';



const router = express.Router();

router.get( '/movies', moviesController.findAll );
router.get( '/movies/:slug', moviesController.findBySlug );
router.get( '/register/movie', moviesController.create );



export default router;
