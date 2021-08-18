
import express from 'express'

import categories from '@Routes/categories';
import movies from '@Routes/movies';

import loadCategories from '@Middlewares/loadCategories';
import renderView from '@Middlewares/renderView';



const router = express.Router();

router.use( categories );
router.use( movies );

router.use(loadCategories);
router.use(renderView);



export default router;
