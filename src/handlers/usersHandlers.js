const {createNewUser} = require('../controllers/Users/usersControllers')

const getUsersHandlers = async (req, res) => {
    const { name } = req.query
    try {

    } catch (error) {

    }
}

const createUserHandler = async (req, res) => {
    const { name, email, password, phone, image, interests } = req.body

    try {
        if (!name || !email || !password || interests.length === 0)
            throw new Error('Incomplete data')
        const newUser = await createNewUser({ name, email, password, phone, image, interests })
        return res.status(201).json(newUser)
    } catch (error) {
        res.status(400).send({ Error: error.message })

    }

}