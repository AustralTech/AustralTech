import { Sequelize } from 'sequelize';
import logger from '../utils/logger.js';
import dotenv from 'dotenv';
dotenv.config();

const sequelizeOptions = {
  logging: (msg) => logger.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  operatorsAliases: '0',
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: true, // Agrega createdAt y updatedAt a todas las tablas
    paranoid: true   // Habilita la eliminación suave. Agrega la columna deletedAt
  }
};

export const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  sequelizeOptions,
);
