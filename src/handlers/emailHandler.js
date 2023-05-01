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
    const {sub, text,comment}= req.body
    try {
        const response = await emailReportUser(sub, text, comment)
        res.status(200).json(response)
    } catch (error) {
        
    }
}

module.exports = {emailRequiestSellerHandler, emailReportUserHandler}