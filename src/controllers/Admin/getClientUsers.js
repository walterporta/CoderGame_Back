const { Users, Favorites, Videogames } = require('../../db');

const getClientInfo = async (users) => {
  let clients = users.filter((user) => user.rol === 'client');
  clients = clients.map((client) => {
    const { Wallet, ...clientWithoutWallets } = client.toJSON();
    return clientWithoutWallets;
  });

  clients = clients.map(async (client) => {
    const favoriteGames = await Favorites.findAll({ where: { UserSub: client.sub, buy: true } });
    const totalBuy = favoriteGames.length;
    let totalSpent = await favoriteGames.reduce(async (accumulatorPromise, game) => {
      const accumulator = await accumulatorPromise;
      const selGame = await Videogames.findOne({ where: { id: game.VideogameId } });
      return accumulator + selGame.price;
    }, Promise.resolve(0));
    return { ...client, totalBuy, totalSpent };
  });

  const clientData = await Promise.all(clients);

  return clientData;
};

module.exports = { getClientInfo };
