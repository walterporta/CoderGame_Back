const {Videogame} = require('../db')

const findGameName = (name) =>{
    
    const findGame = Videogame.findAll({
        where: {
            name: {[Op.iLike]: `%${name}%`}
        }
    })
    return findGame
}

module.exports = {findGameName}