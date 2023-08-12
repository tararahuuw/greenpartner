'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('blok', 'nomor', {
      type: Sequelize.INTEGER,
      autoIncrement: true
    })
    await queryInterface.addColumn('blok', 'createdAt', {
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('blok', 'updatedAt', {
      type: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('blok', 'nomor', {
      type: Sequelize.INTEGER,
      autoIncrement: false
    })
    await queryInterface.removeColumn('blok','createdAt');
    await queryInterface.removeColumn('blok', 'updatedAt');
  }
};
