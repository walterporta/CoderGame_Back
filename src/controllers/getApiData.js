const {Videogames, Genregames} = require('../db');
const {API_KEY} = process.env;
const axios = require('axios');

//Indo de la Api
const searchApi = async () => {
    const arrVideogames = []
  for(let i = 1; i < 6; i++){
    const apiUrl = await axios.get (`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
    
        apiUrl.data.results.map((el)=> {
            arrVideogames.push({
                id: el.id,
                name: el.name,
                image: el.background_image,
                released: el.released,
                rating: el.rating,
                platforms: el.platforms?.map(el => el.platform.name),
                description: el.description,
                genres: el.genres
            });
        }); 
     }
    return arrVideogames;
 }

//Db
const searchDB = async () => {
    const dataDb = await Videogames.findAll({
        include: {
            model: Genregames,
            attributes: ['name'],
            through: {
                attributes: []
            },
        },
    });
    return dataDb;
};


//Todo (Url y Db)
const getAllInfo = async () => {
    // const apiInfo = await searchApi();
    const dbInfo = await searchDB();
    // const AllInfo = apiInfo.concat(dbInfo);
    //ya esta creada la funcion que guarda todo en la base de datos, no hace falta concatenar mas
    return dbInfo;
}

module.exports = {
    getAllInfo, searchApi
}