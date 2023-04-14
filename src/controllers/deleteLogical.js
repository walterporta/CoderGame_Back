const { Videogames } = require('../db.js')
const deleteLogical = async (id) => {

    const response = await Videogames.findByPk(id)
    response.deleted = true;
    return response.save()
}
module.exports = { deleteLogical }