const {Transactions, Wallets, Videogames, Users} = require('../../db')

const balanceCharge= async (idUser, amount) => {
    
    const walletUser = await Wallets.findOne({where:{UserSub:idUser}})
    
    if(walletUser){
        await Wallets.update({ balance:walletUser.balance+amount },{where:{id:walletUser.id}})
        return 'se cargo saldo correctamente'
        }
    throw new Error('no se pudo cargar el saldo')
    }
    

// const balanceCharge= async (idUser, amount, state) => {
    
//     const walletUser = await Wallets.findOne({where:{UserId: state.sub}})
    
//     if(walletUser){
//         await Wallets.update({ balance: walletUser.balance + amount },{where:{id: walletUser.id}})
//         return 'se cargó saldo correctamente'
//     }
    
//     throw new Error('no se pudo cargar el saldo')
// }



module.exports = {balanceCharge}