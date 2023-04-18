const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
<<<<<<< HEAD
  sequelize.define(
    'Wallets',
=======
    sequelize.define(

    'Wallet',
>>>>>>> f9839db9573be319f536c70ca3163c50b25d74aa
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      balance: {
        type: DataTypes.FLOAT,
<<<<<<< HEAD
        defaultValue: 0,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
=======
        allowNull: false,
        defaultValue: 0,
      },
    },
    { timestamps: false }
  )}
>>>>>>> f9839db9573be319f536c70ca3163c50b25d74aa
