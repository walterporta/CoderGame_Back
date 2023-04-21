const { createNewUser } = require('../controllers/Users/usersControllers')
const { addFavorite } = require('../controllers/Users/addFavorites')
const { deleteFavorite } = require('../controllers/Users/deleteFavorites')
const { getAllFavorites } = require('../controllers/Users/getAllFavoritesId')


const getUsersHandlers = async (req, res) => {
    const { emal, nickName } = req.query
    try {
        
    } catch (error) {

    }

}

const createUserHandler = async (req, res) => {
    const { name, email,  auth0Id } = req.body
    console.log(email)
    try {
        // if (!name || !email || !password || !username || !lastname || !gender)
        //     throw new Error('Incomplete data')
        const newUser = await createNewUser({ name, email, auth0Id })
        return res.status(201).json(newUser)
    } catch (error) {
        res.status(400).send({ Error: error.message })
 
    }

}

const addFavoriteHandler = async (req, res) => {
    const { idUser, idVideogame } = req.body

    try {
        const response = await addFavorite(idUser, idVideogame)
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ Error: error.message })
    }
}

const deleteFavoriteHandler = async (req, res) => {
    const { idUser, idVideogame } = req.body

    try {
        res.status(200).json(await deleteFavorite(idUser, idVideogame))
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getFavoriteHandler = async (req, res) => {
    const { id } = req.params

    try {
        res.status(200).json(await getAllFavorites(id))
    } catch (error) {
        res.status(400).json({ Error: error.message })
    }

}

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
    addFavoriteHandler, createUserHandler, getUsersHandlers, deleteFavoriteHandler, getFavoriteHandler
}
