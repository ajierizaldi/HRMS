'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reimbursement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'users'
      })
    }
  }
  reimbursement.init({
    reimbursement_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    tanggal: DataTypes.DATE,
    balance: DataTypes.INTEGER,
    description: DataTypes.STRING,
    status: DataTypes.ENUM('pending', 'approved', 'rejected')
  }, {
    sequelize,
    modelName: 'reimbursement',
  });
  return reimbursement;
};