
import sequelize from "@Database/index";
import { DataTypes } from "sequelize";



const Movies_Categories = sequelize.define( 'Movies_Categories', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
    }, 
    { timestamps: false }
);



export default Movies_Categories;
