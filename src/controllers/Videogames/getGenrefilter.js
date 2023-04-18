const { Videogames, Genregames } = require('../../db')
const genreFilter = async ()=>{
    
    let genres =await Genregames.findAll(
        {
            include: [
                {
                  model: Videogames,

                }
              ],

            }
    )
    genres= genres.filter((genre)=>genre.Videogames.length !== 0)
    genres = genres.map((genre)=>{
        return { id :genre.id, name: genre.name}
    })
    return genres

}

module.exports = {genreFilter}