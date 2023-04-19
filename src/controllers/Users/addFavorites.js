const{Users, Videogames} = require('../../db')

const addFavorite= async (idUser, idVideogames)=>{
    const existe = await Users.findOne({
        include: {
              model: Videogames,
              attributes: ['id'],
              where: {
                id:idVideogames
              },
              through: {
                attributes: []
              }
            }
        })
        console.log(existe) 
    if (existe) throw new Error(`ya agrego el juego con id ${idVideogames}` )

    const user = await Users.findOne({where: {id: idUser}})

    const videoGame = await Videogames.findOne({where:{id: idVideogames}})

    await user.addVideogames(videoGame)

    return 'el juego se creo'
}

module.exports= {addFavorite}

