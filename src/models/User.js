const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'Users',
    {
      auth0Id: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        // allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        // allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );
};