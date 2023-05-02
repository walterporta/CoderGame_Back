const { Users, Wallets, Transactions } = require('../../db')
const { col, fn} = require('sequelize')

const getUserByTransaction = async (userId) => {
    try {
      const user = await Users.findOne({
        where: { sub: userId },
        include: [
          {
            model: Wallets,

            include: {
              model: Transactions,
              attributes:[
                [fn('to_char', col('date'), 'YYYY-MM-DD'), 'date'],
                'amount',
               'VideogameId',
               ]
            }
          },
        ],
      });
      return user;
    } catch (error) {
      throw new Error(`Error al cargar el usuario y sus transacciones: ${error.message}`);
    }
  };
  
  module.exports = { getUserByTransaction };
  