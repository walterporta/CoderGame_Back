const { Videogames, Genregames } = require('../db');

const findGameById = async (id) => {
  const videoGame = await Videogames.findByPk(id, {
    include: [
      {
        model: Genregames,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return videoGame;
};

module.exports = {
  findGameById,
};
