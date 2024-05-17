import {DataTypes} from 'sequelize';
import {sequelize} from '../config/database.js';


const Speciality = sequelize.define('Specialities', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },  
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },  
  }, {
    sequelize,
    modelName: 'Specialities',
    timestamps: false,
    paranoid: true,
  });

export default Speciality;