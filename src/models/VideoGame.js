const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Videogames",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true, 
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          customValidator(value){
            if(value.length>40){
             throw new Error("el tititulo del juego no puede superar los 40 caracteres")
            }
           }
          }
        },
      released: {
        type: DataTypes.DATEONLY,
        validate: {
          customValidator(value) {
            const currentDate = new Date();
            const releaseDate = new Date(value);
            const minDate = new Date("1958-01-01");
            if (releaseDate < minDate || releaseDate > currentDate) {
              throw new Error("la fecha de lanzamiento debe estar entre el año 1958 y la fecha actual");
            }
          },
        },
      },
      rating: {
        type: DataTypes.FLOAT,
        validate:{
          customValidator(value){
            if(value>5){
             throw new Error("el rating no puede ser mayor a 5")
            }
           }
          }
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      description: {
        type: DataTypes.TEXT,
        validate:{
          customValidator(value){
            if(value.length<1 || value.length>50){
             throw new Error("La descripcion debe contener entre 1 y 50 caracteres")
            }
           }
          }
      },
      image: {
        type: DataTypes.STRING,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
};