const {Favorites, Videogames, Transactions} = require('../../db')
const {Op, col, fn} = require('sequelize')

const getAllBalance = async (startDate, finalDate) =>{
   finalDate? finalDate=finalDate:finalDate = new Date()
    startDate? startDate:startDate = new Date('2023-01-01')
    const allBuyVideogames = await Transactions.findAll({
        attributes: [
          [fn('SUM', col('amount')), 'totalAmount'],
          [fn('COUNT', col('id')), 'transactionCount'],
          [fn('AVG', col('amount')), 'averageAmount']
        ],
        where: {
          VideogameId: {
            [Op.ne]: null
          },
          date:{[Op.between]:[startDate,finalDate]}

        }      
    });

    return allBuyVideogames

}

module.exports = {getAllBalance}