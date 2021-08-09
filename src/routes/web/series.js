

const express = require('express');
const router = express.Router();

const serieController = require('../../controller/web/serieController');



router.get( '/series/:name/:season/:episode', serieController.index );



module.exports = router;
