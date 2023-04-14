const { Router } = require('express')
const {
    genreHandler
} = require('../handlers/genreHandler.js')


const genres = Router()

genres.get('/', genreHandler)




module.exports = genres