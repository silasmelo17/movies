'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', [
            { name: 'Animação' },
            { name: 'Ação' },
            { name: 'Romance' },
            { name: 'Drama' },
            { name: 'Fantasia' },
            { name: 'Aventura' },
            { name: 'Comédia' },
            { name: 'Ficção científica' },
            { name: 'Lgbt' },
            { name: 'Épico' }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('People', null, {});
    }
};
