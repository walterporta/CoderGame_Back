const { Videogames, Genregames, Platforms, ComentariosV } = require('../../db')
const { Op, where } = require('sequelize')
const {searchApi } = require('../ApyAndDb/getApiData')


const findGameName = async (name, genre, platforms) => {
    let findGame = []

     findGame = await Videogames.findAll({
        where:{
            [Op.and]:[name?{name: {[Op.iLike]: `%${name}%`}}:null ],
            deleted: false,
        
        },
         include: [
            {
              model: Genregames,
              attributes: ['id', 'name'],
              where: {
                name: genre ? genre : { [Op.ne]: null }
              },
              through: {
                attributes: []
              },
              required: true
            },
            {
              model: Platforms,
              attributes: ['id', 'name'],
              where: {
                name: platforms ? { [Op.iLike]: `%${platforms}%` } : { [Op.ne]: null }              },
              through: {
                attributes: []
              },
              required: true
            }
          ]
    })    

    return findGame
}


module.exports = {
    findGameName
}

