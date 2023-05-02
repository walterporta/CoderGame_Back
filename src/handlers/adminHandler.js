const{getAllUsers} = require('../controllers/Admin/getAllUsers')
const{banDelUser} = require('../controllers/Admin/banDelUser')
const {getAllVideogames} = require('../controllers/Admin/getAllVideogames')
const { getAllBalance } = require('../controllers/Admin/getAllBalance')
const {getAllTransactions} = require('../controllers/Admin/getAllTransactions')

const getAllUsersHandler = async (req,res)=>{
    const {sub} = req.params
    try { 
        const response = await getAllUsers(sub)
        res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const banUserHandler = async (req,res) =>{
    const {subUser, subAdmin} = req.body
    try {
        const response = await banDelUser(subUser, subAdmin, 'banned')
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const deleteUserHandler = async (req,res) =>{
    const {subUser, subAdmin} = req.body
    try {
        const response = await banDelUser(subUser, subAdmin, 'deleted')
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json(error.message)
    }
}

const getAllVideogamesHandler = async(req,res) =>{
    const {sub} = req.params
    try {
        const response = await getAllVideogames(sub)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
    
}

const getAllBalanceHandler = async (req,res) =>{
    const {sub} = req.params
    const {startDate, finalDate}= req.body
 
    try {
        response = await getAllBalance(startDate, finalDate, sub)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getAllTransactionsHandler = async (req,res)=>{
    const {sub} = req.params
    try {
        const response = await getAllTransactions(sub)
        
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {getAllTransactionsHandler, getAllBalanceHandler, getAllVideogamesHandler,getAllUsersHandler, banUserHandler, deleteUserHandler}