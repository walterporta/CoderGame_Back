const {Videogames, Genregames} = require('../../db');
const {API_KEY} = process.env;
const axios = require('axios');

// Función para eliminar tags html de la descripción
const stripHtmlTags = (str) => {
  if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}

// Indio de la Api 
let searchApi = async () => {
  let arrVideogames = [];
  for (let i = 1; i < 200; i++) {
    try {
      const apiUrl = await axios.get(
        `https://api.rawg.io/api/games/${i}?key=${API_KEY}`
      );
      arrVideogames.push(apiUrl.data);
    } catch (error) {}
  }
  arrVideogames = arrVideogames
    .map((el) => {
      return {
        name: el.name ? el.name : null,
        image: el.background_image ? el.background_image : null,
        released: el.released ? el.released : null,
        rating: el.rating ? el.rating : null,
        platforms: el.platforms,
        description: el.description ? stripHtmlTags(el.description) : null, // llamamos la función aquí para eliminar los tags
        genres: el.genres ? el.genres : null,

        price: Math.floor(Math.random() * (1000 - 500 + 1) + 500),
        gameLink: 'https://bit.ly/3LgV1ZL', 

      };
    })
    .filter((game) => game.description !== null && game.image !== null);
  return arrVideogames;
};


// Db
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


// Todo (Url y Db)
const getAllInfo = async () => {
    // const apiInfo = await searchApi();
    const dbInfo = await searchDB();
    // const AllInfo = apiInfo.concat(dbInfo);
    return dbInfo;
}

module.exports = {
    getAllInfo,
    searchApi
}

//ok