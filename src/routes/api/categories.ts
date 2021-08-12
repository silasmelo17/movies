
import express from 'express';

import categoriesControllerAPI from '@Controllers/api/categoriesController';



const router = express.Router();

router.get( '/api/categories', categoriesControllerAPI.index );



export default router;
