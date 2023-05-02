const { emailRequiestSeller } = require('../controllers/message/messageRequestSeller')
const {emailReportUser} = require('../controllers/message/messageReportUser')

const emailRequiestSellerHandler = async (req,res) =>{
const {sub, text} = req.body
console.log(sub,text)
    try {
        const response = await emailRequiestSeller(sub, text)
        res.status(200).json(response)
    } catch (error) {
        
    }
}

const emailReportUserHandler = async (req,res)=>{
    const { text, comment}= req.body
    console.log(text, comment)
    try {
        const response = await emailReportUser(text, comment)
        res.status(200).json(response)
    } catch (error) { 
        res.status(400).json(error.message)
    }
}

module.exports = {emailRequiestSellerHandler, emailReportUserHandler}