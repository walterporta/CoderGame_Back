const { createNewGame } = require('../controllers/Videogames/createNewGame.js')
const { findGameName } = require('../controllers/Videogames/findGameName.js');
const { findGameById } = require('../controllers/Videogames/findGameById.js');
const { deleteLogical } = require('../controllers/Videogames/deleteLogical.js');


const getVideoGamesHandler = async (req, res) => {
  const { name, genre, platforms } = req.query
  try {
    const allVideoGames = await findGameName(name, genre, platforms)
    res.status(200).json(allVideoGames)
  } catch (error) {

    res.status(400).json({ error: error.message })

  }

}

const getVideoGameByIdHandler = async (req, res) => {
  console.log(req.oidc)
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

  const { name, released, genres, rating, platforms, description, image, price, gameLink } = req.body

  try {
    if (!name || !released || genres.length === 0 || !platforms || !description || !image || !price || !gameLink) throw new Error('Faltan parametros para crear un juego')

    const newGame = await createNewGame({ name, released, genres, rating, platforms, description, image, price, gameLink })

    return res.status(201).json(newGame)
  } catch (error) {
    res.status(400).send(error.message)

  }

}
const deleteVideoGameLogicallyHandler = async (req, res) => {
  const { id } = req.params
  if (!id) throw new Error('Ingresar un id valido')
  try {
    const deleted = await deleteLogical(id)
    if (!deleted) return res.status(400).send('no se encontro ese video game')
    return res.status(200).json(deleted)
  } catch (error) {
    res.status(400).send(error.message)
  }

}

module.exports = {
  getVideoGamesHandler,
  createVideoGamesHandler,
  getVideoGameByIdHandler,
  deleteVideoGameLogicallyHandler

}