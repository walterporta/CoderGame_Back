const { Videogames, Users, ComentariosV} = require('../../db')
const verifyRol = require('../../helpers/verifyRol')

const deleteComentarioV = async (id, sub) => {
    const rol = await verifyRol(sub)
    
    const coment = await ComentariosV.findOne({where:{UserSub:sub}})

    if(rol !== 'admin' && coment.UserSub !== sub)throw new Error('You are not authorized to delete this comment')

    const comentario = await ComentariosV.update({deleted: true},{where:{id:id}})
    console.log(comentario)
    return 'el comentario se elimino'
    
}


module.exports = {deleteComentarioV}