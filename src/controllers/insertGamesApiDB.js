const {searchApi} = require('./getApiData')
const {Videogames, Genregames} = require('../db')
const { where } = require('sequelize')

const insertGamesDb = async () =>{

    const arrGames = await searchApi()
    await Videogames.bulkCreate(arrGames)
    arrGames.forEach(async game =>  {
        let idGames = await Videogames.findOne({ where: { id: game.id } })
        game.genres.forEach(async genre=>{
            let idGenre = await Genregames.findOne({ where: { id: genre.id } })
            idGames.addGenregames(idGenre)
        })
    });
}

module.exports = { insertGamesDb }