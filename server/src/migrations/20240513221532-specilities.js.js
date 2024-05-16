'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Specialities', 'updatedAt');
    await queryInterface.removeColumn('Specialities', 'createdAt');
    await queryInterface.removeColumn('Specialities', 'lastName');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Specialities', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false
    });
    await queryInterface.addColumn('Specialities', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false
    });
    await queryInterface.addColumn('Specialities', 'lastName', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
  }
};
