
import { Options, Sequelize } from 'sequelize';
import dbConfig from '@Config/db.config';



const sequelize = new Sequelize(dbConfig as Options);



export default sequelize;
