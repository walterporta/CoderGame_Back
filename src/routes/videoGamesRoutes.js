const { Router } = require('express');
const {
    getVideoGamesHandler,
    createVideoGamesHandler,
    getVideoGameByIdHandler,
    deleteVideoGameLogicallyHandler
} = require('../handlers/gamesHandler.js');
const { requiresAuth } = require('express-openid-connect');
const videoGames = Router();

const isAdmin = (req, res, next) => {
    const { sub } = req.oidc.user;
    const { roles } = req.oidc.idToken.payload;
    console.log(`User ${sub} has roles ${roles}`);
    if (roles.includes('admin')) {
        next();
    } else {
        res.status(403).send('Forbidden');
    }
};

//Saque requiresAuth() getvideomaesy por id
videoGames.get('/', getVideoGamesHandler);
videoGames.post('/', requiresAuth(), isAdmin, createVideoGamesHandler);
videoGames.get('/:id',  getVideoGameByIdHandler);
videoGames.put('/:id', requiresAuth(), isAdmin, deleteVideoGameLogicallyHandler);

module.exports = videoGames;


