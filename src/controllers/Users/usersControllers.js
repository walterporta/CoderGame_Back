const { Users, Wallets } = require('../../db.js')

const createNewUser = async ({ sub, name, email }) => {


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
