const { Router } = require('express')
const emailRoute= Router()
const {emailRequiestSellerHandler, emailReportUser} = require('../handlers/emailHandler')

 emailRoute.post('/request/seller', emailRequiestSellerHandler)
 emailRoute.post('report/comment',emailReportUser)

module.exports = emailRoute