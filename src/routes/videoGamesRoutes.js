const { Router } = require('express')
const {
    getVideoGamesHandler,
    createVideoGamesHandler,
    getVideoGameByIdHandler,
    deleteVideoGameLogicallyHandler
} = require('../handlers/gamesHandler.js')



const videoGames = Router()


videoGames.get('/', getVideoGamesHandler)
videoGames.post('/', createVideoGamesHandler)
videoGames.get('/:id', getVideoGameByIdHandler)
videoGames.put('/:id', deleteVideoGameLogicallyHandler)


module.exports = videoGames