import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database.js';

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'firstName'
  },
  lastName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'lastName'
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  dni: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  address: {
    type: DataTypes.STRING(100),
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'BirthDate'
  },
  healthInsurance: {
    defaultValue: 'No posee',
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'HealthInsurance'
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'isAdmin'
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'isActive'
  }
}, {
  sequelize,
  modelName: 'User',
  timestamps: true, // Habilitar marcas de tiempo automáticas
  paranoid: true // Habilitar eliminación suave
});

export default User;