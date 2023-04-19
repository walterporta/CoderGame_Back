const { Users } = require('../../db.js')

const createNewUser = async ({ name, username, lastname, email, password, gender, typerUser, address }) => {
    const newUser = await Users.create({ name, username, lastname, email, password, gender, typerUser, address })
    return newUser
}

module.exports = { createNewUser }
