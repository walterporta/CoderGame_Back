const { Users } = require('../../db.js')

const createNewUser = async ({ username, name, lastname, email, password, gender, typeUser, address }) => {
    const newUser = await Users.create({ username, name, lastname, email, password, gender, typeUser, address })

    return newUser

}
module.exports = { createNewUser }