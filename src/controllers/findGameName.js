const { Videogames, Genregames } = require('../db')
const { Op } = require('sequelize')



const findGameName = async (name) =>{


    let findGame = []
    if (!name) {
        findGame = await Videogames.findAll({
            include: [{
                model: Genregames,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                } // nombre del campo que quieres recuperar
            }]
        })

    } else {
        findGame = await Videogames.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` }
            },
            include: Genregames
        })
    }

    return findGame
}


module.exports = {
    findGameName
}
 
