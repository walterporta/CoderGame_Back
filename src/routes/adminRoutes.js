const { Router } = require('express')
const adminRoute= Router()
const {getAllUsersHandler} = require('../handlers/adminHandler')

adminRoute.get('/allusers', getAllUsersHandler)


module.exports = adminRoute