const {Users} = require('../../db')

const deleteUser = async (subUser, subAdmin) =>{
    const deleteU = await Users.update({deleted:true})

}