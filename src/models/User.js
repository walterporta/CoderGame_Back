const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'Users',
    { 
        id: {
      type: DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true
        },
      auth0Id: {
        type: DataTypes.TEXT,

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