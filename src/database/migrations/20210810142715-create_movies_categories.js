'use strict';

async function up(queryInterface, Sequelize) {
    await queryInterface.createTable( "Movies_Categories", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        MovieId: {
            type: Sequelize.INTEGER,
            references: {
                model: "Movies",
                key: "id"
            }
        },
        CategoryId: {
            type: Sequelize.INTEGER,
            references: {
                model: "Categories",
                key: "id"
            }
        }
    });
}

async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable( "Movies_Categories" );
}


module.exports = {
    up,
    down
};
