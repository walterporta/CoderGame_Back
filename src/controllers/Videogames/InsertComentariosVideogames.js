const {ComentariosV, Users} = require('../../db')
const verifyRol = require('../../helpers/verifyRol')

const insertComentarioV = async (sub, idVideogame, comentario) =>{

    
    if(!sub||!idVideogame||!comentario) throw new Error('missing parameters.')
    const user = await Users.findOne({where:{sub:sub}})
    if(user.banned) throw new Error('your account has been banned you can not make a review')

    const coment = await ComentariosV.findOne({where:{ UserSub:sub, deleted:false, VideogameId:idVideogame }})
    if(coment) throw new Error('You can only leave one message per game.')


    const messsage = await ComentariosV.create({message:comentario, UserSub: sub,VideogameId:idVideogame})


    return messsage

}

module.exports = { insertComentarioV }

