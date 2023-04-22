const{Users, Videogames, Favorites} = require('../../db')


const getAllFavorites = async (id)=>{
    let listFavorites = await Favorites.findAll({
        where:{UserSub: id, buy:false},
        include:{
            model: Videogames,
            attributes: ['id', 'name','image','description','released','price'],
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