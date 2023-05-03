const { Router } = require('express')
const adminRoute= Router()
const {getAllTransactionsHandler, getAllUsersHandler, getAllVideogamesHandler, banUserHandler, deleteUserHandler, getAllBalanceHandler} = require('../handlers/adminHandler')

adminRoute.get('/allusers/:sub', getAllUsersHandler)
adminRoute.put('/banned', banUserHandler)
adminRoute.put('/delete', deleteUserHandler )
adminRoute.get('/allvideogames/:sub', getAllVideogamesHandler)
adminRoute.put('/balance/:sub', getAllBalanceHandler)
adminRoute.get('/transactions/:sub', getAllTransactionsHandler)

module.exports = adminRoute