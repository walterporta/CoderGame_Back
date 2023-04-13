console.log('pasando por gamehandler');
const {findGameName} = require('../controllers/findGameName')



const getVideoGamesHandler = async (req, res) => {
    const { name } = req.query
    try {
        const allVideoGames =await findGameName(name)
        res.status(200).json(allVideoGames)
    } catch (error) {

        res.status(400).json({error:error.message})

    }

}

const createVideoGamesHandler = async (req, res) => {
    
    res.status(200).send('esta es la ruta post de juegos')
    console.log('paso por createvideo');
}

module.exports = {
    getVideoGamesHandler,
    createVideoGamesHandler
}