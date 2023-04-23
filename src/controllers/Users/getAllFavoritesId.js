const{Users, Videogames, Favorites} = require('../../db')


const getAllFavorites = async (id, buy)=>{
    let listFavorites = await Favorites.findAll({
        where:{UserSub: id},
        include:{
            model: Videogames,
            attributes: ['id', 'name'],
        }
    })
    console.log(listFavorites)
    if(!listFavorites) throw new Error('No tiene juegos en favoritos')
    listFavorites = listFavorites.map(fav=> {
        return fav.Videogame
    })
    return listFavorites
}

module.exports = {getAllFavorites}