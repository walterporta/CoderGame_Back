const { Users, Wallets, Profile } = require('../../db.js')
const { message } = require('../message/message.js')
require('dotenv').config();

const { USER_ADMIN } = process.env


const createNewUser = async ({ sub, name, email }) => {

    const user = await Users.findOne({ where: { sub: sub } })
     email = email.toLowerCase();
    if (!user) {
        message(email, name)
    }


    let objuser = {
        sub,
        name,
        email
    }


    if (objuser.email === USER_ADMIN) {
        objuser.rol = 'admin'
    }


    const [newUser, created] = await Users.findOrCreate({
        where: {
            sub: sub
        },
        defaults: objuser
    })

    const findWallets = await Wallets.findOne({ where: { UserSub: sub } })
    const findProfile = await Profile.findOne({ where: { UserSub: sub } })
    if (!findWallets) await Wallets.create({ UserSub: sub })
    if (!findProfile) await Profile.create({ UserSub: sub })

    return newUser
}
 

module.exports = { createNewUser }
