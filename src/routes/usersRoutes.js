const { Router } = require('express')
const { deleteFavorite, createUserHandler, addFavorite, getFavorite } = require('../controllers/Users/deleteFavorites')


const usersRoutes = Router()

// usersRoutes.get('/', getUserHandler)
// usersRoutes.get('/:id', getUserByIdHandler)
usersRoutes.post('/', createUserHandler)
usersRoutes.post('/favorites', addFavorite)
usersRoutes.delete('/favorites', deleteFavorite)
usersRoutes.get('/favorites', getFavorite)

module.exports = usersRoutes

