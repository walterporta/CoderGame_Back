const { createNewUser } = require('../controllers/Users/usersControllers')
const { addFavorite } = require('../controllers/Users/addFavorites')
const { deleteFavorite } = require('../controllers/Users/deleteFavorites')
const { getAllFavorites } = require('../controllers/Users/getAllFavoritesId')
const { upditeProfile } = require('../controllers/Users/upditeProfile')
const { getProfileBySub } = require('../controllers/Users/getUProfileBySub')
const { updateUsers } = require('../controllers/Users/updateUsers')
const { getProfileByBalance } = require('../controllers/Users/getProfileByBalance')
const {getUserByTransaction} = require('../controllers/Users/getUserByTransactions')
const {getBuyerUser} = require('../controllers/Users/getBuyerUser')

const getUsersHandlers = async (req, res) => {
    
    try {
        
    } catch (error) {

    }

}

const getProfileUsers = async (req,res)=>{
    const {sub} = req.params
    try {
        const response = await getProfileBySub(sub)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
}


const upditeProfilehandler = async (req,res) =>{
    const {sub, image, coverImage, linkYoutube, description } = req.body
    console.log(req.body)
    try {
        const updite = await upditeProfile(sub, {image, coverImage, linkYoutube, description})
        res.status(200).json(updite)
        
    } catch (error) {
            res.status(400).json( {error: error.message} )
    }
}


const createUserHandler = async (req, res) => {
    const { sub, name, email, user } = req.body
    console.log(`login ${user}`);
    try {
        // if (!name || !email || !password || !username || !lastname || !gender)
        //     throw new Error('Incomplete data')
    
        const newUser = await createNewUser({ sub, name, email })
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
        res.status(200).json(await getAllFavorites(id, false))
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

const getVideogamesBuy = async (req, res) => {
    const { id } = req.params

    try {
        res.status(200).json(await getAllFavorites(id, true))
    } catch (error) {
        res.status(400).json({ Error: error.message })
    }
}

const updateUserHandler = async (req, res) => {
    try {
      const { sub } = req.params;
      const user = await updateUsers(sub, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }

const profileByBalanceHandler = async (req, res) => {
    const { sub } = req.params
  
    try {
      const result = await getProfileByBalance(sub)
      if (result) {
        res.status(200).json(result)
      } else {
        res.status(404).json({ error: `Usuario con sub ${sub} no encontrado` })
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  const getUserByTransactionHandler = async (req, res) => {
    try {
      const user = await getUserByTransaction(req.params.sub);
      if (!user) {
        return res.status(404).send('User not found');
      }
      return res.send(user);
    } catch (error) {
      return res.status(500).send(`Error al obtener el usuario y sus transacciones: ${error.message}`);
    }
  };
  
  
  const getBuyerUserHandler = async (req, res) => {
    const sub = req.params.sub;
  
    const data = await getBuyerUser(sub);
  
    if (data.message) {
      return res.status(500).json(data);
    }
  
    return res.status(200).json(data);
  };
  

module.exports = {
    addFavoriteHandler,
    createUserHandler,
    getUsersHandlers,
    deleteFavoriteHandler,
    getFavoriteHandler,
    getVideogamesBuy,
    upditeProfilehandler,
    getProfileUsers,
    updateUserHandler,
    profileByBalanceHandler,
    getUserByTransactionHandler,
    getBuyerUserHandler
}
