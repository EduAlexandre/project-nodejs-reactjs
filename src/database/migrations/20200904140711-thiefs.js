const uuid = require('uuid-v4');

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('thiefs', {

      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        unique: true,
        defaultValue: () => uuid(),
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: Sequelize.STRING,

      },
      actingarea: {
        type: Sequelize.STRING,

      },
      obs: {
        type: Sequelize.TEXT,

      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('thiefs');
  },
};
