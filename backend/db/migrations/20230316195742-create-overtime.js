'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('overtimes', {
      overtime_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'user_id'
        }
      },
      reason: {
        type: Sequelize.STRING
      },
      tanggal: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM('pending', 'approved', 'rejected')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('overtimes');
  }
};