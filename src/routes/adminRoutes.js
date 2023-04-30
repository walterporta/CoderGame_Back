const { Router } = require('express')
const adminRoute= Router()
const {getAllUsersHandler, getAllVideogamesHandler, banUserHandler, deleteUserHandler, getAllBalanceHandler} = require('../handlers/adminHandler')

adminRoute.get('/allusers/:sub', getAllUsersHandler)
adminRoute.put('/banned', banUserHandler)
adminRoute.delete('/delete', deleteUserHandler )
adminRoute.get('/allvideogames/:sub', getAllVideogamesHandler)
adminRoute.get('/balance/:sub', getAllBalanceHandler)


module.exports = adminRoute