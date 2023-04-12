const { Router } = require('express')



const usersRoutes = Router()

usersRoutes.get('/', getUserHandler)
usersRoutes.get('/:id', getUserByIdHandler)
usersRoutes.post('/', createUserHandler)



module.exports = usersRoutes