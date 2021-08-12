
import express from 'express';

import loadCategories from '@Middlewares/loadCategories';
import renderView from '@Middlewares/renderView';

import moviesController from '@Controllers/web/moviesController';



const router = express.Router();



router.get( '/movies/', moviesController.index );
router.get( '/movies/:slug', moviesController.get );
router.get( '/register/movie', moviesController.create );

router.use(loadCategories);
router.use(renderView);



export default router;
