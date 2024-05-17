'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Specialities', 'Name', 'name');
    await queryInterface.renameColumn('Specialities', 'Description', 'description');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Specialities', 'name', 'Name');
    await queryInterface.renameColumn('Specialities', 'description', 'Description');
  }
};
