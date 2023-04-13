const { Videogame, Genregames} = require('../db');
const {API_KEY} = process.env;
const axios = require('axios')

const getAllGenres = async () => {
    const genreApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)

    const genres = await genreApi.data.results;

    genres.forEach(element => {
        Genregames.findOrCreate({ 
            where: {id:element.id, name: element.name}
        })
    })
}
module.exports = {getAllGenres}