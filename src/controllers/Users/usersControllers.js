const { Users } = require('../../db.js')
const bcrypt = require('bcryptjs')

const createNewUser = async ({id, name, nickname, email }) => {
   
    const newUser = await Users.create({ id, name, nickname, email })
    return newUser
}



module.exports = { createNewUser }
