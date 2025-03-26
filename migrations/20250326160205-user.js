"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "users",
      {
        user_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        firstname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            is: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
          },
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
