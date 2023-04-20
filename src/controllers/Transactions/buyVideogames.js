const {Transactions, Wallets, Videogames, Users, Favorites} = require('../../db')


const buyVideogames = async (idVideogame, idUser) =>{
    const saldo = await Wallets.findOne({
        include: {
            model: Users,
            where: {id:idUser}
        }
    })

    const videogames = await  Videogames.findOne({where:{id:idVideogame}})

    if(saldo.balance < videogames.price) throw new Error('no hay saldo suficiente')

    const buy = await Transactions.create({VideogameId:idVideogame, WalletId : saldo.id, amount: saldo.balance })

    await Wallets.update({ balance: saldo.balance - videogames.price }, { where: { id: saldo.id } })
    
    const favoriteBuy = Favorites.findOne({where:{UserId:idUser, VideogameId: idVideogame}})
    if(favoriteBuy && favoriteBuy.buy===true) throw new Error('Este juego ya se compro')

    await Favorites.update({buy: true}, {where: {UserId:idUser, VideogameId: idVideogame}})

    return `el juego ${videogames.name} ha sido añadido a su lista de adquiridos`

}

module.exports = {buyVideogames}