const { Promotions, Videogames } = require('../../db')
const {Op} = require('sequelize')

const getFivePromotions = async ()=>{

    const currentDate = new Date()
    const listDiscount = await Promotions.findAll({
        where: {
            dueDate: {
            [Op.gt]: currentDate 
          }
        },
        include: {
          model: Videogames,
          attributes: ['image']
        },
        order: [['dueDate', 'ASC']], 
        limit: 5
      });
      
      return listDiscount
}

module.exports = { getFivePromotions }
