const { Videogames } = require('../db')

const findGameById = async (id) => {

  const videoGameId = await Videogames.findByPk(id);

  return videoGameId;
};


module.exports = {
  findGameById
}