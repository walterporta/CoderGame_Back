const {Videogames} = require('../db')
const {Op} = require('sequelize')


const findGameName = async (name) =>{
    let findGame = []
    if(!name){
         findGame = await Videogames.findAll()
    } else{
        findGame = await Videogames.findAll({
        where: {
            name: {[Op.iLike]: `%${name}%`}
        }
    })
    }
     console.log(findGame)
    return findGame
}

module.exports = {findGameName}