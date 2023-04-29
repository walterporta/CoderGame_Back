const { Videogames, Genregames } = require('../db')
const { Op, where } = require('sequelize')


const findGameName = async (name) => {


    let findGame = []
    if (!name) {
        findGame = await Videogames.findAll({
            include: [{
                model: Genregames,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                } // nombre del campo que quieres recuperar
            }],
            where: {
                deleted: false
            }
        })

    } else {
        findGame = await Videogames.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` }
            },
            include: [{
                model: Genregames,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                } // nombre del campo que quieres recuperar
            }]
        })
    }

    return findGame
}


module.exports = {
    findGameName
}

