const { Videogames, Users, ComentariosV} = require('../../db')

const deleteComentarioV = async (id) => {

    const comentario = await ComentariosV.destroy({where:{id:id}})

    return 'el comentario se elimino'
    
}


module.exports = {deleteComentarioV}