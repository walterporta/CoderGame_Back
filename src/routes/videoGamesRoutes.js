const { Router } = require('express');
const {
    getVideoGamesHandler,
    createVideoGamesHandler,
    getVideoGameByIdHandler,
    deleteVideoGameLogicallyHandler,
    addComentarioVideogame,
    deleteComentario,
    updateGameHandler
} = require('../handlers/gamesHandler.js');
const videoGames = Router();



videoGames.get('/', getVideoGamesHandler);
videoGames.post('/', createVideoGamesHandler);
videoGames.get('/:id', getVideoGameByIdHandler);
videoGames.delete('/:id', deleteVideoGameLogicallyHandler);
videoGames.post('/comentario', addComentarioVideogame);
videoGames.delete('/comentario', deleteComentario);
videoGames.put('/:id', updateGameHandler);




module.exports = videoGames;


