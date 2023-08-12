'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('indeks_keanekaragaman_hayati', 'nomor', {
      type: Sequelize.INTEGER,
      autoIncrement: true
    })
    await queryInterface.addColumn('indeks_keanekaragaman_hayati', 'createdAt', {
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('indeks_keanekaragaman_hayati', 'updatedAt', {
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
    await queryInterface.changeColumn('indeks_keanekaragaman_hayati', 'nomor', {
      type: Sequelize.INTEGER,
      autoIncrement: false
    })
    await queryInterface.removeColumn('indeks_keanekaragaman_hayati', 'createdAt')
    await queryInterface.removeColumn('indeks_keanekaragaman_hayati', 'updatedAt')
  }
};
