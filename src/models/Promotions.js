const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Promotions',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
                
            },
            discountPorcentage:{
                type: DataTypes.DECIMAL,
                allowNull:false,
                validator:{
                    customValidator(value){
                        if( value>=100 || value<=0){
                           throw new Error("the discount percentage has to be a value between 1 and 99")
                         }
                        }
                }
            },
            startDate: {
                type: DataTypes.DATE,
                defaultValue: ()=>new Date,
                allowNull: false,                
            },
            dueDate:{
                type: DataTypes.DATE,
                allowNull:false,
            },


        },
        {
            timestamps: false,
        }
)}