const { Users, Wallets, Transactions } = require('../../db')


const getUserByTransaction = async (userId) => {
    try {
      const user = await Users.findOne({
        where: { sub: userId },
        include: [
          {
            model: Wallets,
            include: {
              model: Transactions
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
  