const {Users}=require('../../db')

const banUser = async (subUser, subAdmin, banDelet) =>{
    let ban
    const findUser = await Users.findOne({where:{sub:subUser}})
    
    findUser[banDelet]? ban=false: ban=true
    
    const user = await Users.update({[banDelet]:ban},{where:{sub:subUser}})

    return user
}

module.exports = {banUser}