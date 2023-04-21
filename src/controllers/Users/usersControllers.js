const { Users } = require('../../db.js')
//const bcrypt = require('bcryptjs')

<<<<<<< HEAD
const createNewUser = async ({id, name, nickname, email }) => {
   
    const newUser = await Users.create({ id, name, nickname, email })
=======
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
>>>>>>> edbe74cadc5f51ce1c086718542a735f2cbb12f0
    return newUser
}



module.exports = { createNewUser }
