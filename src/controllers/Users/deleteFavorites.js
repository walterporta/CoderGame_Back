const{Users, Videogames, Favorites} = require('../../db')

const deleteFavorite= async (idUser, idVideogames)=>{
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