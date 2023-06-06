const { Router } = require('express');
const {
    getVideoGamesHandler,
    createVideoGamesHandler,
    getVideoGameByIdHandler,
    deleteVideoGameLogicallyHandler,
    addComentarioVideogame,
    deleteComentario,
    updateGameHandler,

} = require('../handlers/gamesHandler.js');
const videoGames = Router();



videoGames.get('/', getVideoGamesHandler);
videoGames.post('/', createVideoGamesHandler);
videoGames.get('/:id', getVideoGameByIdHandler);
videoGames.put('/delete/:id', deleteVideoGameLogicallyHandler);
videoGames.post('/comentario', addComentarioVideogame);
videoGames.delete('/comentario',deleteComentario);
videoGames.put('/update/:id', updateGameHandler); 
 
//crear una ruta promotions, no puedo usar 2 gets, me lo toma por id



module.exports = videoGames;


