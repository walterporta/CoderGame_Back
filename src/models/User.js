const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        // allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        // allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        // allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        // allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        // allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        // allowNull: false,
        unique: true,
      },
      gender: {
        type: DataTypes.STRING,
        // allowNull: false,
        isIn: [['male', 'female', 'other']]
      },
    //  Esto al final va a ser un ENUM, con 3 roles, user,empresa y admin
    // isAdmin: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false
    //   },
    //   isSuperAdmin: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false
    //   }
      
    },
    {
      timestamps: false,
    }
  );
};
