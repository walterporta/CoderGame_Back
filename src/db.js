const { Sequelize, Op, DataTypes } = require('sequelize');
require('dotenv').config();
const {
   DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PORT_DB
} = process.env;

const modelVideoGames = require('./models/VideoGame.js')
const modelGenreGames = require('./models/GenreGame.js')
const modelUsers = require('./models/User.js');
const modelPlatforms = require('./models/Platforms.js')
const modelWallets = require('./models/Wallet');
const modelTransactions = require('./models/Transactions.js');
const modelFavorites = require('./models/Favorites.js')
const modelComentariosV = require('./models/ComentariosV.js')

const db = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT_DB}/${DB_NAME}`,
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
modelComentariosV(db)


const { Videogames, Genregames, Platforms, Wallets, Users, Transactions, Favorites, ComentariosV } = db.models


Videogames.belongsToMany(Genregames, { through: 'GameGenre' }); // muchos a muchos, tabla intermedia
Genregames.belongsToMany(Videogames, { through: 'GameGenre' }); // tiene que tener el mismo nombre

Videogames.belongsToMany(Platforms, { through: 'GamePlatform' });
Platforms.belongsToMany(Videogames, { through: 'GamePlatform' });

Users.hasOne(Wallets); // Un usuario tiene una sola billetera
Wallets.belongsTo(Users); // Una billetera pertenece a un solo usuario
 
Wallets.hasMany(Transactions)
Transactions.belongsTo(Wallets)

Videogames.hasMany(Transactions)
Transactions.belongsTo(Videogames)

Videogames.hasMany(Favorites);
Favorites.belongsTo(Videogames);

Users.hasMany(Favorites);
Favorites.belongsTo(Users);

Users.hasMany(Videogames);
Videogames.belongsTo(Users);

Users.hasMany(ComentariosV)
ComentariosV.belongsTo(Users)

Videogames.hasMany(ComentariosV)
ComentariosV.belongsTo(Videogames)

module.exports = {
   ...db.models,
   conn: db,
};


 