const { Router } = require('express');
const {
    getVideoGamesHandler,
    createVideoGamesHandler,
    getVideoGameByIdHandler,
    deleteVideoGameLogicallyHandler,
    addComentarioVideogame,
    deleteComentario,
    updateGameHandler,
    postPromotionsHandler
} = require('../handlers/gamesHandler.js');

const videoGames = Router();



videoGames.get('/', getVideoGamesHandler);
videoGames.post('/', createVideoGamesHandler);
videoGames.get('/:id', getVideoGameByIdHandler);
videoGames.delete('/:id', deleteVideoGameLogicallyHandler);
videoGames.post('/comentario', addComentarioVideogame);
videoGames.delete('/comentario',deleteComentario );
videoGames.put('/:id', updateGameHandler);
videoGames.post('/promotions',postPromotionsHandler)



// videoGames.delete('/comentario', deleteComentarioVideogame)
// videoGames.get('/', requiresAuth(), getVideoGamesHandler);
// videoGames.post('/', requiresAuth(), isAdmin, createVideoGamesHandler);
// videoGames.get('/:id', requiresAuth(), getVideoGameByIdHandler);
// videoGames.put('/:id', requiresAuth(), isAdmin, deleteVideoGameLogicallyHandler);

module.exports = videoGames;


