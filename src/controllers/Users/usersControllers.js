const { Users, Wallets } = require('../../db.js')
const { message } = require('../message/message.js')

const createNewUser = async ({ sub, name, email }) => {
    console.log('acatoy')
    const user = await Users.findOne({ where: { sub: sub } })
    if (!user) message(email, name)
    

    let objuser = {
        sub,
        name,
        email
    }
    if (objuser.email === 'roderickrodriguez706@gmail.com') {
        objuser.rol = 'admin'
    }


    const [newUser, created] = await Users.findOrCreate({
        where: {
            sub: sub
        },
        defaults: objuser
    })
    if (created) console.log('creado');
    else console.log('ya existe');

    const findWallets = await Wallets.findOne({ where: { UserSub: sub } })

    if (!findWallets) await Wallets.create({ UserSub: sub })

    return newUser
}



module.exports = { createNewUser }
