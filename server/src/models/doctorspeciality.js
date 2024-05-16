'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoctorSpeciality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DoctorSpeciality.init({
    doctorId: DataTypes.INTEGER,
    specialityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DoctorSpeciality',
  });
  return DoctorSpeciality;
};