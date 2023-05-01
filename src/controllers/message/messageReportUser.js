const { createTrans } = require('./message')
const {Users} = require('../../db')


const emailReportUser = async (subReport, text, comentId)=>{

    const user = await Users.findOne({where:{sub:subReport}})
    const admin = await Users.findOne({where:{rol:"admin"}})
    try {
        let transporte = await createTrans()
        let info = await transporte.sendMail({
        from: `Request Seller" <ramirosanchezsolano@gmail.com>`, // sender address
        to: admin.email, // list of receivers
        subject: `Request Seller sub :${sub}`, // Subject line
        text: "report user", // plain text body
        html: `<b>$${text}</b>
        <br>
        <p>email User: ${user.email}</p>
        </br>
        <p> comment Id: ${comentId} </p>`, // html body
      });
      return info
    } catch (error) {
        return error.message
    }


}

module.exports = {emailReportUser}