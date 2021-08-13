
import sequelize from "@Database/index";



const Movies_Categories = sequelize.define( 'Movies_Categories', 
    {}, 
    { timestamps: false }
);



export default Movies_Categories;
