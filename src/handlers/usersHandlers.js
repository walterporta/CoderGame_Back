const { createNewUser } = require('../controllers/Users/usersControllers')
const { addFavorite } = require('../controllers/Users/addFavorites')
const {verifyUser}= require


const getUsersHandlers = async (req, res) => {
    const { name } = req.query
    try {

    } catch (error) {

    }
}

const createUserHandler = async (req, res) => {
    const { name, username, lastname, email, password, gender, typerUser, address } = req.body

    try {
        if (!name || !email || !password || !username || !lastname || !gender)
            throw new Error('Incomplete data')
        const newUser = await createNewUser({ name, username, lastname, email, password, gender, typerUser, address })
        return res.status(201).json(newUser)
    } catch (error) {
        res.status(400).send({ Error: error.message })

    }


}

// const addFavorite = async (req, res) => {
//     const { idUser, idVideogame } = req.body

//     try {
//         res.status(200).json(addFavorite(idUser, idVideogame))
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

const loginHandler = async (req, res) => {
    const { email, password } = req.body

    try {
        if (!email || !password) throw new Error('Faltan ingresar datos')
        const response = await verifyUser(email, password)
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createUserHandler,
    addFavorite,
    loginHandler
}