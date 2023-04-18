const { createNewUser } = require('../controllers/Users/usersControllers.js')

const getUserHandler = async (req, res) => {
    res.status(200).send('traigo todos los usuarios')
}
const getUserByIdHandler = async (req, res) => {
    res.status(200).send('traigo un usuario por id')
}




const createUserHandler = async (req, res) => {
    const { username,name, lastname, email, password, gender, typeUser, address } = req.body

    try {
        if (!username || !name || !email || !password || !gender || !typeUser || !lastname)
            throw new Error('Incomplete data')
        const newUser = await createNewUser({ username,name, email,lastname, password, gender, typeUser, address })
        return res.status(201).json(newUser)
    } catch (error) {
        res.status(400).send({ Error: error.message })

    }

}

module.exports = {
    createUserHandler,
    getUserHandler,
    getUserByIdHandler
}