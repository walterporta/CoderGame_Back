const { Profile, Wallets } = require('../../db')

const getProfileByBalance = async (sub) => {
  try {
    const userProfile = await Profile.findOne({ where: { UserSub: sub } })
    const userBalance = await Wallets.findOne({ where: { UserSub: sub }, attributes: ['balance'] })

    return { profile: userProfile, balance: userBalance }
  } catch (error) {
    throw new Error(`Error al cargar el perfil y saldo: ${error.message}`)
  }
}

module.exports = { getProfileByBalance }