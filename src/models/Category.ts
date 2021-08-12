
import { DataTypes } from 'sequelize';
import sequelize from '@Database/index';



const CategoryModel = sequelize.define( 'Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });



export default CategoryModel;
