const app = require('./src/app')
const { conn } = require('./src/db.js');
const {getAllGenres} = require('./src/controllers/ApyAndDb/getGenreData')
const {insertGamesDb} = require('./src/controllers/ApyAndDb/insertGamesApiDB')
const {getAllPlatforms} = require('./src/controllers/ApyAndDb/getPlatforms')
const PORT = 3001;


conn.sync({ force: true }).then(() => {
  getAllGenres()
  insertGamesDb()
  getAllPlatforms()
  app.listen(3001, () => {
  console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
}); 
