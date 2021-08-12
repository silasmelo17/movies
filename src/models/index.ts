
import Category from '@Models/Category';
import Movie from '@Models/Movie';
import Movies_Categories from '@Models/Movies_Categories';



Movie.belongsToMany( Category, { through: Movies_Categories  } );
Category.belongsToMany( Movie, { through: Movies_Categories } );



const models = {
    Category,
    Movie,
    Movies_Categories
}



export default models
