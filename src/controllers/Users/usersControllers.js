const { Users, Wallets, Profile } = require('../../db.js')
const { message } = require('../message/message.js')
require('dotenv').config();

const { USER_ADMIN } = process.env


const createNewUser = async ({ sub, name, email }) => {

    const user = await Users.findOne({ where: { sub: sub } })
    if (!user){ 
        message(email, name)
    }


    let objuser = {
        sub,
        name,
        email
    }

    if (objuser.email === 'roderickrodriguez706@gmail.com') {
    if (objuser.email === USER_ADMIN) {
        objuser.rol = 'admin'
    }}


    const [newUser, created] = await Users.findOrCreate({
        where: {
            sub: sub
        },
        objuser
    })

    const findWallets = await Wallets.findOne({ where: { UserSub: sub }})
    const findProfile = await Profile.findOne({where:{UserSub:sub}})
    if (!findWallets) await Wallets.create({ UserSub: sub})
    if (!findProfile) await Profile.create({UserSub: sub})
    
    return newUser
}



module.exports = { createNewUser }
