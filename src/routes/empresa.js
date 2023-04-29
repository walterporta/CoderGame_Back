const { Router } = require('express')
const { getAllVideogames } = require('../handlers/empresaHandlers.js')
const { getVentaHandler } = require('../handlers/getVentaHandler.js')

const empresaRoutes = Router()

empresaRoutes.get('/videogames', getAllVideogames)
empresaRoutes.get('/ventas/:sub', getVentaHandler)


module.exports = empresaRoutes