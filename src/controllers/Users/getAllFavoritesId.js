const{Wallets, Videogames, Favorites} = require('../../db')


const getAllFavorites = async (id, buy)=>{
    let listFavorites = await Favorites.findAll({
        where:{UserSub: id, buy:buy},
        include:{
            model: Videogames,
            attributes: ['id', 'name','image','description','released','price'],
        }
    })
    
    let total = 0
    listFavorites?.forEach((fav)=> {
        total=total+fav.dataValues.Videogame.dataValues.price
    })

    const balance = await Wallets.findOne( {
        attributes:['balance'],
        where:{UserSub:id}
    })

    if(!listFavorites) throw new Error('You have no favorite games')
    listFavorites = listFavorites.map(fav=> {
        return fav.Videogame
    })
    return {listFavorites, balance:balance, total:total}
}

module.exports = {getAllFavorites}