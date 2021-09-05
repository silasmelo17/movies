
import express from 'express'

import categories from '@Routes/categories';
import movies from '@Routes/movies';
import midias from '@Routes/midias';

import loadCategories from '@Middlewares/loadCategories';
import renderView from '@Middlewares/renderView';



const router = express.Router();

router.use( categories );
router.use( movies );
router.use( midias );

router.use(loadCategories);
router.use(renderView);



export default router;
