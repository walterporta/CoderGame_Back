const{Users, Videogames, Favorites} = require('../../db')

const addFavorite= async (idUser, idVideogames)=>{



    const existe = await Favorites.findOne({
      where:{VideogameId:idVideogames,UserSub:idUser }
        })

    if (existe) throw new Error(`this game is already found` )
    
    await Favorites.create({VideogameId:idVideogames, UserSub:idUser})

    return 'the game was added to the cart'
}

module.exports= {addFavorite}

