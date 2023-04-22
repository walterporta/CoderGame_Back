const {Transactions, Wallets, Videogames, Users, Favorites} = require('../../db')


const buyVideogames = async (idVideogame, idUser) =>{
    const saldo = await Wallets.findOne({
        include: {
            model: Users,
            where: {sub:idUser} 
        }
    })
    let total = 0

    for(const game of idVideogame){
        const videogames = await Videogames.findOne({where:{id:game}});
        console.log(videogames.price)
        let addFavorites = await Favorites.findOne({where:{VideogameId:game, UserSub: idUser}});
         if(!addFavorites) addFavorites= await Favorites.create({VideogameId:game, UserSub: idUser});
         if(addFavorites.buy) throw new Error(`el juego ${videogames.name} ya fue comprado por este usuario`);
        total = total + videogames.price;
      }
      
      if(saldo.balance-total<0) throw new Error('el saldo es insuficiente')

      for (const game of idVideogame) {
        const videogame = await Videogames.findOne({where: {id: game}});
        const buy = await Transactions.create({VideogameId: game, WalletId: saldo.id, amount: videogame.price, VideogameId:game});
        await Favorites.update({buy: true}, {where: {VideogameId: game, UserSub: idUser}});
      }

    await Wallets.update({ balance: saldo.balance - total}, { where: { id: saldo.id } })


    return `Se realizo la compra de forma exitosa`

}

module.exports = {buyVideogames}