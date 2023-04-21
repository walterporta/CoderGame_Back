const {Transactions, Wallets, Videogames, Users, Favorites} = require('../../db')


const buyVideogames = async (idVideogame, idUser) =>{

    const saldo = await Wallets.findOne({
        include: {
            model: Users,
            where: {sub:idUser}
        }
    })
    let total = 0
    idVideogame.forEach(async (game)=>{
        const videogames = await  Videogames.findOne({where:{id:game}})
        console.log(videogames)
        const addFavorites = await Favorites.findOne({where:{VideogameId:game, UserId: idUser}})
        if(!addFavorites) await Favorites.create({VideogameId:game, UserId: idUser})

        if(addFavorites.buy) throw new Error(`el juego ${videogames.name} ya fue comprado por este usuario`)

        total = total+videogames.price
    })


    if(saldo.balance < total) throw new Error('no hay saldo suficiente')
    idVideogame.forEach(async (game)=>{
        const videogames = await  Videogames.findOne({where:{id:game}})
        const buy = await Transactions.create({VideogameId:game, WalletId : saldo.id, amount: videogames.price })
        await Favorites.update({buy: true}, {where:{VideogameId:game, UserId: idUser}})

    })

    await Wallets.update({ balance: saldo.balance - total}, { where: { id: saldo.id } })


    return `Se realizo la compra de forma exitosa`

}

module.exports = {buyVideogames}