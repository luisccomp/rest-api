'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Creating a table categories on database using PostgreSQL. This command
      correspond to the following sql command:

      CREATE TABLE categories (
        id INTEGER PRIMARY KEY,
        description VARCHAR(255) NOT NULL,
        created_at DATE,
        updated_at DATE
      );
    */
    return queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      In order to rever this migration, execute "DROP TABLE categories".
    */
    return queryInterface.dropTable('categories');
  }
};
