const { Users, Videogames, Favorites } = require('../../db.js')
const infoVentasEmpresa = async (id) => {
    const listGames = await Users.findByPk(id, {
        include: [{ model: Videogames }]
    })

    return listGames

}

module.exports = { infoVentasEmpresa }