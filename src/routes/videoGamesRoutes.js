const { Router } = require('express')
const {
    getVideoGamesHandler,
    createVideoGamesHandler
} = require('../handlers/gamesHandler.js')


const videoGames = Router()
console.log('pase por videogamesrouter');

videoGames.get('/', getVideoGamesHandler)
videoGames.post('/', createVideoGamesHandler)



module.exports = videoGames