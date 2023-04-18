const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
<<<<<<< HEAD
        allowNull: false
=======
        allowNull: false,
>>>>>>> e85efd0ea67d3e0230bb0ecebf05e1e2d2ff7812
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      //el genero solo esta permitido uno de esos 3
      gender: {
        type: DataTypes.ENUM(['male', 'female', 'other']),
        allowNull: false,

      },
      // tipo de usuario podria ser cualquiera de esos
      typeUser: {
        type: DataTypes.ENUM(['user', 'admin', 'seller']),
        allowNull: false,
        defaultValue: 'user'
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      }

    },
    {
      timestamps: false,
    }
  );
};
