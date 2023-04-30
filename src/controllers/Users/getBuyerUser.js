const { Favorites, Videogames, ComentariosV, Wallets, Users } = require('../../db');

const getBuyerUser= async (sub) => {
  try {
    console.log(sub)
    const favorites = await Favorites.findAll({
      where: {
        UserSub: sub, // Corrected from 'id' to 'sub'
        buy: true,
      },
      include: [{
        model: Videogames,
        attributes: ['id', 'name', 'image', 'gameLink'],
        include: [{
          model: ComentariosV,
          include: [{
            model: Users,
            attributes: ['name']
          }]
        }]
      }]
    });

    const wallet = await Wallets.findOne({
      where: {
        UserSub: sub
      },
      attributes: ['balance']
    });

    const comments = await ComentariosV.findAll({
      include:{
        model:Videogames,
        attributes: ['name']
      },
      where:{UserSub:sub, deleted:false}})

    return {
      favorites: favorites,
      balance: wallet.balance,
      comments
    };

  } catch (error) {
    console.error(error);
    return {
      message: 'Server error'
    };
  }
};


module.exports = { getBuyerUser }
