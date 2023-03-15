'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Absensi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Absensi.init({
    user_id: DataTypes.INTEGER,
    check_in: DataTypes.TIME,
    check_out: DataTypes.TIME,
    date_now: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Absensi',
  });
  return Absensi;
};