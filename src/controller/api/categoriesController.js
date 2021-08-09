
const { Category } = require('../../models');



async function index (req, res) {
    try {
        const result = await Category.findAll();
        return res.status(200).json(result);
    }catch(err) {
        return res.status(503).json(err);
    }
}



module.exports = {
    index
}
