const { emailRequiestSeller } = require('../controllers/message/messageRequestSeller')


const emailRequiestSellerHandler = async (req,res) =>{
const {sub, text} = req.body
console.log(sub,text)
    try {
        const response = await emailRequiestSeller(sub, text)
        res.status(200).json(response)
    } catch (error) {
        
    }
}

module.exports = {emailRequiestSellerHandler}