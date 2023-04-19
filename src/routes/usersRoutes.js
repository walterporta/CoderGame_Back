const { Router } = require('express')
const { createUserHandler, addFavorite,loginHandler } = require('../handlers/usersHandlers.js')



const usersRoutes = Router()

 usersRoutes.get('/login', loginHandler)
//  usersRoutes.get('/:id', getUserByIdHandler)
usersRoutes.post('/register', createUserHandler)
usersRoutes.post('/favorites', addFavorite)

module.exports = usersRoutes

