const { Router } = require('express')
const { upditeProfilehandler, deleteFavoriteHandler, createUserHandler, 
    addFavoriteHandler, getFavoriteHandler, getProfileUsers,
    getVideogamesBuy } = require('../handlers/usersHandlers')


const usersRoutes = Router()

// usersRoutes.get('/', getUserHandler) 
// usersRoutes.get('/:id', getUserByIdHandler)
usersRoutes.post('/register', createUserHandler)
usersRoutes.post('/favorites', addFavoriteHandler)
usersRoutes.delete('/favorites', deleteFavoriteHandler)
usersRoutes.get('/favorites/:id', getFavoriteHandler)
usersRoutes.get('/videogames/:id', getVideogamesBuy)
usersRoutes.put('/profile', upditeProfilehandler)
usersRoutes.get('/profile/:sub',getProfileUsers)

module.exports = usersRoutes

