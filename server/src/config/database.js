import { Sequelize } from 'sequelize';
import logger from '../utils/logger.js';

const sequelizeOptions = {
  logging: (msg) => logger.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  operatorsAliases: '0',
  timezone: 'America/Argentina/Buenos_Aires',
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
    paranoid: true,   // Habilita la eliminación suave. Agrega la columna deletedAt
    underscored: true,  // Utiliza snake_case en lugar de camelCase para los nombres de las columnas
  }
};

export const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  sequelizeOptions,
);
