const { Videogames, Genregames } = require('../db')
const { Op, where } = require('sequelize')



const findGameName = async (name, genre) => {

    let findGame = []

     findGame = await Videogames.findAll({
        where:{
            [Op.and]:[name?{name: {[Op.iLike]: `%${name}%`}}:null ],
            deleted: false,
        
        },
        include: [{
            model: Genregames,
            attributes: ['id', 'name'],
            where: {
                name: genre ? genre : { [Op.ne]: null,
                }
            },
                
            through: {
                attributes: []
            },
            required: true 
        }]
    })    
    return findGame
}


module.exports = {
    findGameName
}

