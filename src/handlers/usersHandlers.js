const {createNewUser} = require('../controllers/Users/usersControllers')
const {addFavorite} = require('../controllers/Users/addFavorites')
const {deleteFavorite} = require('../controllers/Users/deleteFavorites')

const getUsersHandlers = async (req, res) => {
    const { name } = req.query
    try {

    } catch (error) {

    }

}

const createUserHandler = async (req, res) => {
    const { name, username, password } = req.body
    console.log(name, username, password)
    try {
        if (!name || !username || !password )
            throw new Error('Incomplete data')
        const newUser = await createNewUser({ name, username, password })
        return res.status(201).json(newUser)
    } catch (error) {
        res.status(400).send({ Error: error.message })

    }

} 

const addFavoriteHandler = async (req,res)=>{
   const {idUser, idVideogame} = req.body

    try {
        const response = await addFavorite(idUser, idVideogame)
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

const deleteFavoriteHandler = async (req,res)=>{
    const {idUser, idVideogame} = req.body

    try {
        res.status(200).json(deleteFavorite(idUser,idVideogame))    
    } catch (error) {
        res.status(400).json('no se pudo eliminar el videojuego')
    }
}

module.exports = {
    addFavoriteHandler, createUserHandler, getUsersHandlers, deleteFavoriteHandler
}
