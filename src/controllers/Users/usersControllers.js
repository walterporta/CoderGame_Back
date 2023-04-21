const { Users, Wallets } = require('../../db.js')

//const bcrypt = require('bcryptjs')

const createNewUser = async ({ sub, name, email }) => {
    // if (!sub) {
    //     throw new Error('El valor de sub es inválido')
    // }

    const objuser = {
        sub,
        name,
        email
    }
    const [newUser, created] = await Users.findOrCreate({
        where: {
            sub: sub
        },
        defaults: objuser
    })
    if (created) console.log('creado');
    else console.log('ya existe');
    Wallets.create({UserSub: sub})
    return newUser
}



module.exports = { createNewUser }
