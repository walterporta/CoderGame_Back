const { Users, Wallets } = require('../../db.js')

const createNewUser = async ({ name, username, lastname, email, password, gender, typerUser, address }) => {
    const newUser = await Users.create({ name, username, lastname, email, password, gender, typerUser, address })
    const newWallet = await Wallets.create({ UserId: newUser.id })
    return newUser
}

module.exports = { createNewUser }
