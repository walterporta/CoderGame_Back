const { Router } = require('express')
const emailRoute= Router()
const {emailRequiestSellerHandler} = require('../handlers/emailHandler')

 emailRoute.post('/request/seller', emailRequiestSellerHandler)


module.exports = emailRoute