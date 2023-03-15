'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reimbursement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reimbursement.init({
    user_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    receipt: DataTypes.STRING,
    status_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reimbursement',
  });
  return Reimbursement;
};