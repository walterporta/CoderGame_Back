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
              if (value.length > 39)
               throw new Error("Can not be longer than 40 characters ") ;
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
              throw new Error("the release date must be between the year 1958 and the current date");
            }
          },
        },
      },
      rating: {
        type: DataTypes.FLOAT,
        validate: {
          customValidator(value) {
            if (value > 5) {
              throw new Error("el rating no puede ser mayor a 5")
            }
          }
        }
      },

      },
      description: {
        type: DataTypes.TEXT,

         validate:{
           customValidator(value){
           if( value.length>500){
              throw new Error("can not have more than 500 characters")
            }
           }
          }
      },
      image: {
        type: DataTypes.TEXT,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      price:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          customValidator(value){
            if (value <= 0)
              errors.price = "price has to be greater than 0";
           }
          }
         },
      gameLink:{
        type: DataTypes.STRING,

      }
    },
    {
      timestamps: false,
    }
  );
};