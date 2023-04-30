const { Users, Wallets } = require('../db.js')

const searchUserByWallet = async (walletId) => {
    const wallet = await Wallets.findOne({
        where: { id: walletId },
    });

    if (wallet) {
        const userSub = wallet.UserSub;
        const name = await Users.findOne({
            where: {
                sub: userSub
            },
            attributes: ['name']
        })
        return name;
    } else {
        console.log(`No se encontró la billetera con el ID: ${walletId}`);
        return null;
    }
}

module.exports = searchUserByWallet;
