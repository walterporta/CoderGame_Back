const {Videogames, Genregames} = require('../../db');
const {API_KEY} = process.env;
const axios = require('axios');

//Indo de la Api 
let searchApi = async () => {
    let arrVideogames = []
  for(let i = 3000; i < 3050; i++){ 
    try {
        const apiUrl = await axios.get(`https://api.rawg.io/api/games/${i}?key=${API_KEY}`);
        arrVideogames.push(apiUrl.data);
      } catch (error) {
      }
   arrVideogames = arrVideogames.map(el=>{
    return{
        name: el.name? el.name: null,
         image: el.background_image? el.background_image:null,
         released: el.released?el.released:null,
         rating: el.rating?el.rating:null,
        platforms: el.platforms,
         description: el.description?el.description:null,
         genres: el.genres?el.genres:null,
         price: Math.floor(Math.random() * (1000 - 500 + 1) + 500)
    }
   })
    }
    arrVideogames = arrVideogames.filter((game)=>game.description !== null)
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