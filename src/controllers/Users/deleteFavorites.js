const{Users, Videogames, Favorites} = require('../../db')

const deleteFavorite= async (idUser, idVideogames)=>{
      const gameFav = await Favorites.findOne({where:{VideogameId: idVideogames, UserId: idUser}})
  if(gameFav.buy ===true) throw new Error('este juego esta comprado, no se puede eliminar')
      const result = await Favorites.destroy({
        where: { VideogameId: idVideogames, UserId: idUser }
      });

      if (result === 1) {
        return 'Se elimino correactamente';
      } else {
        throw new Error('No se encontró el registro en la tabla Favorites.');
      }
    
}

module.exports= {deleteFavorite}