const { createNewGame } = require('../controllers/Videogames/createNewGame.js')
const { findGameName } = require('../controllers/Videogames/findGameName.js');
const { findGameById } = require('../controllers/Videogames/findGameById.js');
const { deleteLogical } = require('../controllers/Videogames/deleteLogical.js');
const { updateVideogames } = require('../controllers/Videogames/updateVideogame.js');
const {deleteComentarioV} = require('../controllers/Videogames/deleteComentariosVideogames.js')
const {insertComentarioV} = require('../controllers/Videogames/InsertComentariosVideogames.js')


const getVideoGamesHandler = async (req, res) => {
  
  const { name, genre, platforms, promotion } = req.query
  try {
    const allVideoGames = await findGameName(name, genre, platforms, promotion)

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


// console.log(user.email);
// if (!user.sub) throw new Error('Debes estar logeado');
// const email = user?.email
// const rol = await verifyRol(email)

// if (!rol.includes('admin') || !rol.includes('seller')) {

//   throw new Error('No tienes permiso para crear un juego');
// }
const createVideoGamesHandler = async (req, res) => {
  const { sub, name, released, genres, rating, platforms, description, image, price, gameLink} = req.body
  
  try {
    if (!sub || !name || !released || genres.length === 0 || !platforms || !description || !image || !price || !gameLink) throw new Error('Faltan parametros para crear un juego')

    const newGame = await createNewGame({ sub, name, released, genres, rating, platforms, description, image, price, gameLink })

    return res.status(201).json(newGame)
  }
  catch (error) {
    res.status(400).send(error.message)
  }
}



const deleteVideoGameLogicallyHandler = async (req, res) => {
  const { id } = req.params
  const {sub} = req.body
  if (!id||!sub) throw new Error('you must enter the id of the videogame and the sub of the user')
  try {
    const deleted = await deleteLogical(id, sub)
    if (!deleted) return res.status(400).send('that video game was not found')
    return res.status(200).json(deleted)
  } catch (error) {
    res.status(400).send(error.message)
  }

}

const addComentarioVideogame = async (req,res) =>{
  const {sub, idVideogame, comentario} = req.body
  try {
    const response = await insertComentarioV(sub, idVideogame, comentario)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({Error:error.message})
  }
}

const deleteComentario = async (req,res) =>{
  const {sub, id} = req.body
  console.log(sub, id)
  try {
    res.status(200).json(deleteComentarioV(id, sub))
  } catch (error) {
    res.status(200).json('no se pudo eliminar el comentario')
  }
}

const updateGameHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await updateVideogames(id, req.body);
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}




module.exports = {
  getVideoGamesHandler,
  createVideoGamesHandler,
  getVideoGameByIdHandler,
  deleteVideoGameLogicallyHandler,
  addComentarioVideogame,
  deleteComentario,
  updateGameHandler,

}