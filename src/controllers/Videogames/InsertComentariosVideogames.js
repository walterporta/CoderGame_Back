const { Videogames, Users, ComentariosV} = require('../../db')

const insertComentarioV = async (sub, idVideogame, comentario) =>{

    if(!sub||!idVideogame||!comentario) throw new Error('faltan parametros')

    const coment = await ComentariosV.findOne({where:{ UserSub:sub, eliminate:false,  }})
    if(coment) throw new Error('solo se puede dejar un mensaje por videojuego')

    const messsage = await ComentariosV.create({message:comentario, UserSub: sub,VideogameId:idVideogame})

    return messsage

}

module.exports = { insertComentarioV }

