const {Transactions, Wallets, Videogames, Users, Favorites} = require('../../db')


const buyVideogames = async (idVideogame, idUser) =>{
    const saldo = await Wallets.findOne({
        include: {
            model: Users,
            where: {id:idUser}
        }
    })

    const videogames = await  Videogames.findOne({where:{id:idVideogame}})
    const addFavorites = await Favorites.findOne({where:{VideogameId:idVideogame, UserId: idUser}})
    if(saldo.balance < videogames.price) throw new Error('no hay saldo suficiente')
    if(!addFavorites) await Favorites.create({VideogameId:idVideogame, UserId: idUser})
    const buy = await Transactions.create({VideogameId:idVideogame, WalletId : saldo.id, amount: videogames.price })

    await Wallets.update({ balance: saldo.balance - videogames.price }, { where: { id: saldo.id } })
    await Favorites.update({buy: true}, {where:{VideogameId:idVideogame, UserId: idUser}})

    return `el juego ${videogames.name} ha sido añadido a su lista de adquiridos`

}

module.exports = {buyVideogames}