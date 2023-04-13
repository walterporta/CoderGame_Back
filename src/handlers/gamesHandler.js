const { createNewGame } = require('../controllers/createNewGame.js')



const getVideoGamesHandler = async (req, res) => {
    const { name } = req.query
    try {
        res.status(200).send('aqui me traigo todas los juegos')
    } catch (error) {

    }
}

const createVideoGamesHandler = async (req, res) => {
    const { name, released, genres, rating, platforms, description, image } = req.body

    try {
        if (!name || !released || genres.length === 0 || !platforms || !description || !image) throw new Error('Faltan parametros para crear un juego')

        const newGame = await createNewGame({ name, released, genres, rating, platforms, description, image })

        return res.status(201).json(newGame)
    } catch (error) {
        res.status(400).send(error.message)

    }

}

module.exports = {
    getVideoGamesHandler,
    createVideoGamesHandler
}