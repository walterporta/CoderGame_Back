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
            nickname: {
                type: DataTypes.STRING,
                unique: true,
            },
            image: {
                type: DataTypes.STRING,
                
            },            
            coverImage: {
                type: DataTypes.STRING,
                
            },
            linkYoutube:{
                type: DataTypes.STRING,

            },
            description:{
                type: DataTypes.TEXT,
            },

            

        },
        {
            timestamps: false,
        }
    );
};