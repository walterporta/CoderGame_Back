const { Videogames, Genregames, Platforms } = require('../../db')
const genrePlatformsFilter = async (filtro)=>{  
  let response 
    if(filtro === 'Genregames'){
       response =await Genregames.findAll(
        {
            include: [
                {
                  model: Videogames,
                }
              ],
            }
    )
    }
    if(filtro === 'Platforms'){
      response =await Platforms.findAll(
      {
          include: [
              {
                model: Videogames,
              }
            ],
          })

    }
 
    response= response.filter((el)=>el.Videogames.length !== 0)
    response = response.map((el)=>{
        return { id :el.id, name: el.name}
    })
    return response

}

module.exports = {genrePlatformsFilter}