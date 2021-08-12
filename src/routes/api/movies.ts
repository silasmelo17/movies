
import express from 'express';

import movieApiController from '@Controllers/api/moviesController/index';

const router = express.Router();



router.get( '/api/movies', movieApiController.findAll );
router.get( '/api/movies/:slug', movieApiController.findOne );

router.post( '/api/movies', movieApiController.create );



export default router
