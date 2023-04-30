const { Videogames } = require('../../db')
const  verifyRol  = require('../../helpers/verifyRol.js')

const deleteLogical = async (id, sub) => {
const rol = await verifyRol(sub)
    const response = await Videogames.findByPk(id)
    if(rol !== 'admin' && sub !== response.UserSub ) throw new Error('you are not authorized to delete the videogame')
    response.deleted = !response.deleted;
    return response.save()
}
module.exports = { deleteLogical } 