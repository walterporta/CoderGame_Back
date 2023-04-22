const {Transactions, Wallets, Videogames, Users} = require('../../db')

const balanceCharge= async (idUser, amount) => {
    
    const walletUser = await Wallets.findOne({where:{UserSub:idUser}})
    
    if(walletUser){
        await Wallets.update({ balance:walletUser.balance+amount },{where:{id:walletUser.id}})

        const buy = await Transactions.create({VideogameId: game, WalletId: walletUser.id, amount: amount});

        return 'se cargo saldo correctamente'
        }
    throw new Error('no se pudo cargar el saldo')
    }
    

// const balanceCharge= async (idUser, amount, state) => {
    
//     const walletUser = await Wallets.findOne({where:{UserId: state.sub}})
    
//     if(walletUser){
//         await Wallets.update({ balance: walletUser.balance + amount },{where:{id: walletUser.id}})
//         return 'se cargó saldo correctgitamente'
//     }
    
//     throw new Error('no se pudo cargar el saldo')
// }



module.exports = {balanceCharge} 