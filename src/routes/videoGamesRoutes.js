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
    try {
        const { sub } = req.oidc.user;
        const { roles } = req.oidc.idToken.payload;
        console.log(`User ${sub} has roles ${roles}`);
        if (roles.includes('administrators')) {
            next();
        } else {
            res.status(403).send('Forbidden');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

videoGames.get('/', getVideoGamesHandler);
videoGames.post('/', requiresAuth(), isAdmin, createVideoGamesHandler);
videoGames.get('/:id', requiresAuth(), getVideoGameByIdHandler);
videoGames.put('/:id', deleteVideoGameLogicallyHandler);
// videoGames.get('/', getVideoGamesHandler);
// videoGames.post('/', createVideoGamesHandler);
// videoGames.get('/:id', getVideoGameByIdHandler);
// videoGames.put('/:id',  deleteVideoGameLogicallyHandler);


module.exports = videoGames;
