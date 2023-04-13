const { Videogames, Genregames } = require('../db.js')
console.log(Videogames);
const createNewGame = async ({ name, released, genres, rating, platforms, description, image }) => {

    const newVideoGame = await Videogames.create({ name, released, genres, rating, platforms, description, image })
    const objGenres = []
    for (const genre of genres) {

        const genreObject = await Genregames.findOrCreate({
            where: {
                name: genre
            },
            default: {
                name: genre
            }
        })

        const [created] = genreObject

        objGenres.push(created)
    }
    console.log(objGenres);
    await newVideoGame.addGenregames(objGenres)
    return newVideoGame
}

module.exports = { createNewGame }