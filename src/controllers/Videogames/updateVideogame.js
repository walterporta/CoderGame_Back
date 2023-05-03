const { Videogames, Genregames, Platforms } = require('../../db')

const updateVideogames = async (id, { name, released, genres,  platforms, description, image, price, gameLink }) => {

  if (!id || isNaN(id)) {
    throw new Error('You must provide a valid ID');
  }

  if (!name && !released && !genres && !platforms && !description && !image && !price && !gameLink) {
    throw new Error('You must provide at least one parameter to modify the game');
  }
  
  const videoGame = await Videogames.findByPk(id)

  if (!videoGame) {
    throw new Error(`Game with ID ${id} does not exist`)
  }

  if (name) { videoGame.name = name }

  if (released) { videoGame.released = released }

  if (description) { videoGame.description = description }

  if (image) { videoGame.image = image }

  if (price) { videoGame.price = price }

  if (gameLink) { videoGame.gameLink = gameLink }

  if (genres) {
    const objGenres = []
    for (const genre of genres) {
      const genreObject = await Genregames.findOne({
        where: {
          name: genre
        }
      })
      if (!genreObject) {
        throw new Error(`The genre ${genre} does not exist`)
      }
      objGenres.push(genreObject)
    }
    await videoGame.setGenregames(objGenres)
  }

  if (platforms) {
    const objPlatforms = []
    for (const platform of platforms) {
      const platformObject = await Platforms.findOne({
        where: {
          name: platform
        }
      })
      if (!platformObject) {
        throw new Error(`Platform ${platform} does not exist`)
      }
      objPlatforms.push(platformObject)
    }
    await videoGame.setPlatforms(objPlatforms)
  }

  await videoGame.save()

  return videoGame
  
}

module.exports = { updateVideogames }