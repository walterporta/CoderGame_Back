const { Router } = require('express')
const adminRoute= Router()
const {getAllUsersHandler, getAllVideogamesHandler, banUserHandler, deleteUserHandler} = require('../handlers/adminHandler')

adminRoute.get('/allusers', getAllUsersHandler)
adminRoute.put('/banned', banUserHandler)
adminRoute.delete('/delete', deleteUserHandler )
adminRoute.get('/allvideogames', getAllVideogamesHandler)


module.exports = adminRoute