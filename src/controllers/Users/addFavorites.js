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
    if(existe.length !== 0) throw new Error('ya tienes este videogame en favorites')
    const user = await Users.findOne({where: {id: idUser}})

    const videoGame = await Videogames.findOne({where:{id: idVideogames}})

    await user.addVideogames(videoGame)

    return `se agrego a la lista de favoritos el videogame ${videoGame.id}`
}

module.exports= {addFavorite}

