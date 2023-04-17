const { Platforms } = require('../db')
const { getAllPlatforms } = require('../controllers/ApyAndDb/getPlatforms')

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

module.exports = {
    allPlatforms
}