module.exports = (sequelize, DataTypes) => {
  const organizations = sequelize.define(
    "organizations",
    {
      org_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      org_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      org_admin: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );

  organizations.associate = (models) => {
    organizations.belongsTo(models.users, {
      foreignKey: "org_admin",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return organizations;
};
