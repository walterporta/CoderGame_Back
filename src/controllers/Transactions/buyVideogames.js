const {Transactions, Wallets, Videogames, Users} = require('../../db')


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

    

    return `el juego ${videogames.name} ha sido añadido a su lista de adquiridos`

}

module.exports = {buyVideogames}