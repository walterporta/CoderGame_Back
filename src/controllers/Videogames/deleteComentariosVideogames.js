const { Videogames, Users, ComentariosV} = require('../../db')

const deleteComentarioV = async (id) => {
    
    const comentario = await ComentariosV.update({eliminate:true},{where:{id:id}})

    return 'el comentario se elimino'
    
}


module.exports = {deleteComentarioV}