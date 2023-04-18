const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
    'Wallets',

    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      balance: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    { timestamps: false }
  )}
 