const { Router } = require('express')
const { createUserHandler, addFavorite } = require('../handlers/usersHandlers.js')



const usersRoutes = Router()

//  usersRoutes.get('/', getUserHandler)
//  usersRoutes.get('/:id', getUserByIdHandler)
usersRoutes.post('/register', createUserHandler)
usersRoutes.post('/favorites', addFavorite)

module.exports = usersRoutes

