const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/index');
require('dotenv').config();
const {
  CLIENT_ID, DOMAIN, CLIENT_SECRET, BASE_URL
} = process.env;

const app = express();

// Configuración para la autenticación con Auth0
// const { auth } = require('express-openid-connect');
// const { createNewUser } = require('./controllers/Users/usersControllers.js')

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   baseURL: BASE_URL,
//   clientID: CLIENT_ID,
//   issuerBaseURL: DOMAIN,
//   secret: CLIENT_SECRET,
// };

// const errorHandler = (err, req, res, next) => {
//   res.status(500).send(`tienes un error en${err.message}`)
// }

// // Middleware para guardar el usuario en la base de datos
// const saveUserToDb = async (req, res, next) => {
//   console.log(req.oidc.user)
//   if (req.oidc.user) {
//     // Desestructura las propiedades 'sub', 'name', 'email' del objeto 'oidc.user'
//     const { sub, name, email } = req.oidc.user;
//     const user = {
//       auth0Id: sub,
//       email,
//       name,
//     };
//     try {
//       await createNewUser(user);
//       next();
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     next(new Error('No se encontró un usuario'));
//   }
// };

// // Middleware para obtener el usuario autenticado y almacenarlo en la variable req.user
// const getUser = (req, res, next) => {
//   req.user = req.oidc.user;
//   next();
// }

// // Aplica los middlewares
// app.use(auth(config));
// app.use((req, res, next) => {
//   console.log('Authorization header:', req.headers.authorization);
//   next();
// });

// app.use(getUser);
// app.use(saveUserToDb);
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/', router);
// app.use(errorHandler);

module.exports = app;