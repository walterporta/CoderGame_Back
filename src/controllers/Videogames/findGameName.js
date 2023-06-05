const { Videogames, Genregames, Platforms, ComentariosV, Promotions, Favorites } = require('../../db')
const { Op } = require('sequelize')
const {searchApi } = require('../ApyAndDb/getApiData')


const findGameName = async (name, genre, platforms, promotion, sub, orderBy, ascDesc) => {
  console.log(orderBy, ascDesc)  
  let findGame = []
    const currentDate = new Date()
  var option = [orderBy, ascDesc]

     findGame = await Videogames.findAll({
      attributes:['id','name', 'released', 'rating','description','image', 'deleted', 'price'],
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
              required: genre?true:false
            },
            {
              model: Platforms,
              attributes: ['id', 'name'],
              where: {
                name: platforms ? { [Op.iLike]: `%${platforms}%` } : { [Op.ne]: null }              },
              through: {
                attributes: []
              },
              required: platforms?true:false
            },
            {
              model: Promotions,
              attributes:['discountPorcentage'],
              where:{dueDate:{[Op.gt]: currentDate}},
              required:promotion?true: false
            },
            {
              model: Favorites,
              attributes:['buy'],
              where: {UserSub:sub?sub:null},
              required:false
            }

          ],
          order:[option]
          
        })
    return findGame
}
 
module.exports = {
    findGameName
}
 
