const{Users, Videogames} = require('../../db')

const deleteFavorite= async (idUser, idVideogames)=>{
    const user = await Users.findOne({where: {id: idUser}})
    const videoGame = await Videogames.findOne({where:{id: idVideogames}})
    if (!user) throw new Error('Usuario no encontrado');
    if (!videoGame) throw new Error('Juego no encontrado');
    await user.removeVideogames(videoGame);
}

module.exports= {deleteFavorite}