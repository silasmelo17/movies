
const axios = require('axios');



async function loadCategories( req, res, next ) {
    const { body } = res;
    const { data:categories } = await axios.get( 'http://localhost:3000/api/categories');

    res.body = {
        ...body,
        categories
    };

    next();
}



module.exports = loadCategories
