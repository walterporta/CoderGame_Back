const { Router } = require('express')
const adminRoute= Router()
const {getAllUsersHandler, banUserHandler} = require('../handlers/adminHandler')

adminRoute.get('/allusers', getAllUsersHandler)
adminRoute.put('/banned', banUserHandler)

module.exports = adminRoute