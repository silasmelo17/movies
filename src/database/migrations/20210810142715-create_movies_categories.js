'use strict';

async function up(queryInterface, Sequelize) {
    await queryInterface.createTable( "Movies_Categories", {
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
