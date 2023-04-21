const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'Users',
    {
      sub: { 
        type: DataTypes.TEXT,
        primaryKey: true,
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