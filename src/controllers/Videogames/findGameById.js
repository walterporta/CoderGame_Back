const { Videogames, Genregames, Platforms, ComentariosV, Users } = require('../../db');
const { col, fn} = require('sequelize')

const findGameById = async (id) => {

  const videoGame = await Videogames.findByPk( id, {
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
        }}, 
        {
          model: ComentariosV,
          attributes: [
            'id', 
            'message',
            [fn('to_char', col('ComentariosVs.date'), 'YYYY-MM-DD'), 'date']
          ],
          where:{deleted:false},
          include: [
            {
              model: Users,
              attributes: ['sub', 'name'],
            }
          ],
          order: [
            ['date', 'DESC']
          ],
          required: false
        }
    ],
  });

  if (!videoGame) {
    throw new Error("The game doesn't exist");
  }

  if (videoGame.deleted) {
    throw new Error('The video game has been removed');
  }

  return videoGame;
};

module.exports = {
  findGameById,
};
