
const { DataTypes } = require('sequelize');
const sequelize = require('../database');


const MovieModel = sequelize.define( 'Movie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 2021
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    thumb: {
        type: DataTypes.STRING,
        allowNull: false
    },
    src: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });


module.exports = MovieModel;