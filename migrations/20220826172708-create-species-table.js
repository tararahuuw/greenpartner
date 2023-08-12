'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.sequelize.query('ALTER TABLE explore RENAME TO species');
    await queryInterface.addColumn('species', 'createdAt', { type: Sequelize.DATE });
    await queryInterface.addColumn('species', 'updatedAt', { type: Sequelize.DATE});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.sequelize.query('ALTER TABLE species RENAME TO explore');
    await queryInterface.removeColumn('explore', 'createdAt');
    await queryInterface.removeColumn('explore', 'updatedAt');
  }
};
