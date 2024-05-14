'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Creamos la tabla Users con todos los campos
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100), // Modificamos el tipo para permitir hasta 100 caracteres
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true // Agregamos la validación de correo electrónico
        }
      },
      DNI: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      Address: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      Phone: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      Gender: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      BirthDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      HealthInsurance: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        //defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminamos la tabla Users si es necesario revertir la migración
    await queryInterface.dropTable('Users');
  }
};
