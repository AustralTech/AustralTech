import { DataTypes } from 'sequelize';
import { sequelize } from '../index.db.js';

const User = sequelize.define('User', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DNI: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    Address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Gender: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    BirthDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    HealthInsurance: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },      
    Password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    paranoid: true, // Habilitar eliminación suave
    timestamps: true // Habilitar marcas de tiempo automáticas
  });
  

  export default User;
