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
      rol: {
        type: DataTypes.ENUM('admin', 'client', 'seller'),
        defaultValue: 'client',
        allowNull: false

      },
      banned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },

      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      requestSeller: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false,
    }
  );
};