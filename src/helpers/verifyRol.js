const { Users } = require('../db')
const verifyRol = async (email) => {
    const response = await Users.findOne({
        where: {
            email: email
        }
    })

    if (!response) {
        throw new Error('No se encontró ningún usuario con ese email')
    }

    return response.rol
}

module.exports = verifyRol
