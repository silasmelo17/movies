
import express from 'express';

import categories from '@Routes/api/categories';
import movies from '@Routes/api/movies';



const router = express.Router();

router.use(categories);
router.use(movies);



export default router;
