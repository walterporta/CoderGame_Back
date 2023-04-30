const { Router } = require('express')
const { upditeProfilehandler, deleteFavoriteHandler, createUserHandler,
    addFavoriteHandler, getFavoriteHandler, getProfileUsers,
    getVideogamesBuy, updateUserHandler, profileByBalanceHandler, getUserByTransactionHandler, getBuyerUserHandler, getRolHandler } = require('../handlers/usersHandlers')


const { getUserHandler, getUserByIdHandler } = require('../handlers/usersHandlers.js')
const usersRoutes = Router()
 

// usersRoutes.get('/', getUserHandler) 
// usersRoutes.get('/:id', getUserByIdHandler)



usersRoutes.post('/register', createUserHandler)
usersRoutes.post('/favorites', addFavoriteHandler)
usersRoutes.delete('/favorites', deleteFavoriteHandler)
usersRoutes.get('/favorites/:id', getFavoriteHandler)
usersRoutes.get('/videogames/:id', getVideogamesBuy)
usersRoutes.get('/profile/:sub', getProfileUsers)
usersRoutes.get('/profile/bybalance/:sub', profileByBalanceHandler)
usersRoutes.put('/profile', upditeProfilehandler)
usersRoutes.put('/:sub', updateUserHandler)
usersRoutes.get('/bytransaction/:sub', getUserByTransactionHandler)
usersRoutes.get('/buyer/:sub', getBuyerUserHandler)
usersRoutes.get('/rol/:sub', getRolHandler)

module.exports = usersRoutes

