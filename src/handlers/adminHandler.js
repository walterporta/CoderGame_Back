
const{getAllUsers} = require('../controllers/Admin/getAllUsers')

const getAllUsersHandler = async (req,res)=>{
    const {sub} = req.body
  
    try { 
        const response = await getAllUsers(sub)
        res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {getAllUsersHandler}