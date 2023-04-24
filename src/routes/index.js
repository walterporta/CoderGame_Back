const { Router } = require('express');
const genresRoutes = require('./genresRoutes');
const videoGamesRoutes = require('./videoGamesRoutes');
const platformsRoutes = require('./platformsRoutes')
const usersRoutes = require('./usersRoutes.js')
const empresaRoutes = require('./empresa')
const { requirseAuth } = require('express-openid-connect')

const dbLoad = require('./dbLoad')
const checkout = require('./coRoute');
const router = Router();

// Configurar los routers
router.use('/genres', genresRoutes);
router.use('/videogames', videoGamesRoutes);
router.use('/platforms', platformsRoutes);
router.use('/cargadb', dbLoad)
router.use('/user', usersRoutes);
router.use('/checkout', checkout)
router.use('/empresa', empresaRoutes)

module.exports = router;
