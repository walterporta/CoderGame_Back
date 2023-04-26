const { Users, Profile } = require('../../db')

const getUserBySub = async (sub) =>{

    const userProfile = await Profile.findOne({where:{UserSub:sub}})


    return userProfile

}

module.exports = {getUserBySub}