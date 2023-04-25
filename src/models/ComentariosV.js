const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Favorites = sequelize.define('ComentariosV', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
  },
    message: {
      type: DataTypes.STRING,

    },
    date:{ 
        type: DataTypes.DATE,
        defaultValue: ()=>new Date,
        allowNull: false,
    },
    eliminate:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    
  }, {
    timestamps: false
  });

  return Favorites;
};