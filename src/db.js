const { Sequelize, Op } = require('sequelize');
require('dotenv').config();
const {
   DB_USER, DB_PASSWORD, DB_HOST,
 } = process.env;
const modelVideoGames = require('./models/VideoGame.js')
const modelGenreGames = require('./models/GenreGame.js')
const modelUsers = require('./models/User.js')


const db = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/codergame`,
    {
      logging: false,
    }
 );
 
 modelVideoGames(db);
 modelGenreGames(db);
 modelUsers(db);

const {Videogames, Genregames} = db.models

Videogames.belongsToMany(Genregames, { through: 'GameGenre' }); // muchos a muchos, tabla intermedia
Genregames.belongsToMany(Videogames, { through: 'GameGenre' }); // tiene que tener el mismo nombre

 module.exports = {
    ...db.models,
    conn: db,
 };

