import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database.js';

const Doctor = sequelize.define('Doctor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  licence: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Doctor',
  timestamps: true,
  paranoid: true,
});

export default Doctor;