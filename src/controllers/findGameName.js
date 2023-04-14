const { Videogames, Genregames } = require('../db')
const { Op, where } = require('sequelize')



const findGameName = async (name, genre) => {


    let findGame = []
    if (!name) {
        findGame = await Videogames.findAll({
            include: [{
                model: Genregames,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                } // nombre del campo que quieres recuperar
            }],
            where: {
                deleted: false
            }
        })

    } else {
        findGame = await Videogames.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` },
                delete: false
            },
            include: [{
                model: Genregames,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                } // nombre del campo que quieres recuperar
            }]
        })
    }

    let findGames = await Videogames.findAll({
        where:{
            [Op.and]:[name?{name: {[Op.iLike]: `%${name}%`}}:null ],
            delete: false  
        },
        include: [{
            model: Genregames,
            attributes: ['id', 'name'],
            where: {
                name: genre ? genre : { [Op.ne]: null,
                },
                delete: false,
            },
                
            through: {
                attributes: []
            },
            required: false 
        }]
    })

     console.log(findGames)
    
    return findGames
}


module.exports = {
    findGameName
}

