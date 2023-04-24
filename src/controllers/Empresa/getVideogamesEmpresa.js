const { Videogames } = require('../../db')

const getVideogamesEmpresa = async (sub) =>{

    if(!sub) throw new Error('ingresa el sub de la empresa')
    const videogames = await Videogames.findAll({where:{UserSub:sub}})

    return videogames
}

module.exports = {getVideogamesEmpresa}