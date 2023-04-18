const { getUserHandler, getUserByIdHandler, createUserHandler } = require('../handlers/usersHandlers.js')

const { Router } = require('express')



const usersRoutes = Router()

usersRoutes.get('/', getUserHandler)
usersRoutes.get('/:id', getUserByIdHandler)
usersRoutes.post('/register', createUserHandler)



module.exports = usersRoutes