const{Users, Videogames} = require('../../db')


const getAllFavorites = async (id)=>{
    const listFavorites = await Users.findAll({
        where: {id: id},
        include:{
            model: Videogames,
            attributes: ['id', 'name'],
            through: {
              attributes: [],
            },
        }
    })
    if(!listFavorites) throw new Error('No tiene juegos en favoritos')
    return listFavorites
}

module.exports = {getAllFavorites}