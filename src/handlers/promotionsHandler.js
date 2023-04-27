const { postDiscountGame } = require('../controllers/Videogames/postDiscountGame.js')
const {getFivePromotions} = require('../controllers/Videogames/getFivePromotions.js')



const postPromotionsHandler = async (req,res)=>{
    const {idVideogame, dueDate,discount } = req.body
  
    try {
      const response = await postDiscountGame(idVideogame, dueDate, discount)
      res.status(200).json(response)
    } catch (error) {
      res.status(400).json(error.message) 
    }
  }
  
  const getFivePromotionsHandler = async (req,res) =>{
    console.log('a')
    try {
      const response = await getFivePromotions()

      res.status(200).json(response)
    } catch (error) {
      res.status(400).json(error.message)
    }
  }

  module.exports = {  postPromotionsHandler,
    getFivePromotionsHandler}