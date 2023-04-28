const { Videogames, Genregames, Platforms, ComentariosV, Promotions } = require('../../db')
const { Op } = require('sequelize')
const {searchApi } = require('../ApyAndDb/getApiData')


const findGameName = async (name, genre, platforms, promotion) => {
    let findGame = []
    const currentDate = new Date()

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
            },
            {
              model: Promotions,
              attributes:['discountPorcentage'
            ],
              where:{dueDate:{[Op.gt]: currentDate}},
              required:promotion?true: false
            }
          ]
    })

    return findGame
}


module.exports = {
    findGameName
}

