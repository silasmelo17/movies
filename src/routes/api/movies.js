
const express = require('express');
const router = express.Router();

const movieApiController = require('../../controller/api/moviesController');



router.get( '/api/movies', movieApiController.read );
router.post( '/api/movies', movieApiController.create );
router.put( '/api/movies/:id', movieApiController.update );



module.exports = router
