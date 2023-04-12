
console.log('pasando por gamehandler');

const getVideoGamesHandler = async (req, res) => {
    const { name } = req.query
    try {
        res.status(200).send('aqui me traigo todas los juegos')
    } catch (error) {

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