const { Router } = require('express')
const adminRoute= Router()
const {getAllUsersHandler, banUserHandler, deleteUserHandler} = require('../handlers/adminHandler')

adminRoute.get('/allusers', getAllUsersHandler)
adminRoute.put('/banned', banUserHandler)
adminRoute.delete('/delete', deleteUserHandler )


module.exports = adminRoute