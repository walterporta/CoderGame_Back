const { Users, Favorites, Videogames } = require('../../db')

const getSellerInfo = async ( users )=>{
    let sellers = users.filter( (user)=> user.rol === 'seller' )
    sellers = sellers.map((sell) => {
        const { Wallet, ...sellerWithoutWallets } = sell.toJSON()
        return sellerWithoutWallets
      })

    sellers = sellers.map(async (seller)=>{
        const videogames = await Videogames.findAll({attributes: ['id', 'price'], where:{UserSub:seller.sub}})
        let totalSell = 0
        let totalBalance = 0
        await Promise.all(videogames.map(async (game) => {
            let selGame = await Favorites.findAll({ where: { VideogameId: game.id, buy: true } })
            totalSell += selGame.length
            totalBalance += selGame.length * game.price
        }))
        return { ...seller, totalSell, totalBalance }
    })
    
    const sellerData = await Promise.all(sellers);

    return sellerData
}

module.exports = {getSellerInfo}