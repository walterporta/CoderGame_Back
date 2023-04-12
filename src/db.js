const { Sequelize, Op } = require('sequelize');
require('dotenv').config();
const {
   DB_USER, DB_PASSWORD, DB_HOST,
 } = process.env;
const modelVideoGames = require('./models/VideoGame.js')

const db = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/codergame`,
    {
       logging: false,
    }
 );

 modelVideoGames(db);


 module.exports = {
    ...db.models,
    conn: db,
 };
