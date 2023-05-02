const { Videogames } = require('../../db')

const getVideogamesEmpresa = async (sub) =>{

    if(!sub) throw new Error("enter the company's sub")
    
    const videogames = await Videogames.findAll({where:{UserSub:sub}})

    return videogames
}

module.exports = { getVideogamesEmpresa }