module.exports = (sequelize, DataTypes) => {
  const teams = sequelize.define(
    "teams",
    {
      team_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      team_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      org_id: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
      },
      team_admin: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );

  teams.associate = (models) => {
    teams.hasMany(models.organizations, {
      foreignKey: "org_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  teams.associate = (models) => {
    teams.hasMany(models.users, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
      onUpate: "CASCADE",
    });
  };
  return teams;
};
