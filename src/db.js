const { Sequelize, Op } = require('sequelize');


const db = new Sequelize(
    'postgres://postgres:Rama1291@localhost:5432/henrydatabase',
    {
       logging: false,
    }
 );


 
 module.exports = {
    ...db.models,
    db,
    Op,
 };