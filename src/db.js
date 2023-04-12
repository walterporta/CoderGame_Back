const { Sequelize, Op } = require('sequelize');
require('dotenv').config();
const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
  } = process.env;
  const modelVideoGames = require('./models/VideoGame.js')

const db = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`,
    {
       logging: false,
    }
 );

 modelVideoGames(db);


 module.exports = {
    ...db.models,
    conn: db,
 };
