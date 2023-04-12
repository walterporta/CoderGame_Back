const { Sequelize, Op } = require('sequelize');

const db = new Sequelize(
    'postgres://postgres:Rama1291@localhost:5432/codergame',
    {
       logging: false,
    }
 );

 module.exports = {
    ...db.models,
    conn: db,
 };
