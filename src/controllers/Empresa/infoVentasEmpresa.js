const { Users, Videogames, Favorites, Transactions, Wallets } = require('../../db.js');
const searchUserByWallet = require('../../helpers/searchUserByWallet.js');

const infoVentasEmpresa = async (sub) => {
    const listGames = await Videogames.findAll({
        where: {
            UserSub: sub
        },
        include: {
            model: Transactions,
            attributes: ['id', 'date', 'amount', 'WalletId'],
            include: [
                {
                    model: Wallets,
                    attributes: []
                },
                {
                    model: Users,
                    attributes: ['name']
                }
            ]
        }
    });

    const promises = listGames.map(async (el) => {
        const transactions = el.Transactions.map(async (transaction) => {
            const user = await searchUserByWallet(transaction.WalletId);
            return {
                id: transaction.id,
                date: transaction.date,
                amount: parseInt(transaction.amount),
                user: user
            };
        });
        const resolvedTransactions = await Promise.all(transactions);


        let totalGanancia = 0
        resolvedTransactions.forEach(el => {
            return totalGanancia = parseFloat(el.amount) + totalGanancia
        })

        return {
            id: el.id,
            name: el.name,
            released: el.released,
            rating: el.rating,
            description: el.description,
            image: el.image,
            deleted: el.deleted,
            price: el.price,
            gamelink: el.gamelink,
            Transactions: resolvedTransactions,
            ventasRealizadas: resolvedTransactions.length,
            ganancias: totalGanancia
        };
    });

    const arrayClean = await Promise.all(promises);

    return arrayClean;
};

module.exports = { infoVentasEmpresa }
