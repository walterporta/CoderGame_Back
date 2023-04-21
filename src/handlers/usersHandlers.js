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

<<<<<<< HEAD
const createUserHandler = async (req, res) => {
    const { name, nickname, email,  id } = req.body
=======
>>>>>>> edbe74cadc5f51ce1c086718542a735f2cbb12f0

const createUserHandler = async (req, res) => {
    const { sub, name, email } = req.body
    console.log(req.body);
    try {
<<<<<<< HEAD
        // if (!name || !email || !password || !username || !lastname || !gender)
        //     throw new Error('Incomplete data')
        const newUser = await createNewUser({ name, nickname, email, id })
=======

        const newUser = await createNewUser({ sub, name, email })
>>>>>>> edbe74cadc5f51ce1c086718542a735f2cbb12f0
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
