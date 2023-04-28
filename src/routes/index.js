const { Router } = require('express');
const genresRoutes = require('./genresRoutes.js');
const videoGamesRoutes = require('./videoGamesRoutes.js');
const platformsRoutes = require('./platformsRoutes.js')
const usersRoutes = require('./usersRoutes.js')
const empresaRoutes = require('./empresa.js')
const adminRoutes = require('./adminRoutes.js')
const promotionsRoute =require('./promotionsRoute.js')
const comentRoute = require('./comments.js')
const { requirseAuth } = require('express-openid-connect')

const dbLoad = require('./dbLoad')
const checkout = require('./coRoute');
const router = Router();

// Configurar los routers
router.use('/genres', genresRoutes)
router.use('/videogames', videoGamesRoutes)
router.use('/platforms', platformsRoutes)
router.use('/cargadb', dbLoad)
router.use('/user', usersRoutes)
router.use('/checkout', checkout)
router.use('/empresa', empresaRoutes)
router.use('/admin', adminRoutes)
router.use('/promotions', promotionsRoute)
router.use ('/comment',comentRoute)

module.exports = router;
