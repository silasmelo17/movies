'use strict';



async function up (queryInterface, Sequelize) {
    return queryInterface.createTable( 'Categories', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
}

async function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Categories');
}



module.exports = {
    up,
    down
};
