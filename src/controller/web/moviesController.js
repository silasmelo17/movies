
const axios = require('axios');
const data = require('./movies.json');



async function index( req, res, next ) {
    res.body = {
        view: 'movies',
        title: "Filmes",
        data
    };

    return next();
}

async function get( req, res, next ) {
    const { slug } = req.params;

    const movie = data.find( value => value.slug === slug );

    res.body = {
        view: 'player',
        title: movie.name,
        ...movie,
    };
    
    return next();
}

async function create( req, res, next ) {
    res.body = { 
        view: 'register_movie',
        title: "Register"
    };

    return next();
}



module.exports = {
    index,
    get,
    create
}
