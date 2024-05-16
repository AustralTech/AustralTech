'use strict';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'firstName' // Esto mapea el campo a la columna 'firstName' en la base de datos
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'lastName' // Esto mapea el campo a la columna 'lastName' en la base de datos
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
      allowNull: false
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
      field: 'BirthDate' // Esto mapea el campo a la columna 'BirthDate' en la base de datos
    },
    healthInsurance: {
      defaultValue: 'No posee',
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'HealthInsurance' // Esto mapea el campo a la columna 'HealthInsurance' en la base de datos
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'isAdmin' // Esto mapea el campo a la columna 'isAdmin' en la base de datos
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'isActive' // Esto mapea el campo a la columna 'isActive' en la base de datos
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true, // Habilitar marcas de tiempo automáticas
    paranoid: true // Habilitar eliminación suave
  });

export default User;

