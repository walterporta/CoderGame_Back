const { Router } = require('express')
const adminRoute= Router()
const {getAllUsersHandler, getAllVideogamesHandler, banUserHandler, deleteUserHandler, getAllBalanceHandler} = require('../handlers/adminHandler')

adminRoute.get('/allusers', getAllUsersHandler)
adminRoute.put('/banned', banUserHandler)
adminRoute.delete('/delete', deleteUserHandler )
adminRoute.get('/allvideogames', getAllVideogamesHandler)
adminRoute.get('/balance', getAllBalanceHandler)


module.exports = adminRoute