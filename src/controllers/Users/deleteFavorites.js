const{Users, Videogames, Favorites} = require('../../db')

const deleteFavorite= async (idUser, idVideogames)=>{
      const gameFav = await Favorites.findOne({where:{VideogameId: idVideogames, UserSub: idUser}})
  if(gameFav.buy ===true) throw new Error('This game is purchased, it cannot be deleted')
      const result = await Favorites.destroy({
        where: { VideogameId: idVideogames, UserSub: idUser }
      });

      if (result === 1) {
        return 'Deleted correctly';
      } else {
        throw new Error('The record was not found in the Favorites table');
      }
    
}

module.exports= {deleteFavorite}