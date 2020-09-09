const uuid = require('uuid-v4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('photos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        unique: true,
        defaultValue: () => uuid(),
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      thief_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'thiefs',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
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

  down: async (queryInterface) => queryInterface.dropTable('photos'),
};
