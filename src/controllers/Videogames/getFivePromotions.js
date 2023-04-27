const { Promotions } = require('../../db')
const {Op} = require('sequelize')

const getFivePromotions = async ()=>{

    const currentDate = new Date()
    const listDiscount = await Promotions.findAll({
        where: {
            dueDate: {
            [Op.gt]: currentDate 
          }
        },
        order: [['dueDate', 'ASC']], 
        limit: 5
      });
      
      return listDiscount
}

module.exports = { getFivePromotions }
