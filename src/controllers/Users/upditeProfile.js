const { Profile } = require('../../db')

const upditeProfile = async (sub, {image, coverImage, linkYoutube, description}) =>{

    if(!sub) throw new Error('Ingrese el sub del profile')

    const update = {}

    if(image) update.image = image
    if(coverImage) update.coverImage = coverImage
    if(linkYoutube) update.linkYoutube = linkYoutube
    if(description) update.description = description

    const upProfile = await Profile.update(update, {where:{UserSub:sub}})

    return upProfile
}

module.exports = { upditeProfile }