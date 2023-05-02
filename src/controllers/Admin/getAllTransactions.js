const {Transactions, Wallets, Videogames} = require('../../db')

const getAllTransactions = async (sub) =>{
   
    const allTransactions = await Transactions.findAll({
        include:[{
            model: Wallets,
            attributes: ['UserSub']
        },
        {
            model:Videogames,
            attributes:["name"]
        }]
    })
    console.log(allTransactions)
    return allTransactions
} 

module.exports = {getAllTransactions}