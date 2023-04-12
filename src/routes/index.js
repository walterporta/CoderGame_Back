const { Router } = require('express');
const {genreHandler} = require('../handlers/genreHandler')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/genres', genreHandler )

module.exports = router;