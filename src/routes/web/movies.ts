
import express from 'express';

import moviesController from '@Controllers/web/moviesController';



const router = express.Router();

router.get( '/movies/', moviesController.index );
router.get( '/movies/:slug', moviesController.get );
router.get( '/register/movie', moviesController.create );



export default router;
