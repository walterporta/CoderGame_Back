const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Transactions',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
                
            },
            date: {
                type: DataTypes.DATE,
                defaultValue: ()=>new Date,
                allowNull: false,
            },
            amount: {
                type: DataTypes.DECIMAL,
                allowNull: false
            }
        },
        {
            timestamps: false,
        }
    );
};