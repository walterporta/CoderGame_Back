const { Videogames, Genregames } = require('../../db')
const genrePlatformsFilter = async (filtro)=>{
    
    // let response =await filtro.findAll(
    //     {
    //         include: [
    //             {
    //               model: Videogames,
    //             }
    //           ],
    //         }
    // )
    // response= response.filter((genre)=>genre.Videogames.length !== 0)
    // response = response.map((genre)=>{
    //     return { id :genre.id, name: genre.name}
    // })
    // return genres

}

module.exports = {genrePlatformsFilter}