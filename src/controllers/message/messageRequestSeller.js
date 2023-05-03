const { createTrans } = require('./message')
const {Users} = require('../../db')


const emailRequiestSeller = async (sub) =>{
    const user = await Users.findOne({where:{sub:sub}})
    const admin = await Users.findOne({where:{rol:"admin"}})
    console.log(user.email, admin.email)

    try {
        let transporte = await createTrans()
     let info = await transporte.sendMail({
        from: `Request Seller" <ramirosanchezsolano@gmail.com>`, // sender address
        to: admin.email, // list of receivers
        subject: `Request Seller sub :${sub}`, // Subject line
        text: "request seller", // plain text body
        html: `<b>User: ${user.name} requests to be a seller </b>
        <br>
        <p>email User: ${user.email}</p>`, // html body
      });
      return 'the administration will be communicated soon'
    } catch (error) {
        return error.message
    }

}

module.exports = {emailRequiestSeller}