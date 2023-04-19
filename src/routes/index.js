const { Router } = require('express');
const genresRoutes = require('./genresRoutes');
const videoGamesRoutes = require('./videoGamesRoutes');
const platformsRoutes = require('./platformsRoutes')
const dbLoad = require('./dbLoad')
const pagoRoute = require('./pagoRoute')

const router = Router();

// Configurar los routers
router.use('/genres', genresRoutes);
router.use('/videogames', videoGamesRoutes);
router.use('/platforms', platformsRoutes);
router.use('/cargadb', dbLoad)
router.use('/pagos', pagoRoute)

module.exports = router;
