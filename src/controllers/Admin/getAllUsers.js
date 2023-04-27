const { Users } = require('../../db')
const verifyRol= require('../../helpers/verifyRol')

const getAllUsers = async (sub)=>{
    
    const rol = await verifyRol(sub)

    if(rol==='client' || rol === 'seller') throw new Error('you do not have access to this information')
    const users = await Users.findAll()

    return users
}

module.exports = {getAllUsers}