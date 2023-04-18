const { Sequelize, Op } = require('sequelize');
require('dotenv').config();
const {
   DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const modelVideoGames = require('./models/VideoGame.js')
const modelGenreGames = require('./models/GenreGame.js')
const modelUsers = require('./models/User.js');
const modelPlatforms = require('./models/platforms.js')
const modelWallets = require('./models/Wallet');


const db = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   {
      logging: false,
   }
);

modelVideoGames(db);
modelGenreGames(db);
modelUsers(db);
modelPlatforms(db);
modelWallets(db);

const { Videogames, Genregames, Platforms, Wallets, Users} = db.models


Videogames.belongsToMany(Genregames, { through: 'GameGenre' }); // muchos a muchos, tabla intermedia
Genregames.belongsToMany(Videogames, { through: 'GameGenre' }); // tiene que tener el mismo nombre

Videogames.belongsToMany(Platforms, { through: 'GamePlatform' });
Platforms.belongsToMany(Videogames, { through: 'GamePlatform' });

Users.hasOne(Wallets); // Un usuario tiene una sola billetera
Wallets.belongsTo(Users); // Una billetera pertenece a un solo usuario

module.exports = {
   ...db.models,
   conn: db,
};
