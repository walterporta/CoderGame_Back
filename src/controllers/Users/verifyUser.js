const { Users } = require('../../db.js')
const bcrypt = require('bcryptjs')


const verifyUser= async (email,password)=>{
const responseEmail= Users.findOne({
    where:
    email
})

}