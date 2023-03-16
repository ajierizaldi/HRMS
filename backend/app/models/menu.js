'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  menu.init({
    menu_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    role: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'menu',
  });
  return menu;
};