
import { DataTypes } from 'sequelize';
import sequelize from '@Database/index';


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
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});


export default MovieModel;
