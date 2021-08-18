
import express from 'express';

import movieApiController from '@Controllers/api/moviesController/index';

import validateQuery from '@Middlewares/validateQuery';



const router = express.Router();

router.get( '/api/movies', validateQuery, movieApiController.findAll );
router.get( '/api/movies/:slug', movieApiController.findOne );

router.post( '/api/movies', movieApiController.create );



export default router
