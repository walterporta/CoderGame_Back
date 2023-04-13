const { createNewGame } = require('../controllers/createNewGame.js')
const {findGameName} = require('../controllers/findGameName.js');
const {findGameById} = require('../controllers/findGameById.js');

const getVideoGamesHandler = async (req, res) => {
    const { name, genre } = req.query
    try {
        const allVideoGames = await findGameName(name, genre)
        res.status(200).json(allVideoGames)
    } catch (error) {

        res.status(400).json({ error: error.message })

    }

}

const getVideoGameByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
      const videoGame = await findGameById(id);
      if (videoGame) {
        res.status(200).json(videoGame);  
      } else {
        res.status(404).json({ error: 'Game not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };





const createVideoGamesHandler = async (req, res) => {
    const {name, released, genres, rating, platforms, description, image } = req.body

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
    createVideoGamesHandler,
    getVideoGameByIdHandler,
  
}