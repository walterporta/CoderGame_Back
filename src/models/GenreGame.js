const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'Genregames',
    {
      id:{
        type: DataTypes.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};