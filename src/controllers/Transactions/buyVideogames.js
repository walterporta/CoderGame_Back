const {Transactions, Wallets, Videogames, Users, Favorites, Promotions} = require('../../db')
const verifyRol = require('../../helpers/verifyRol')
const {Op}=require('sequelize')

const buyVideogames = async (idVideogame, idUser) =>{
  role = await verifyRol(idUser)
  

  if(role === 'seller'|| role==='admin') throw new Error('only customers can buy a game')

    const currentDate = new Date()
    const saldo = await Wallets.findOne({
        include: {
            model: Users,
            where: {sub:idUser} 
        }
    })
    let total = 0

    for(const game of idVideogame){
        const videogames = await Videogames.findOne({where:{id:game}});
     
        let addFavorites = await Favorites.findOne({where:{VideogameId:game, UserSub: idUser}});

         if(!addFavorites) addFavorites = await Favorites.create({VideogameId:game, UserSub: idUser});

         if(!addFavorites) addFavorites= await Favorites.create({VideogameId:game, UserSub: idUser});
         
         if(addFavorites.buy) throw new Error(`el juego ${videogames.name} ya fue comprado por este usuario`);
        const currentDate = new Date()
        const promo = await Promotions.findOne({where:{VideogameId:game, dueDate:{[Op.gt]: currentDate} }})
        let discount = 0
        if(promo){
          discount = videogames.price * (1 - promo.discountPorcentage /100)
        total=total+discount.toFixed(2)} else total = total + videogames.price
      }
      
      if(saldo.balance-total<0) throw new Error('the balance is insufficient')
 
      for (const game of idVideogame) {
        const videogame = await Videogames.findOne({where: {id: game}});
        const promo = await Promotions.findOne({where:{VideogameId:game, dueDate:{[Op.gt]: currentDate} }})
        let amount = videogame.price
        if(promo) amount =videogame.price * (1-promo.discountPorcentage/100)
        const buy = await Transactions.create({VideogameId: game, WalletId: saldo.id, amount: amount, VideogameId:game});

        await Favorites.update({buy: true}, {where: {VideogameId: game, UserSub: idUser}});
      }

    await Wallets.update({ balance: saldo.balance - total}, { where: { id: saldo.id } })

    return `The purchase was made successfully`

}

module.exports = {buyVideogames}