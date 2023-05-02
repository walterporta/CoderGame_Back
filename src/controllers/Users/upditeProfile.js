const { Profile } = require('../../db')

const upditeProfile = async (sub, {image, coverImage, linkYoutube, description, nickname}) =>{

    if(!sub) throw new Error('Enter the sub of the profile')

    const update = {}

    if(image) update.image = image
    if(coverImage) update.coverImage = coverImage
    if(linkYoutube) update.linkYoutube = linkYoutube
    if(description) update.description = description
    if(nickname) {
        const existingProfile = await Profile.findOne({ where: { nickname } })
        if (existingProfile) {
            throw new Error('The nickname is already in use by another profile')
        }
        update.nickname = nickname
    }
    const upProfile = await Profile.update(update, {where:{UserSub:sub}})

    return upProfile
}

module.exports = { upditeProfile }
