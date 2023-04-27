const{Users, Videogames, Favorites} = require('../../db')
const {validateRole} = require('../validateRole')

const addFavorite= async (idUser, idVideogames)=>{

 const role= await validateRole(idUser)

if(role === 'seller') throw new Error('only customers can add a game to cart')
    const existe = await Favorites.findOne({
      where:{VideogameId:idVideogames,UserSub:idUser }
        })

    if (existe) throw new Error(`this game is already found` )
    
    await Favorites.create({VideogameId:idVideogames, UserSub:idUser})

    return 'the game was added to the cart'
}

module.exports= {addFavorite}

