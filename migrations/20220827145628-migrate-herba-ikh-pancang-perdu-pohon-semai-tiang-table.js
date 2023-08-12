'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // Herba table
    await queryInterface.changeColumn('herba', 'nomor', {
      type: Sequelize.INTEGER,
      autoIncrement: true
    })
    await queryInterface.addColumn('herba', 'createdAt', {
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('herba', 'updatedAt', {
      type: Sequelize.DATE
    })

    // Pancang table
    await queryInterface.changeColumn('pancang', 'nomor_pohon', {
      type: Sequelize.INTEGER,
      autoIncrement: true
    })
    await queryInterface.addColumn('pancang', 'createdAt', {
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('pancang', 'updatedAt', {
      type: Sequelize.DATE
    })

    // Perdu table
    await queryInterface.changeColumn('perdu', 'nomor_pohon', {
      type: Sequelize.INTEGER,
      autoIncrement: true
    })
    await queryInterface.addColumn('perdu', 'createdAt', {
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('perdu', 'updatedAt', {
      type: Sequelize.DATE
    })

    // Pohon table
    await queryInterface.changeColumn('pohon', 'nomor_pohon', {
      type: Sequelize.INTEGER,
      autoIncrement: true
    })
    await queryInterface.addColumn('pohon', 'createdAt', {
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('pohon', 'updatedAt', {
      type: Sequelize.DATE
    })

    // Semai table
    await queryInterface.changeColumn('semai', 'nomor', {
      type: Sequelize.INTEGER,
      autoIncrement: true
    })
    await queryInterface.addColumn('semai', 'createdAt', {
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('semai', 'updatedAt', {
      type: Sequelize.DATE
    })

    // Tiang table
    await queryInterface.changeColumn('tiang', 'nomor_pohon', {
      type: Sequelize.INTEGER,
      autoIncrement: true
    })
    await queryInterface.addColumn('tiang', 'createdAt', {
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('tiang', 'updatedAt', {
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

     await queryInterface.changeColumn('herba', 'nomor', {
      type: Sequelize.INTEGER,
      autoIncrement: false
    })
    await queryInterface.removeColumn('herba', 'createdAt')
    await queryInterface.removeColumn('herba', 'updatedAt')

    // Pancang table
    await queryInterface.changeColumn('pancang', 'nomor_pohon', {
      type: Sequelize.INTEGER,
      autoIncrement: false
    })
    await queryInterface.removeColumn('pancang', 'createdAt')
    await queryInterface.removeColumn('pancang', 'updatedAt')

    // Perdu table
    await queryInterface.changeColumn('perdu', 'nomor_pohon', {
      type: Sequelize.INTEGER,
      autoIncrement: false
    })
    await queryInterface.removeColumn('perdu', 'createdAt')
    await queryInterface.removeColumn('perdu', 'updatedAt')

    // Pohon table
    await queryInterface.changeColumn('pohon', 'nomor_pohon', {
      type: Sequelize.INTEGER,
      autoIncrement: false
    })
    await queryInterface.removeColumn('pohon', 'createdAt')
    await queryInterface.removeColumn('pohon', 'updatedAt')

    // Semai table
    await queryInterface.changeColumn('semai', 'nomor', {
      type: Sequelize.INTEGER,
      autoIncrement: false
    })
    await queryInterface.removeColumn('semai', 'createdAt')
    await queryInterface.removeColumn('semai', 'updatedAt')

    // Tiang table
    await queryInterface.changeColumn('tiang', 'nomor_pohon', {
      type: Sequelize.INTEGER,
      autoIncrement: false
    })
    await queryInterface.removeColumn('tiang', 'createdAt')
    await queryInterface.removeColumn('tiang', 'updatedAt')
  }
};
