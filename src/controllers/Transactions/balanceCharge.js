const {Transactions, Wallets, Videogames, Users} = require('../../db')

const balanceCharge= async (idUser, amount) => {

    const walletUser = await Wallets.findOne({where:{UserId:idUser}})
    
    if(walletUser){
        await Wallets.update({ balance:walletUser.balance+amount },{where:{id:walletUser.id}})
    }
    

    return 'se cargo saldo correctamente'
}

module.exports = {balanceCharge}