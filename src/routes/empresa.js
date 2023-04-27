const { Router } = require('express')
const { getAllVideogames} = require('../handlers/empresaHandlers.js')


const empresaRoutes = Router()

empresaRoutes.get('/videogames',getAllVideogames)


module.exports = empresaRoutes