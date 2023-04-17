const { Sequelize, Op } = require('sequelize');
require('dotenv').config();
const {
   DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;
const modelVideoGames = require('./models/VideoGame.js')
const modelGenreGames = require('./models/GenreGame.js')
const modelUsers = require('./models/User.js')

const db = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   {
      logging: false,
   }
);

modelVideoGames(db);
modelGenreGames(db);
modelUsers(db);

const { Videogames, Genregames, Plataforms } = db.models

Videogames.belongsToMany(Genregames, { through: 'GameGenre' }); // muchos a muchos, tabla intermedia
Genregames.belongsToMany(Videogames, { through: 'GameGenre' }); // tiene que tener el mismo nombre

Videogames.belongsToMany(Plataforms, { through: 'GamePlataform' });
Plataforms.belongsToMany(Videogames, { through: 'GamePlataform' });

module.exports = {
   ...db.models,
   conn: db,
};
