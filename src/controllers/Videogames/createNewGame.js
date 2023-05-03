const { Videogames, Genregames, Platforms } = require('../../db')
const verifyRol = require('../../helpers/verifyRol')
const {emailAllClient} = require('../message/messageNewGame')


const createNewGame = async ({ sub, name, released, genres, rating, platforms, description, image, price, gameLink }) => {

    const rol = await verifyRol(sub)

    if (rol === 'client') return res.status(403).send('No tienes el rol autorizado')

    const existName = await Videogames.findOne({
        where: {
            name: name
        }
    })
    if (existName) throw new Error('there is already a game with that name')
    const newVideoGame = await Videogames.create({ UserSub: sub, name, released, genres, rating, platforms, description, image, price, gameLink })
    const objGenres = []
    const objPlatforms = []
    for (const genre of genres) {

        const genreObject = await Genregames.findAll({
            where: {
                name: genre
            }
        })
        if (genreObject.length === 0) throw new Error('you must add a genre that exists')

        const [created] = genreObject

        objGenres.push(created)
    }
    for (const platform of platforms) {

        const platformObject = await Platforms.findAll({
            where: {
                name: platform
            }
        })
        if (platformObject.length === 0) throw new Error('you must add a platform that exists')

        const [created] = platformObject

        objPlatforms.push(created)
    }
    await newVideoGame.addGenregames(objGenres)
    await newVideoGame.addPlatforms(objPlatforms)
        emailAllClient(newVideoGame)
    return newVideoGame
}

module.exports = { createNewGame }