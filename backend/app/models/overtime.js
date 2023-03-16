'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class overtime extends Model {
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
  overtime.init({
    overtime_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    status: DataTypes.ENUM('pending', 'approved', 'rejected')
  }, {
    sequelize,
    modelName: 'overtime',
  });
  return overtime;
};