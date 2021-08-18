
import express from 'express';

import categoriesController from '@Controllers/categoriesController';



const router = express.Router();

router.get( '/category/:id', categoriesController.index );



export default router;
