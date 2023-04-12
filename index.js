const app = require('./src/app')
const { conn } = require('./src/db.js');

const PORT = 3001;


conn.sync({ force: true }).then(() => {
  app.listen(3001, () => {
  console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});