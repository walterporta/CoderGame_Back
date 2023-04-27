const { Users } = require('../db')

const validateRole = async(sub)=>{
    const user = await Users.findOne({where:{sub:sub}})
    const rol = user.rol
    return rol
}

module.exports = {validateRole}