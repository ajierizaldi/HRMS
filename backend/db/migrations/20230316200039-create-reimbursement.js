'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reimbursements', {
      reimbursement_id: {
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
      tanggal: {
        type: Sequelize.DATE
      },
      balance: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('reimbursements');
  }
};