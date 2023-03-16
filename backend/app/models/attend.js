'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attend extends Model {
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
  attend.init({
    attend_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    tanggal: DataTypes.DATE,
    check_in: DataTypes.TIME,
    check_out: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'attend',
  });
  return attend;
};