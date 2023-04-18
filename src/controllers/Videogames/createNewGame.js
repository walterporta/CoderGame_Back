const { Videogames, Genregames } = require('../../db')

const createNewGame = async ({ name, released, genres, rating, platforms, description, image }) => {
const { Videogames, Genregames, Platforms } = require('../../db')

const createNewGame = async ({ name, released, genres, rating, platforms, description, image, price }) => {
    const existName = await Videogames.findOne({
        where: {
            name: name
        }
    })
    if (existName) throw new Error('ya existe un juego con ese nombre')
    const newVideoGame = await Videogames.create({ name, released, genres, rating, platforms, description, image, price })
    const objGenres = []
    const objPlatforms = []
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
    for (const platform of platforms) {

        const platformObject = await Platforms.findAll({
            where: {
                name: platform
            }
        })
        if (platformObject.length === 0) throw new Error('debes agregar una plataforma que exista')

        const [created] = platformObject

        objPlatforms.push(created)
    }
    await newVideoGame.addGenregames(objGenres)
    await newVideoGame.addPlatforms(objPlatforms)
    return newVideoGame
}

module.exports = { createNewGame }