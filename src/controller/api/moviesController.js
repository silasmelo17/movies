
const {Movie} = require('../../models');



async function create( req, res ) {
    const { name, description, duration, year, slug, thumb, src } = req.body;

    try{
        const movie = await Movie.create({
            name, description,
            duration, year, slug,
            thumb, src,
        });
    
        return res.status(201).json(movie);
    }catch(err) {
        return res.status(503).json(err);
    }
}

async function read( req, res ) {
    try{
        const data = await Movie.findAll();       
        return res.status(200).json(data);
    } catch( err ) {
        return res.status(503).json({
            error: "Não foi possível retornar os filmes",
            ...err
        });
    }
}

async function update(req,res) {
    
}



module.exports = {
    create,
    read,
    update
}
