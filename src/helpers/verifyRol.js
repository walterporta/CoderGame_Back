const { Users } = require('../db')
const verifyRol = async (sub) => {
    
    const response = await Users.findOne({
        where: {
            sub: sub,
            
        }
    
    })

    if (!response) {
        throw new Error('No user found')
    }

    return response.rol
}

module.exports = verifyRol
