const { Router } = require('express');
const genresRoutes = require('./genresRoutes');
const videoGamesRoutes = require('./videoGamesRoutes');
const platformsRoutes = require('./platformsRoutes')
const userRoutes = require('./usersRoutes.js')

const router = Router();

// Configurar los routers
router.use('/genres', genresRoutes);
router.use('/videogames', videoGamesRoutes);
router.use('/platforms', platformsRoutes);
router.use('/user', userRoutes)


module.exports = router;
