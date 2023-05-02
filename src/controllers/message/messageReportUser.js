const { createTrans } = require('./message')

const {Users, ComentariosV} = require('../../db')


const emailReportUser = async (text, comentId)=>{

    let user = await ComentariosV.findOne({where:{id:comentId}})
     user = await Users.findOne({where:{sub:user.UserSub}})
    
    const admin = await Users.findOne({where:{rol:"admin"}})
    try {
        let transporte = await createTrans()
        let info = await transporte.sendMail({
        from: `Request Seller" <ramirosanchezsolano@gmail.com>`, // sender address
        to: admin.email, // list of receivers
        subject: `Report user email :${user.email}`, // Subject line
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