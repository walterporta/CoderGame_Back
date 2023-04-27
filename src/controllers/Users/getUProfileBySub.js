const { Users, Profile } = require('../../db')

const getProfileBySub = async (sub) =>{
    
    const userProfile = await Profile.findOne({where:{UserSub:sub}})

    return userProfile

}

module.exports = {getProfileBySub}