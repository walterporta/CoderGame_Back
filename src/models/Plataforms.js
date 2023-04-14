const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'Plataforms',
    {
      id: {
        type: DataTypes.INTEGER,
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

