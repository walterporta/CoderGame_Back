const { Router } = require('express')
const emailRoute= Router()
const {emailRequiestSellerHandler, emailReportUserHandler} = require('../handlers/emailHandler')

 emailRoute.post('/request/seller', emailRequiestSellerHandler)
 emailRoute.post('/report/comment',emailReportUserHandler)

module.exports = emailRoute