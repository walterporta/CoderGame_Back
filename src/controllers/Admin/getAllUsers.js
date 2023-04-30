const { Users, Wallets } = require('../../db')
const verifyRol= require('../../helpers/verifyRol')
const {getSellerInfo} = require('./getSellerUser')

const getAllUsers = async (sub)=>{
    const rol = await verifyRol(sub)
    if(rol==='client' || rol ==='seller') throw new Error('you do not have access to this information')
    
    const users = await Users.findAll({

        include:{
            model:Wallets,
            attributes:['balance'],
        },
        required: false
    })
    const sellers = await getSellerInfo(users)
    
    return {sellers}
}

module.exports = {getAllUsers}