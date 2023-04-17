const {Platforms} = require('../db');
const {API_KEY} = process.env;
const axios = require('axios');

const getAllPlatforms = async () => {
    const platformApi = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)

    const platforms = await platformApi.data.results;

    platforms.forEach(element => {
        Platforms.findOrCreate({
            where: { id: element.id, name: element.name}
        })
    })
};

module.exports = {
    getAllPlatforms
}