
const Category = require('./Category');
const Movie = require('./Movie');



Category.belongsToMany( Movie, { through: "Movies_Categories"} );
Movie.belongsToMany( Category, { through: "Movies_Categories"} );



module.exports = {
    Category,
    Movie,
}
