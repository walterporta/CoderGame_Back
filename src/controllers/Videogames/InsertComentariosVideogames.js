const { Videogames, Users, ComentariosV} = require('../../db')

const insertComentarioV = async (sub, idVideogame, comentario) =>{
    console.log(comentario)
    if(!sub||!idVideogame||!comentario) throw new Error('faltan parametros')

    const messsage = await ComentariosV.create({message:comentario, UserSub: sub,VideogameId:idVideogame})

    return messsage

}

module.exports = { insertComentarioV }

