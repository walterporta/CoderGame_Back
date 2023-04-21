const { Users } = require('../../db.js')
const bcrypt = require('bcryptjs')

const createNewUser = async ({auth0Id, name, email }) => {
    console.log(email)
    const newUser = await Users.create({ auth0Id, name, email })
    return newUser
}



module.exports = { createNewUser }
