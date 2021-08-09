
const express = require('express');
const router = express.Router();

const categoriesControllerAPI = require('../../controller/api/categoriesController');



router.get( '/api/categories', categoriesControllerAPI.index );



module.exports = router;
