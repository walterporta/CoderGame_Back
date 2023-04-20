const { Sequelize, Op, DataTypes } = require('sequelize');
require('dotenv').config();
const {
   DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const modelVideoGames = require('./models/VideoGame.js')
const modelGenreGames = require('./models/GenreGame.js')
const modelUsers = require('./models/User.js');
const modelPlatforms = require('./models/Platforms.js')
const modelWallets = require('./models/Wallet');
const modelTransactions = require('./models/Transactions.js');
const modelFavorites = require('./models/Favorites.js')

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
modelTransactions(db)
modelFavorites(db)

const { Videogames, Genregames, Platforms, Wallets, Users, Transactions, Favorites } = db.models


Videogames.belongsToMany(Genregames, { through: 'GameGenre' }); // muchos a muchos, tabla intermedia
Genregames.belongsToMany(Videogames, { through: 'GameGenre' }); // tiene que tener el mismo nombre

Videogames.belongsToMany(Platforms, { through: 'GamePlatform' });
Platforms.belongsToMany(Videogames, { through: 'GamePlatform' });

Users.hasOne(Wallets); // Un usuario tiene una sola billetera
Wallets.belongsTo(Users); // Una billetera pertenece a un solo usuario

Wallets.hasMany(Transactions)
Transactions.belongsTo(Wallets)

Videogames.hasMany(Favorites);
Favorites.belongsTo(Videogames);

Users.hasMany(Favorites);
Favorites.belongsTo(Users);

module.exports = {
   ...db.models,
   conn: db,
};


