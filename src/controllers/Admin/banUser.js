const {Users}=require('../../db')

const banUser = async (subUser, subAdmin) =>{
    let ban
    const findUser = await Users.findOne({where:{sub:subUser}})
    
    findUser.banned? ban=false: ban=true

    const user = await Users.update({banned:ban},{where:{sub:subUser}})

    return user
}

module.exports = {banUser}