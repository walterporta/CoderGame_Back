const { Sequelize, Op } = require('sequelize');
require('dotenv').config();
const {
   DB_USER, DB_PASSWORD, DB_HOST,
 } = process.env;

const db = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/codergame`,
    {
       logging: false,
    }
 );

 module.exports = {
    ...db.models,
    conn: db,
 };
