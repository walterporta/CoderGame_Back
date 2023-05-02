const { Router } = require('express')
const comentRoute= Router()
const {  addComentarioVideogame, deleteComentario } = require('../handlers/gamesHandler')


comentRoute.post('/', addComentarioVideogame )
comentRoute.put('/', deleteComentario )


module.exports = comentRoute