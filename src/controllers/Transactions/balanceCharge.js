const {Transactions, Wallets, Videogames, Users} = require('../../db')
const verifyRol = require('../../helpers/verifyRol')

const balanceCharge= async (idUser, amount) => {
    if(typeof amount === "string") amount = Number(amount)
    role = await verifyRol(idUser)
    if(role === 'seller'|| role==='admin') throw new Error('only customers can buy a game')

    const walletUser = await Wallets.findOne({where:{UserSub:idUser}})

    if(walletUser){
        await Wallets.update({ balance:walletUser.balance+amount },{where:{id:walletUser.id}})

        await Transactions.create({WalletId: walletUser.id, amount: amount});

        return `charged ${amount} to his wallet`
        }
        
    throw new Error('could not load balance')
    }

module.exports = {balanceCharge} 