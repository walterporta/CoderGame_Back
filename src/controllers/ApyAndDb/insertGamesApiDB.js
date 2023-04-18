const {searchApi} = require('./getApiData')
const {Videogames, Genregames, Platforms} = require('../../db')
const { where } = require('sequelize')

const insertGamesDb = async () =>{

    let arrGames = await searchApi()
    await Videogames.bulkCreate(arrGames)
    let gamesDB= await Videogames.findAll()
    
    arrGames.forEach(async (game, index) =>  {
        let idGames = await Videogames.findOne({ where: { id: index+1 } })
        game.genres.forEach(async genre=>{
            let idGenre = await Genregames.findOne({ where: { id: genre.id } })
            idGames.addGenregames(idGenre)
        })
        game.platforms.forEach(async platforms=>{
            let idPlataform = await Platforms.findOne({where: { id : platforms.platform.id}})
            idGames.addPlatforms(idPlataform)
        })
    });
}

module.exports = { insertGamesDb }