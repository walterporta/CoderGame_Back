const { Videogames, Genregames } = require('../db.js')
const createNewGame = async ({ name, released, genres, rating, platforms, description, image }) => {

    const newVideoGame = await Videogames.create({ name, released, genres, rating, platforms, description, image })
    const objGenres = []
    for (const genre of genres) {

        const genreObject = await Genregames.findAll({
            where: {
                name: genre
            }
        })
        if (genreObject.length === 0) throw new Error('debes agregar un genero que exista')

        const [created] = genreObject

        objGenres.push(created)
    }

    await newVideoGame.addGenregames(objGenres)
    return newVideoGame
}

module.exports = { createNewGame }