const { Platforms } = require('../db')
const { getAllPlatforms } = require('../controllers/ApyAndDb/getPlatforms')
const {genrePlatformsFilter} = require('../controllers/Videogames/getGenrefilter')
const allPlatforms = async (req, res) => {
    try {
        await getAllPlatforms();
        const platforms = await Platforms.findAll();
        res.status(200).send(platforms);
        return platforms;
    }
    catch(error){
        res.status(404).send({error: error.message})
    }
}

const platformsFilterHandler = async(req, res)=>{
    try {
        const listPlatforms = await genrePlatformsFilter(Platforms)
        res.status(200).json(listPlatforms)
    } catch (error) {
        res.status(400).json({ error: "no se encontraron generos" })

    }
}



module.exports = {
    allPlatforms,
    platformsFilterHandler
}