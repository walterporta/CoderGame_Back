const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Profile',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
                
            },
            image: {
                type: DataTypes.DATE,
                defaultValue: ()=>new Date,
            },
            protada: {
                type: DataTypes.DECIMAL,
                
            },
            linkYoutube:{
                type: DataTypes.STRING,

            },
            description:{
                type: DataTypes.TEXT,
            }

        },
        {
            timestamps: false,
        }
    );
};