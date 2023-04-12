const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'Genregames',
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};