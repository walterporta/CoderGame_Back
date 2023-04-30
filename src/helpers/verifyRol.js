const { Users } = require('../db')
const verifyRol = async (sub) => {
    
    const response = await Users.findOne({
        where: {
            sub: sub,
            
        }
    
    })

    if (!response) {
        throw new Error('No se encontró ese usuario')
    }

    return response.rol
}

module.exports = {verifyRol}
