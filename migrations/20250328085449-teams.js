"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "teams",
      {
        team_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        team_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        org_id: {
          type: Sequelize.UUID,
          allowNull: false,
          unique: true,
          references: {
            model: "organizations",
            key: "org_id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        team_admin: {
          type: Sequelize.UUID,
          allowNull: false,
          unique: true,
          references: {
            model: "users",
            key: "user_id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      {
        timestamps: false,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("teams");
  },
};
