const { Videogames, Genregames } = require('../../db')
console.log(Videogames);
const createNewGame = async ({ name, released, genres, rating, platforms, description, image }) => {

    if(platforms.length=0) throw new Error('Debes enviar por lo menos una plataforma')
    if(genres.length=0) throw new Error('Debes enviar por lo menos una plataforma')
    const newVideoGame = await Videogames.create({name, released, genres, rating, platforms, description, image })
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

    await newVideoGame.addGenregames(objGenres)
    return newVideoGame
}

module.exports = { createNewGame }