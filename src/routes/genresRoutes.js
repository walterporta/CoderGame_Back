const { Router } = require('express')
const {
    genreHandler,
    genreFilterHandler
} = require('../handlers/genreHandler.js')


const genres = Router()

genres.get('/', genreHandler)
genres.get('/filter', genreFilterHandler)



module.exports = genres