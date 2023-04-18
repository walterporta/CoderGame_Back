const { Videogames, Genregames, Platforms } = require('../../db');

const findGameById = async (id) => {
  const videoGame = await Videogames.findByPk(id, {
    where: {
      deleted: false // Agregar esta condición para excluir videojuegos eliminados
    },
    include: [
      {
        model: Genregames,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      },
      {
        model: Platforms,
        attributes: ['id', 'name'],
        through: {
          attributes: []
        },
      }
    ],
  });

  if (!videoGame) {
    throw new Error('El videojuego no existe');
  }

  if (videoGame.deleted) {
    throw new Error('El videojuego ha sido eliminado');
  }

  return videoGame;
};

module.exports = {
  findGameById,
};
