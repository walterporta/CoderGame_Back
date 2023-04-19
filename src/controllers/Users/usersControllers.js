const { Users } = require('../../db.js')
const bcrypt = require('bcryptjs')

const createNewUser = async ({ name, username, lastname, email, password, gender, typerUser, address }) => {
    const hashpassword = bcrypt.hashSync(password, 10)
    const newUser = await Users.create({ name, username, lastname, email, password: hashpassword, gender, typerUser, address })
    return newUser
}



module.exports = { createNewUser }
