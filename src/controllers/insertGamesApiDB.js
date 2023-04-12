const {searchApi} = require('./getApiData')
const {Videogames} = require('../db')

const insertGamesDb = async () =>{

    const arrGames = await searchApi()
    await Videogames.bulkCreate(arrGames)

}

module.exports = { insertGamesDb }