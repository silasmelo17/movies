
const { DataTypes } = require('sequelize');
const sequelize = require('../database/');


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


module.exports = CategoryModel;