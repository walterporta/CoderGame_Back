const { Users, Favorites, Videogames } = require('../../db')

const getSellerInfo = async ( users )=>{
    let sellers = users.filter( (user)=> user.rol === 'seller' )

    sellers = sellers.map(async (seller)=>{
        const videogames = await Videogames.findAll({attributes: ['id', 'price'], where:{UserSub:seller.sub}})
        let totalSell = 0
        let totalBalance = 0
        videogames.forEach(async game => {
            console.log(game.price)
           let selGame = await Favorites.findAll({where:{VideogameId:game.id, buy:true}})
           console.log(selGame)
            totalSell = totalSell + selGame.length
            totalBalance = totalBalance + totalSell * game.price
        });
        console.log(totalSell, totalBalance)
            return {...seller, totalSell, totalBalance }
    })
    return sellers
}

module.exports = {getSellerInfo}