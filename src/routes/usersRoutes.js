const { Router } = require('express')
const { deleteFavoriteHandler, createUserHandler, addFavoriteHandler, getFavoriteHandler} = require('../handlers/usersHandlers')


const usersRoutes = Router()

// usersRoutes.get('/', getUserHandler) 
// usersRoutes.get('/:id', getUserByIdHandler)
usersRoutes.post('/', createUserHandler)
usersRoutes.post('/favorites', addFavoriteHandler)
usersRoutes.delete('/favorites', deleteFavoriteHandler) 
usersRoutes.get('/favorites/:id', getFavoriteHandler)

module.exports = usersRoutes
 
