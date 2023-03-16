'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.overtime, {
        foreignKey: 'user_id',
        as: 'overtime_user'
      })
      this.hasMany(models.attend, {
        foreignKey: 'user_id',
        as: 'attend_user'
      })
      this.hasMany(models.reimbursement, {
        foreignKey: 'user_id',
        as: 'reimbursement_user'
      })
    }
  }
  user.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('employee', 'hr')
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'users'
  });
  return user;
};