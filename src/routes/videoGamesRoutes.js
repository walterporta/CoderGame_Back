const { Router } = require('express')
const {
    getVideoGamesHandler,
    createVideoGamesHandler,
    getVideoGameByIdHandler
} = require('../handlers/gamesHandler.js')


const videoGames = Router()


videoGames.get('/', getVideoGamesHandler)
videoGames.post('/', createVideoGamesHandler)
videoGames.get('/:id', getVideoGameByIdHandler)


module.exports = videoGames