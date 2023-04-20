const {Transactions, Wallets, Videogames, Users} = require('../../db')

const balanceCharge = async (idUser, input) => {

        const saldo = await Wallets.findOne({where:{Userid:UserId}})
}