const { Videogame, Genregames} = require('../db');
const {API_KEY} = process.env;
const axios = require('axios')

const getAllGenres = async () => {
    const genreApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)

    const genres = await genreApi.data.results?.map(el => el.name);

    const genre01 = genres.toString().split(',');
    genre01.forEach(element => {
        Genregames.findOrCreate({ 
            where: { name: element}
        })
    })
}
module.exports = {getAllGenres}