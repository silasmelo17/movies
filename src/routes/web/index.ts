
import express from 'express'

import movies from '@Routes/web/movies';
import categories from '@Routes/web/categories';

import loadCategories from '@Middlewares/loadCategories';
import renderView from '@Middlewares/renderView';



const router = express.Router();

router.use(movies);
router.use(categories);

router.use(loadCategories);
router.use(renderView);



export default router;
