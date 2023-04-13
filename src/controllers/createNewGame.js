const { Videogames, Genregames } = require('../db.js')
console.log(Videogames);
const createNewGame = async ({ name, released, genres, rating, platforms, description, image }) => {

    const newVideoGame = await Videogames.create({ name, released, genres, rating, platforms, description, image })
    const objGenres = []
    for (const genre of genres) {

        const genreObject = await Genregames.findAll({
            where: {
                name: genre
            }
        })

        const [created] = genreObject

        objGenres.push(created)
    }

    await newVideoGame.addGenregames(objGenres)
    return newVideoGame
}

module.exports = { createNewGame }