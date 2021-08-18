
import express from 'express';

import categoriesControllerAPI from '@Controllers/api/categoriesController/index';

import validateQuery from '@Middlewares/validateQuery';



const router = express.Router();

router.get( '/api/categories', categoriesControllerAPI.findAll );
router.get( '/api/category/:id', validateQuery, categoriesControllerAPI.findByCategory );



export default router;
