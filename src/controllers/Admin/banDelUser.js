const {Users}=require('../../db')
const verifyRol = require('../../helpers/verifyRol')

const banDelUser = async (subUser, subAdmin, banDelet) =>{
    const rol = await verifyRol(subAdmin)
    console.log(rol)
    if(rol !== 'admin') throw new Error('you must be admin')

    let bannedDeleted
    const findUser = await Users.findOne({where:{sub:subUser}})
    
    findUser[banDelet]? bannedDeleted=false: bannedDeleted=true
    
    const user = await Users.update({[banDelet]:bannedDeleted},{where:{sub:subUser}})

    return user
}

module.exports = {banDelUser}